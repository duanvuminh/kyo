"use client";

import { addClickableArea } from "@/feature/manga/actions/add-clickable-area";
import { useSvgTooltip } from "@/feature/manga/component/useSvgTooltip";
import type { UpdatedPanel } from "@/feature/manga/service/manga";
import type { Manga, MangaPanel } from "@/feature/manga/type/manga.domain";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/component/ui/popover";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { Pencil, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const MIN_DRAG_SIZE = 8;

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

function toSvgPoint(svg: SVGSVGElement, clientX: number, clientY: number) {
  const point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) {
    return { x: 0, y: 0 };
  }
  const transformed = point.matrixTransform(ctm.inverse());
  return { x: transformed.x, y: transformed.y };
}

function normalizeRect(
  start: { x: number; y: number },
  end: { x: number; y: number }
): Rect {
  return {
    x: Math.round(Math.min(start.x, end.x)),
    y: Math.round(Math.min(start.y, end.y)),
    width: Math.round(Math.abs(end.x - start.x)),
    height: Math.round(Math.abs(end.y - start.y)),
  };
}

const KMangaPanel = ({
  threadId,
  panel,
}: {
  threadId: string;
  panel: MangaPanel;
}) => {
  const { tooltip, handleClick, close } = useSvgTooltip();
  const [content, setContent] = useState(panel.content);
  const [messageId, setMessageId] = useState(panel.id);
  const [isEditing, setIsEditing] = useState(false);

  if (!content) {
    return null;
  }

  return (
    <div className="w-full">
      {isEditing ? (
        <KMangaPanelEditor
          threadId={threadId}
          messageId={messageId}
          index={panel.index}
          content={content}
          onSaved={(updated) => {
            setContent(updated.content);
            setMessageId(updated.id);
          }}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <Popover
          open={!!tooltip}
          onOpenChange={(open) => {
            if (!open) {
              close();
            }
          }}
        >
          <div className="group relative w-full" onClick={handleClick}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {tooltip && (
              <PopoverTrigger
                className="absolute size-0 p-0 border-0"
                style={{ left: tooltip.x, top: tooltip.y }}
              />
            )}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 bg-background/70 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              <Pencil className="size-4" />
            </Button>
          </div>
          <PopoverContent
            className="text-sm whitespace-pre-line w-auto max-w-xs"
            onOpenAutoFocus={(e) => e.preventDefault()}
            collisionPadding={8}
          >
            {tooltip?.text}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

interface KMangaPanelEditorProps {
  threadId: string;
  messageId: string;
  index: number;
  content: string;
  onSaved: (panel: UpdatedPanel) => void;
  onClose: () => void;
}

function KMangaPanelEditor({
  threadId,
  messageId,
  index,
  content,
  onSaved,
  onClose,
}: KMangaPanelEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const [drag, setDrag] = useState<Rect | null>(null);
  const [title, setTitle] = useState("");
  const [pending, setPending] = useState(false);

  const showForm = !!drag && drag.width >= MIN_DRAG_SIZE && drag.height >= MIN_DRAG_SIZE;

  const resetDrag = () => {
    startRef.current = null;
    setDrag(null);
    setTitle("");
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (showForm || pending) {
      return;
    }
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) {
      return;
    }
    const point = toSvgPoint(svg, e.clientX, e.clientY);
    startRef.current = point;
    setDrag({ x: point.x, y: point.y, width: 0, height: 0 });
    containerRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startRef.current) {
      return;
    }
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) {
      return;
    }
    const point = toSvgPoint(svg, e.clientX, e.clientY);
    setDrag(normalizeRect(startRef.current, point));
  };

  const handlePointerUp = () => {
    if (!showForm) {
      resetDrag();
    }
    startRef.current = null;
  };

  const submitArea = async () => {
    if (!drag || !title.trim()) {
      return;
    }
    setPending(true);
    try {
      const updated = await addClickableArea({
        threadId,
        messageId,
        index,
        content,
        title: title.trim(),
        x: drag.x,
        y: drag.y,
        width: drag.width,
        height: drag.height,
      });
      onSaved(updated);
      toast.success("Đã thêm vùng click");
      resetDrag();
    } catch (e) {
      const message =
        e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

  const svgViewBox = containerRef.current
    ?.querySelector("svg")
    ?.getAttribute("viewBox");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Kéo từ điểm A đến điểm B trên ảnh để thêm vùng click
        </p>
        <Button type="button" variant="ghost" size="icon" onClick={onClose}>
          <X className="size-4" />
        </Button>
      </div>
      <div
        ref={containerRef}
        className="relative w-full touch-none cursor-crosshair select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {drag && svgViewBox && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={svgViewBox}
          >
            <rect
              x={drag.x}
              y={drag.y}
              width={drag.width}
              height={drag.height}
              className="fill-primary/20 stroke-primary"
              strokeWidth={4}
            />
          </svg>
        )}
      </div>
      {showForm && (
        <div className="flex items-center gap-2">
          <Input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nghĩa / chú thích cho vùng này..."
            disabled={pending}
          />
          <Button
            type="button"
            size="sm"
            disabled={pending || !title.trim()}
            onClick={submitArea}
          >
            Lưu
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            disabled={pending}
            onClick={resetDrag}
          >
            Huỷ
          </Button>
        </div>
      )}
    </div>
  );
}

export const KManga = ({ manga }: { manga: Manga }) => {
  return (
    <>
      <h1>{manga.title}</h1>
      <div className="flex flex-col items-center gap-1 not-prose">
        {manga.panels.map((panel) => (
          <KMangaPanel key={panel.id} threadId={manga.id} panel={panel} />
        ))}
      </div>
    </>
  );
};
