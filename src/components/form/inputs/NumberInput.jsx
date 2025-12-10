"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NumberInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className={"flex text-xl items-center gap-1"}>
        {question.label}
        {question.required && <span className="text-red-500">*</span>}
      </Label>

      <Input
        type="number"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11"
      />
    </div>
  );
}
