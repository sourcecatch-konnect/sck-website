"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { IconMenuDeep, IconPhone } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { RainbowButton } from "@/components/ui/rainbow-button";
export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkText, setDarkText] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // if (pathname === "/our-projects") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY + 10) {
        setShow(false);
      } else if (currentY < lastScrollY - 10) {
        setShow(true);
      }

      // Change text color after 1st section (~window height)
      // if (currentY > window.innerHeight * 0.8) {
      //   setDarkText(true);
      // } else {
      //   setDarkText(false);
      // }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const words = "READY TO EXPLORE ?";

  const hamburgerLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Work",
      url: "/our-projects",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Design",
      url: "/design",
    },
    {
      name: "Develop",
      url: "/develop",
    },
    {
      name: "Market",
      url: "/market",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  useEffect(() => {
    if (pathname === "/our-projects" || pathname === "/contact") {
      setDarkText(true);
    } else {
      setDarkText(false);
    }
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: show ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="fixed top-0 z-50 w-full mx-auto py-4 px-6 "
    >
      <div
        className={`max-w-7xl mx-auto backdrop-blur-xl hidden md:flex shadow bg-black/50 justify-between items-center py-2 px-6 rounded-2xl transition-all duration-500`}
      >
        <Logo />
        <nav>
          <ul
            className={`flex gap-6 text-[15px] font-light tracking-wide transition-colors duration-300 text-white/90
            `}
          >
            {/* <li className="hover:opacity-100 opacity-80">PRICING</li> */}
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/our-projects"}>OUR WORK</Link>
            </li>
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/about-us"}>ABOUT US</Link>
            </li>
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/design"}>DESIGN</Link>
            </li>
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/develop"}>DEVELOP</Link>
            </li>
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/market"}>MARKET</Link>
            </li>
            <li className="hover:opacity-100 opacity-80">
              <Link href={"/contact"}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`max-w-7xl mx-auto backdrop-blur-xl flex justify-between md:hidden shadow  justify-between items-center py-2 px-6 rounded-2xl transition-all duration-500`}
      >
        <Logo />
        <Sheet>
          <SheetTrigger>
            <IconMenuDeep
              className={clsx(darkText ? "text-black" : "text-white")}
            />
          </SheetTrigger>
          <SheetContent>
            <div className={"relative h-full w-full"}>
              <SheetHeader className={"border-b"}>
                <SheetTitle
                  className={"text-bold text-primary text-xl uppercase"}
                >
                  <TextGenerateEffect
                    className={"text-primary"}
                    words={words}
                  />
                </SheetTitle>
                <SheetDescription className={"text-base"}>
                  Dive into our world of design, code, and creativity.
                </SheetDescription>
              </SheetHeader>

              <div className=" mt-8 px-3 py-3 z-20  w-full ">
                <div className="flex flex-col gap-2 w-full h-full">
                  {hamburgerLinks.map((item, index) => (
                    <Link
                      className="text-black  font-semibold py-2 px-2 "
                      key={index}
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" px-3 w-full mt-8">
                <RainbowButton className="flex gap-2 w-full text-base ">
                  <IconPhone className="size-5" />
                  Schedule A Call
                </RainbowButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
