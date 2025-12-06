"use client";

import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/ui/shine-border";
import { motion } from "framer-motion";
import React from "react";

export default function CardInput({ question, value, onChange }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  return (
    <div className="flex flex-col gap-5">
      <Label className="text-xl font-medium">{question.label}</Label>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3"
      >
        {question.options.map((item) => (
          <OptionCard
            key={item.value}
            text={item.label}
            selected={value === item.value}
            onSelect={() => onChange(item.value)}
          />
        ))}
      </motion.div>
    </div>
  );
}

// --------------------------------------
// Clean Long-Text Option Card
// --------------------------------------
const OptionCard = ({ text, selected, onSelect }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      onClick={onSelect}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
        flex flex-col w-full px-5 py-5 rounded-xl cursor-pointer
         transition-all shadow-sm relative duration-200 text-left select-none

        ${
          selected
            ? " bg-primary text-white  shadow-xl"
            : "border-gray-300 bg-white hover:border-black/30 hover:bg-gray-50"
        }
      `}
    >
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <span className="text-base font-medium leading-relaxed">{text}</span>
    </motion.div>
  );
};
