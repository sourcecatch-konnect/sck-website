"use client";

import CardInput from "./inputs/CardInput";
import DropdownInput from "./inputs/DropdownInput";
import EmailInput from "./inputs/EmailInput";
import FileUpload from "./inputs/FileUpload";
import MultiSelect from "./inputs/MultiSelect";
import NumberInput from "./inputs/NumberInput";
import PhoneInputField from "./inputs/PhoneInput";

import RadioInput from "./inputs/RadioInput";
import TextareaInput from "./inputs/TextAreaInput";
import TextInput from "./inputs/TextInput";

const inputMap = {
  text: TextInput,
  radio: RadioInput,
  number: NumberInput,
  multi: MultiSelect,
  dropdown: DropdownInput,
  file: FileUpload,
  card: CardInput,
  textarea: TextareaInput,
  email: EmailInput,
  phone: PhoneInputField,
};

export default function QuestionRenderer({ question, value, onChange }) {
  const InputComponent = inputMap[question.type];

  if (!InputComponent) return <p>Unknown Question Type : {question.type}</p>;
  return (
    <InputComponent question={question} value={value} onChange={onChange} />
  );
}
