"use client";

import { useState } from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

export default function MultiSelect({ question, value = [], onChange }) {
  const [open, setOpen] = useState(false);

  const toggle = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Label className="text-lg">{question.label}</Label>

      <div
        className="border rounded-lg p-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {value.length > 0 ? (
          <div className="flex gap-2 flex-wrap">
            {value.map((v) => (
              <Badge key={v} variant="secondary">
                {v}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Select options...</p>
        )}
      </div>

      {open && (
        <Command className="border rounded-lg mt-2">
          <CommandList>
            <CommandGroup>
              {question.options.map((opt) => (
                <CommandItem
                  key={opt}
                  onSelect={() => toggle(opt)}
                  className="cursor-pointer flex justify-between"
                >
                  {opt}
                  {value.includes(opt) && <span>✓</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    </div>
  );
}
