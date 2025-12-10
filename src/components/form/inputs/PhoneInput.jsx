"use client";

import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // important for flags + layout
import { isValidPhoneNumber } from "react-phone-number-input";
import "@/styles/phone-input.css";

export default function PhoneInputField({ question, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className={"flex text-xl items-center gap-1"}>
        {question.label}
        {question.required && <span className="text-red-500">*</span>}
      </Label>

      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={onChange}
        className="phone-input border rounded-xl px-4 py-3 bg-white"
      />

      {value && !isValidPhoneNumber(value) && (
        <p className="text-sm text-red-500">Invalid phone number</p>
      )}
    </div>
  );
}
