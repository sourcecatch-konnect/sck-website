import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function TextareaInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className={"flex text-xl items-center gap-1"}>
        {question.label}
        {question.required && <span className="text-red-500">*</span>}
      </Label>
      <Textarea
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder="Type here..."
      />
    </div>
  );
}
