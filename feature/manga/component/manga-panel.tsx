"use client";

import { addClickableArea } from "@/feature/manga/actions/add-clickable-area";
import { useSvgTooltip } from "@/feature/manga/component/useSvgTooltip";
import type { UpdatedPanel } from "@/feature/manga/service/manga";
import type { Manga, MangaArea, MangaPanel } from "@/feature/manga/type/manga.domain";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/component/ui/popover";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { Pencil, X } from "lucide-react";
import { RefObject, useRef, useState } from "react";
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
  const [current, setCurrent] = useState(panel);
  const [isEditing, setIsEditing] = useState(false);

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
        <KMangaPanelView panel={current} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
};

function MangaClickableAreas({
  areas,
  containerRef,
  showTooltip,
}: {
  areas: MangaArea[];
  containerRef: RefObject<HTMLDivElement | null>;
  showTooltip: ReturnType<typeof useSvgTooltip>["showTooltip"];
}) {
  return (
    <>
      {areas.map((area, i) => (
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
    </>
  );
}

function MangaPanelImage({
  panel,
  containerRef,
  showTooltip,
}: {
  panel: MangaPanel;
  containerRef: RefObject<HTMLDivElement | null>;
  showTooltip: ReturnType<typeof useSvgTooltip>["showTooltip"];
}) {
  return (
    <svg
      style={{ width: "100%" }}
      viewBox={`0 0 ${panel.viewBoxWidth} ${panel.viewBoxHeight}`}
    >
      <image href={panel.imageUrl} width={panel.viewBoxWidth} />
      <MangaClickableAreas
        areas={panel.areas}
        containerRef={containerRef}
        showTooltip={showTooltip}
      />
    </svg>
  );
}

function MangaEditButton({ onEdit }: { onEdit: () => void }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute top-1 right-1 bg-background/70 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
      onClick={(e) => {
        e.stopPropagation();
        onEdit();
      }}
    >
      <Pencil className="size-4" />
    </Button>
  );
}

function KMangaPanelView({
  panel,
  onEdit,
}: {
  panel: MangaPanel;
  onEdit: () => void;
}) {
  const { tooltip, showTooltip, close } = useSvgTooltip();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Popover open={!!tooltip} onOpenChange={(open) => !open && close()}>
      <div
        ref={containerRef}
        className="group relative w-full"
        onClick={() => close()}
      >
        <MangaPanelImage panel={panel} containerRef={containerRef} showTooltip={showTooltip} />
        {tooltip && (
          <PopoverTrigger
            className="absolute size-0 p-0 border-0"
            style={{ left: tooltip.x, top: tooltip.y }}
          />
        )}
        <MangaEditButton onEdit={onEdit} />
      </div>
      <PopoverContent
        className="text-sm whitespace-pre-line w-auto max-w-xs"
        onOpenAutoFocus={(e) => e.preventDefault()}
        collisionPadding={8}
      >
        {tooltip?.text}
      </PopoverContent>
    </Popover>
  );
}

function useDragToDrawRect(
  svgRef: RefObject<SVGSVGElement | null>,
  disabled: boolean
) {
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const [drag, setDrag] = useState<Rect | null>(null);
  const showForm = !!drag && drag.width >= MIN_DRAG_SIZE && drag.height >= MIN_DRAG_SIZE;

  const resetDrag = () => {
    startRef.current = null;
    setDrag(null);
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (showForm || disabled || !svgRef.current) {
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

  return { drag, showForm, handlePointerDown, handlePointerMove, handlePointerUp, resetDrag };
}

function MangaAreaOutlines({ areas }: { areas: MangaArea[] }) {
  return (
    <>
      {areas.map((area, i) => (
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
    </>
  );
}

interface MangaPanelEditorCanvasProps {
  svgRef: RefObject<SVGSVGElement | null>;
  panel: MangaPanel;
  drag: Rect | null;
  onPointerDown: (e: React.PointerEvent<SVGSVGElement>) => void;
  onPointerMove: (e: React.PointerEvent<SVGSVGElement>) => void;
  onPointerUp: () => void;
}

function MangaPanelEditorCanvas({
  svgRef,
  panel,
  drag,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: MangaPanelEditorCanvasProps) {
  return (
    <svg
      ref={svgRef}
      style={{ width: "100%" }}
      viewBox={`0 0 ${panel.viewBoxWidth} ${panel.viewBoxHeight}`}
      className="touch-none cursor-crosshair select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <image href={panel.imageUrl} width={panel.viewBoxWidth} />
      <MangaAreaOutlines areas={panel.areas} />
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
  );
}

interface MangaAreaTitleFormProps {
  title: string;
  pending: boolean;
  onTitleChange: (v: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

function MangaAreaTitleForm({
  title,
  pending,
  onTitleChange,
  onSubmit,
  onCancel,
}: MangaAreaTitleFormProps) {
  return (
    <div className="flex items-center gap-2">
      <Input
        autoFocus
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Nghĩa / chú thích cho vùng này..."
        disabled={pending}
      />
      <Button type="button" size="sm" disabled={pending || !title.trim()} onClick={onSubmit}>
        Lưu
      </Button>
      <Button type="button" size="sm" variant="ghost" disabled={pending} onClick={onCancel}>
        Huỷ
      </Button>
    </div>
  );
}

interface KMangaPanelEditorProps {
  threadId: string;
  messageId: string;
  panel: MangaPanel;
  onSaved: (panel: UpdatedPanel) => void;
  onClose: () => void;
}

interface SaveNewAreaParams {
  threadId: string;
  messageId: string;
  panel: MangaPanel;
  title: string;
  drag: Rect;
  onSaved: (panel: UpdatedPanel) => void;
  onDone: () => void;
  setPending: (pending: boolean) => void;
}

async function saveNewArea({
  threadId,
  messageId,
  panel,
  title,
  drag,
  onSaved,
  onDone,
  setPending,
}: SaveNewAreaParams) {
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
      newArea: { title, ...drag },
    });
    onSaved(updated);
    toast.success(
      updated.replacedCount > 0
        ? `Đã thay thế ${updated.replacedCount} vùng trùng lặp`
        : "Đã thêm vùng click"
    );
    onDone();
  } catch (e) {
    const message =
      e instanceof AppError ? e.customMessage : new AppError(ErrorCode.UNKNOWN).customMessage;
    toast.error(message);
  } finally {
    setPending(false);
  }
}

function MangaEditorHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xs text-muted-foreground">
        Kéo từ điểm A đến điểm B trên ảnh để thêm vùng click
      </p>
      <Button type="button" variant="ghost" size="icon" onClick={onClose}>
        <X className="size-4" />
      </Button>
    </div>
  );
}

interface UseAreaTitleFormParams {
  threadId: string;
  messageId: string;
  panel: MangaPanel;
  drag: Rect | null;
  onSaved: (panel: UpdatedPanel) => void;
  resetDrag: () => void;
  setPending: (pending: boolean) => void;
}

function useAreaTitleForm({
  threadId,
  messageId,
  panel,
  drag,
  onSaved,
  resetDrag,
  setPending,
}: UseAreaTitleFormParams) {
  const [title, setTitle] = useState("");

  const cancel = () => {
    resetDrag();
    setTitle("");
  };

  const submit = () => {
    if (!drag || !title.trim()) {
      return;
    }
    saveNewArea({ threadId, messageId, panel, title: title.trim(), drag, onSaved, onDone: cancel, setPending });
  };

  return { title, setTitle, submit, cancel };
}

function KMangaPanelEditor({
  threadId,
  messageId,
  panel,
  onSaved,
  onClose,
}: KMangaPanelEditorProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pending, setPending] = useState(false);
  const { drag, showForm, handlePointerDown, handlePointerMove, handlePointerUp, resetDrag } =
    useDragToDrawRect(svgRef, pending);
  const { title, setTitle, submit, cancel } =
    useAreaTitleForm({ threadId, messageId, panel, drag, onSaved, resetDrag, setPending });

  return (
    <div className="flex flex-col gap-2">
      <MangaEditorHeader onClose={onClose} />
      <MangaPanelEditorCanvas
        svgRef={svgRef}
        panel={panel}
        drag={drag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
      {showForm && (
        <MangaAreaTitleForm
          title={title}
          pending={pending}
          onTitleChange={setTitle}
          onSubmit={submit}
          onCancel={cancel}
        />
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
