"use client";

import { Label } from "@/components/ui/label";

export default function FileUpload({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-lg">{question.label}</Label>

      <input
        type="file"
        className="border p-3 rounded-lg"
        onChange={(e) => onChange(e.target.files[0])}
      />

      {value && <p className="text-sm text-gray-600">Selected: {value.name}</p>}
    </div>
  );
}
