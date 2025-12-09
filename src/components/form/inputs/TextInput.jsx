import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function TextInput({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{question.label}</Label>
      <Input
        onChange={(e) => onChange(e.target.value)}
        value={value ?? ""}
        placeholder="Type here..."
      />
    </div>
  );
}
