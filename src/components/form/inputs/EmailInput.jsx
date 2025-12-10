"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmailInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className={"flex text-xl items-center gap-1"}>
        {question.label}
        {question.required && <span className="text-red-500">*</span>}
      </Label>

      <Input
        type="email"
        placeholder={question.placeholder || "your@email.com"}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="h-11"
      />

      {value && !/^\S+@\S+\.\S+$/.test(value) && (
        <p className="text-sm text-red-500 mt-1">Invalid email address</p>
      )}
    </div>
  );
}
