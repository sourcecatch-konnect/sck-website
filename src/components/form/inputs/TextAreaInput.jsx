import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function TextareaInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{question.label}</Label>
      <Textarea
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder="Type here..."
      />
    </div>
  );
}
