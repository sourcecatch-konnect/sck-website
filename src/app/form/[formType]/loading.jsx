import { IconCircle } from "@tabler/icons-react";
import React from "react";

export default function loading() {
  return (
    <div className="flex h-screen justify-center items-center animate-spin ">
      <IconCircle className="h-8 w-8 text-gray-600" />
    </div>
  );
}
