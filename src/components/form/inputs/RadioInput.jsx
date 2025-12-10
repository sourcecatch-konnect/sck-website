"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RadioInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <Label className={"flex text-xl items-center gap-1"}>
        {question.label}
        {question.required && <span className="text-red-500">*</span>}
      </Label>
      <RadioGroup
        value={value}
        onValueChange={(v) => onChange(v)}
        className="flex flex-col gap-3"
      >
        {question.options.map((opt) => (
          <div key={opt} className="flex items-center gap-3">
            <RadioGroupItem value={opt} id={opt} />
            <Label htmlFor={opt}>{opt}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
