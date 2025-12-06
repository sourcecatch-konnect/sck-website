"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function DropdownInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-lg">{question.label}</Label>

      <Select value={value} onValueChange={(v) => onChange(v)}>
        <SelectTrigger className="h-11">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>

        <SelectContent>
          {question.options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
