"use client";

import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";

interface StringListEditorProps {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}

export function StringListEditor({ label, items, onChange }: StringListEditorProps) {
  const updateLine = (index: number, value: string) => {
    onChange(items.map((item, i) => (i === index ? value : item)));
  };

  const removeLine = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const addLine = () => onChange([...items, ""]);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {items.map((item, index) => (
        <div key={index} className="flex gap-1">
          <Input value={item} onChange={(e) => updateLine(index, e.target.value)} className="text-sm" />
          <Button type="button" variant="ghost" size="sm" onClick={() => removeLine(index)}>
            Xoá
          </Button>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={addLine} className="self-start">
        + Thêm dòng
      </Button>
    </div>
  );
}
