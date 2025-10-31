"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // adjust import path

export default function HoverAccordion({
  items,
  hideIcon = false,
  className = "",
}) {
  const [openItem, setOpenItem] = useState("");

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem}
      onValueChange={setOpenItem}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          onMouseEnter={() => setOpenItem(item.value)}
          onMouseLeave={() => setOpenItem("")}
        >
          <AccordionTrigger
            hideIcon={hideIcon}
            className="flex items-center justify-between w-full"
          >
            {item.trigger}
            {!hideIcon && null}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
