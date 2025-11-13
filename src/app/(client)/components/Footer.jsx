"use client";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { getCalApi } from "@calcom/embed-react";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandX,
  IconCopyright,
  IconSquareChevronRightFilled,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Footer() {
  const marketing = ["MARKETING", "CAMPAIGNS", "BRANDING", "DEVELOPMENT"];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "lets-konnect-and-grow" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#e85102" },
          dark: { "cal-brand": "#e85102" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <>
      <div className="bg-primary h-15 flex items-center">
        <Marquee className={"[--duration:20s]"}>
          {marketing.map((item, index) => (
            <p className="text-white text-2xl font-bold" key={index}>
              {item}
            </p>
          ))}
        </Marquee>
      </div>
      <div className="p-5 md:p-15  bg-black ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          <div className="flex flex-col gap-6 w-1/2">
            <span className="font-bold text-md text-white">Design</span>
            <div>
              <div className="text-white/60 font-light flex flex-col text-sm space-y-2">
                <Link href="/design">Logo & Branding</Link>
                <Link href="/design">Graphics Print</Link>
                <Link href="/design">Photography</Link>
                <Link href="/design">Video Production</Link>
                <Link href="/design">Packaginng & Product Design</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <span className="font-bold text-md text-white">Develop</span>
            <div>
              <div className="text-white/60 font-light flex flex-col  text-sm space-y-2">
                <Link href={"/develop"}>Website Development</Link>
                <Link href={"/develop"}>Web Application</Link>
                <Link href={"/develop"}>Mobile Application</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-bold text-md text-white">Market</span>
            <div>
              <div className="text-white/60 font-light text-sm flex flex-col space-y-2">
                <Link href={"/market"}>Performance Marketing</Link>
                <Link href={"/market"}>Email Marketing</Link>
                <Link href={"/market"}>Social Media Marketing</Link>
                <Link href={"/market"}>Search Engine Optimisation</Link>
                <Link href={"/market"}>Lead Generation</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-bold text-md text-white">Information</span>
            <div>
              <div className="text-white/60 font-light text-sm flex flex-col space-y-2">
                <Link href={"https://blogs.sckonnect.com"}>Blogs</Link>

                <Link href={"/contact"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-15 flex flex-col gap-3">
          <div className="flex gap-3 text-white">
            <Link
              href={"https://in.linkedin.com/company/sourcecatch-konnect"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin />
            </Link>
            <Link
              href={"https://www.facebook.com/SourceCatchKonnect"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebook />
            </Link>
            <Link
              href={"https://www.instagram.com/sckonnect/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram />
            </Link>
            <Link
              href="https://x.com/SourcecatchK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandX />
            </Link>
            <Link
              href={"https://in.pinterest.com/sourcecatchkonnect/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandPinterest />
            </Link>
          </div>
          <div className="flex gap-1 items-center text-white font-light">
            <IconCopyright />
            Copyright 2025 | All Rights Reserved By SourceCatch Konnect
          </div>

          <Button
            data-cal-namespace="lets-konnect-and-grow"
            data-cal-link="sckonnect/lets-konnect-and-grow"
            data-cal-config='{"layout":"month_view"}'
            variant={"outline"}
            className={"w-max mt-3 rounded-xl"}
          >
            Get A Free Quote
          </Button>
        </div>
      </div>

      <div className="bg-black px-5 md:px-15">
        <div className=" text-left overflow-hidden">
          <span className="flex gap-3 pl-4 justify-start text-white text-6xl items-center font-light">
            LETS <IconSquareChevronRightFilled className="size-12" />
          </span>
          <div className="h-max  flex items-center justify-center">
            <TextHoverEffect text="KONNECT" />
          </div>
          {/* <span className="block text-white font-bold uppercase whitespace-nowrap leading-none text-[18vw]">
            KONNECT
          </span> */}
        </div>
      </div>
    </>
  );
}
