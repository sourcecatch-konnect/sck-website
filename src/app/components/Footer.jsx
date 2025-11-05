import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
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
import React from "react";

export default function Footer() {
  const marketing = ["MARKETING", "CAMPAIGNS", "BRANDING", "DEVELOPMENT"];
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
              <ul className="text-white/60 font-light text-sm space-y-2">
                <li>Logo & Branding</li>
                <li>Graphics Print</li>
                <li>Photography</li>
                <li>Video Production</li>
                <li>Packaginng & Product Design</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <span className="font-bold text-md text-white">Develop</span>
            <div>
              <ul className="text-white/60 font-light text-sm space-y-2">
                <li>Website Development</li>
                <li>Web Application</li>
                <li>Mobile Application</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-bold text-md text-white">Market</span>
            <div>
              <ul className="text-white/60 font-light text-sm space-y-2">
                <li>Performance Marketing</li>
                <li>Email Marketing</li>
                <li>Social Media Marketing</li>
                <li>Search Engine Optimisation</li>
                <li>Lead Generation</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="font-bold text-md text-white">Information</span>
            <div>
              <ul className="text-white/60 font-light text-sm space-y-2">
                <li>Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
                <li>Return & Refund Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-15 flex flex-col gap-3">
          <div className="flex gap-3 text-white">
            <IconBrandLinkedin />
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandX />
            <IconBrandPinterest />
          </div>
          <div className="flex gap-1 items-center text-white font-light">
            <IconCopyright />
            Copyright 2025 | All Rights Reserved By SourceCatch Konnect
          </div>

          <Button variant={"outline"} className={"w-max mt-3 rounded-xl"}>
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
