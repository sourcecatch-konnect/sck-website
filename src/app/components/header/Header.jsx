"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenuDeep } from "@tabler/icons-react";
import clsx from "clsx";

export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkText, setDarkText] = useState(false); // 👈 for toggling color

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Hide/Show header
      if (currentY > lastScrollY + 10) {
        setShow(false);
      } else if (currentY < lastScrollY - 10) {
        setShow(true);
      }

      // Change text color after 1st section (~window height)
      if (currentY > window.innerHeight * 0.8) {
        setDarkText(true);
      } else {
        setDarkText(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      animate={{ y: show ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="fixed top-0 z-50 w-full mx-auto py-4 px-6 "
    >
      <div
        className={`max-w-7xl mx-auto backdrop-blur-xl hidden md:flex shadow ${
          darkText ? "bg-white/60" : "bg-white/10"
        } justify-between items-center py-2 px-6 rounded-2xl transition-all duration-500`}
      >
        <Logo />
        <nav>
          <ul
            className={`flex gap-6 text-[15px] font-light tracking-wide transition-colors duration-300 ${
              darkText ? "text-black/90" : "text-white/90"
            }`}
          >
            <li className="hover:opacity-100 opacity-80">PRICING</li>
            <li className="hover:opacity-100 opacity-80">OUR WORK</li>
            <li className="hover:opacity-100 opacity-80">ABOUT US</li>
            <li className="hover:opacity-100 opacity-80">DESIGN</li>
            <li className="hover:opacity-100 opacity-80">DEVELOP</li>
            <li className="hover:opacity-100 opacity-80">MARKET</li>
          </ul>
        </nav>
      </div>
      <div
        className={`max-w-7xl mx-auto backdrop-blur-xl flex justify-between md:hidden shadow ${
          darkText ? "bg-white/60 " : "bg-white/10 text-black"
        } justify-between items-center py-2 px-6 rounded-2xl transition-all duration-500`}
      >
        <Logo />
        <Sheet>
          <SheetTrigger>
            <IconMenuDeep
              className={clsx(darkText ? "text-black" : "text-white")}
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
