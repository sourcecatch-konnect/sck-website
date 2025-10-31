import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ darkText }) {
  return (
    <Link href={"/"}>
      <Image
        src={darkText ? "/logo.png" : "/sck-logo.png"}
        alt="Sckonnect Logo"
        width="200"
        height="100"
      />
    </Link>
  );
}
