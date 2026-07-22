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
  const { tooltip, showTooltip, close } = useSvgTooltip();
  const [current, setCurrent] = useState(panel);
  const [isEditing, setIsEditing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!current.imageUrl) {
    return null;
  }

  return (
    <div className="w-full">
      {isEditing ? (
        <KMangaPanelEditor
          threadId={threadId}
          messageId={current.id}
          panel={current}
          onSaved={(updated) =>
            setCurrent((prev) => ({ ...prev, ...updated }))
          }
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
          <div
            ref={containerRef}
            className="group relative w-full"
            onClick={() => close()}
          >
            <svg
              style={{ width: "100%" }}
              viewBox={`0 0 ${current.viewBoxWidth} ${current.viewBoxHeight}`}
            >
              <image href={current.imageUrl} width={current.viewBoxWidth} />
              {current.areas.map((area, i) => (
                <a
                  key={i}
                  href="#"
                  className="group/area"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (containerRef.current) {
                      showTooltip(e, containerRef.current, area.title);
                    }
                  }}
                >
                  <rect
                    x={area.x}
                    y={area.y}
                    width={area.width}
                    height={area.height}
                    className="fill-transparent group-hover/area:stroke-white group-hover/area:stroke-2 group-hover/area:opacity-20"
                  />
                </a>
              ))}
            </svg>
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
  panel: MangaPanel;
  onSaved: (panel: UpdatedPanel) => void;
  onClose: () => void;
}

function KMangaPanelEditor({
  threadId,
  messageId,
  panel,
  onSaved,
  onClose,
}: KMangaPanelEditorProps) {
  const svgRef = useRef<SVGSVGElement>(null);
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

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (showForm || pending || !svgRef.current) {
      return;
    }
    const point = toSvgPoint(svgRef.current, e.clientX, e.clientY);
    startRef.current = point;
    setDrag({ x: point.x, y: point.y, width: 0, height: 0 });
    svgRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!startRef.current || !svgRef.current) {
      return;
    }
    const point = toSvgPoint(svgRef.current, e.clientX, e.clientY);
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
        index: panel.index,
        imageUrl: panel.imageUrl,
        viewBoxWidth: panel.viewBoxWidth,
        viewBoxHeight: panel.viewBoxHeight,
        areas: panel.areas,
        newArea: {
          title: title.trim(),
          x: drag.x,
          y: drag.y,
          width: drag.width,
          height: drag.height,
        },
      });
      onSaved(updated);
      toast.success(
        updated.replacedCount > 0
          ? `Đã thay thế ${updated.replacedCount} vùng trùng lặp`
          : "Đã thêm vùng click"
      );
      resetDrag();
    } catch (e) {
      const message =
        e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
      toast.error(message);
    } finally {
      setPending(false);
    }
  };

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
      <svg
        ref={svgRef}
        style={{ width: "100%" }}
        viewBox={`0 0 ${panel.viewBoxWidth} ${panel.viewBoxHeight}`}
        className="touch-none cursor-crosshair select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <image href={panel.imageUrl} width={panel.viewBoxWidth} />
        {panel.areas.map((area, i) => (
          <rect
            key={i}
            x={area.x}
            y={area.y}
            width={area.width}
            height={area.height}
            className="fill-transparent stroke-white/50"
            strokeWidth={1}
          />
        ))}
        {drag && (
          <rect
            x={drag.x}
            y={drag.y}
            width={drag.width}
            height={drag.height}
            className="fill-primary/20 stroke-primary"
            strokeWidth={4}
          />
        )}
      </svg>
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
