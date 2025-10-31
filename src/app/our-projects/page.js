"use client";
import React, { useRef } from "react";

import { div } from "motion/react-client";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import ReactLenis from "lenis/dist/lenis-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import clsx from "clsx";
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextAnimate } from "@/components/ui/text-animate";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import HorizontalScroll from "../components/HorizontalScroll";

const SECTION_HEIGHT = 1500;
export default function Home() {
  return (
    <>
      <section className="bg-white">
        <ReactLenis root options={{ lerp: 0.05 }}>
          <Hero />
          <RestOfComp />
          {/* <div className="h-screen"></div> */}
        </ReactLenis>
      </section>
    </>
  );
}

const Hero = () => {
  return (
    <div
      className="relative w-full h-full"
      // style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <CenterImage />
      <ParallaxImages />
      {/* <div className=" absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-b from-zinc-950/0 to-white" /> */}
      <div className=" z-50  mt-20 pt-40 w-full">
        <div className="max-w-6xl w-full mx-auto mt-80">
          <div className="font-bold flex flex-col gap-1 items-center">
            <span className="text-7xl flex gap-4 items-end text-primary open-condensed-bold">
              BABA
              <span className="p-1 bg-black rounded-md mb-2 ">
                <ArrowUpRight className="text-white size-6" />
              </span>
            </span>

            <div className="relative inline-block">
              <div className="h-[1px] pr-4 w-30 bg-primary"></div>
              <h2 className="text-7xl open-condensed-bold font-bold text-black tracking-[16px]">
                NAMKEEN
              </h2>
              <span className="tracking-[16px] open-condensed-bold absolute top-full left-0 text-7xl font-bold text-black opacity-5 scale-y-[-1] ">
                NAMKEEN
              </span>
            </div>
          </div>
          <div className="mt-25 font-light  text-black text-center w-full max-w-3xl mx-auto">
            We created babanamkeen.com as a dynamic eCommerce website with
            attractive, user-friendly designs and integrated marketing
            solutions, helping the brand showcase its products effectively and
            reach a wider audience online.
          </div>
        </div>
      </div>
      {/* <div className="h-80 w-full bg-primary"></div> */}
    </div>
  );
};
const CenterImage = () => {
  const { scrollY } = useScroll(); //We used motions built in hook to calculate y axis scroll pixels

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(  ${clip1}% ${clip1}%,   ${clip2}% ${clip1}%,  ${clip2}% ${clip2}%, ${clip1}% ${clip2}%  )`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

  return (
    <motion.div
      className="sticky flex items-center justify-center bg-zinc-900  top-0 h-screen w-full "
      style={{
        opacity,
        backgroundSize,
        // clipPath: " polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)",

        clipPath,
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col text-6xl z-10 text-white font-bold">
        <span className="text-4xl font-light open-condensed-bold">Our</span>
        <span className="text-7xl"> Projects</span>
      </div>
      <ShootingStars />
      <StarsBackground />
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className=" mx-auto max-w-5xl px-4 pt-[200px] ">
      <DBNLondon className={" mx-auto w-full "} start={200} end={-250} />

      <ParallaxImg
        src={"./dbn-img.webp"}
        className={" mx-auto w-2/3"}
        start={200}
        end={-250}
      />
      <ParallaxImg
        src={
          "https://ik.imagekit.io/qfj6zsfnqn/6k-sales.webp?updatedAt=1760179313189"
        }
        className={"ml-auto  w-1/3"}
        start={-200}
        end={200}
      />
      <ParallaxImg
        src={"/moonimg.png"}
        alt="Orbiting satellite"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  // const x = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};
const DBNLondon = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  // const x = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );
  return (
    <div
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={clsx(
        className,
        "  bg-black rounded-2xl overflow-hidden p-5 flex gap-5 h-50 z-20 relative"
      )}
    >
      <BackgroundRippleEffect />
      <div className="relative flex flex-col w-full text-white">
        <Image
          width={"100"}
          height={"100"}
          alt="DBN Logo"
          className="absolute border border-neutral-600 py-2 rounded-2xl top-0 right-0"
          src={
            "https://ik.imagekit.io/qfj6zsfnqn/logo-dbn.png?updatedAt=1760089798316"
          }
        />
        <span className="bottom-0 right-0 absolute text-base text-right">
          For <strong>DJ Kapil</strong> under <strong>DBN London</strong> ,
          <br />
          we took event marketing to the next level. 
        </span>
        <span className="open-condensed-bold text-5xl">DBN</span>
        <span className="open-condensed text-8xl">LONDON</span>
      </div>
    </div>
  );
};

const RestOfComp = () => {
  const row1 = [
    {
      src: "/packet1.png",
    },
    {
      src: "/packet2.png",
    },
    {
      src: "/packet3.png",
    },
    {
      src: "/packet4.png",
    },
    {
      src: "/packet5.png",
    },
    {
      src: "/packet6.png",
    },
    {
      src: "/packet7.png",
    },
    {
      src: "/packet8.png",
    },
    {
      src: "/packet9.png",
    },
    {
      src: "/packet10.png",
    },
    {
      src: "/packet11.png",
    },
    {
      src: "/packet12.png",
    },
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <>
      {/* BABA NAMKEEN SECTION */}
      <div className="relative flex justify-center items-center  min-h-90  bg-primary w-full my-20">
        <div className="relative flex z-20 w-full  flex-col  ">
          <Marquee repeat={4} className="[--duration:20s]">
            {row1.map((item, index) => (
              <Image
                alt="baba namkeen packets"
                key={index}
                src={item.src}
                width={100}
                height={100}
                {...item}
              />
            ))}
          </Marquee>
          <Marquee reverse repeat={4} className="[--duration:20s]">
            {row1.map((item, index) => (
              <Image
                alt="baba namkeen packets"
                key={index}
                src={item.src}
                width={100}
                height={100}
                {...item}
              />
            ))}
          </Marquee>
          <Marquee repeat={4} className="[--duration:20s]">
            {row1.map((item, index) => (
              <Image
                alt="baba namkeen packets"
                key={index}
                src={item.src}
                width={100}
                height={100}
                {...item}
              />
            ))}
          </Marquee>
        </div>
        <motion.div className="absolute bottom-0 z-20">
          <Image src="/baba-man.png" alt="Baba Man" width={350} height={350} />
        </motion.div>
      </div>
      {/* APNA FOOD SECTION */}
      <div className="max-w-6xl mx-auto w-full my-25 flex gap-3">
        <div className="w-1/2 ">
          <h2 className="flex flex-col ">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="font-bold text-primary text-6xl "
            >
              APNA
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className="text-8xl font-bold"
            >
              FOOD
            </TextAnimate>
          </h2>
          <p className="font-light mt-2">
            We built Apna Food as a feature-rich eCommerce platform with secure
            payment integration, intuitive product browsing, and responsive
            design, providing customers with a seamless shopping experience and
            businesses with reliable online growth.
          </p>
          <div className="bg-black p-1 rounded-md w-max mt-2">
            <ArrowUpRight className="text-white size-6" />
          </div>
        </div>
        <div className="w-1/2 relative border flex items-center justify-center overflow-hidden rounded-2xl ">
          <Image
            src="/apna-food-img.webp"
            alt="Apna Food"
            fill
            className="object-cover"
          />
          <BorderBeam duration={8} size={100} borderWidth={2} />
        </div>
      </div>
      {/*Indinite Header*/}
      <div
        ref={ref}
        className=" w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-50 pointer-events-none"></div>
        <motion.h1
          style={{ y: textY }}
          className="font-bold text-white  text-7xl md:text-9xl relative z-10"
        >
          <AuroraText>INDINITE</AuroraText>
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0 opacity-80 "
          style={{
            backgroundImage: `url(/image-full.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />

        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/image-bottom.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Event Booking */}

      <div className="w-full my-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-3">
          <div className=" p-2 w-full grid grid-cols-3   gap-3">
            <div className=" col-span-2  overflow-hidden relative h-45 px-12 py-3 rounded-md  flex flex-col  bg-[#EC7231]">
              <div className="absolute left-0 top-0 w-8 h-full bg-black"></div>
              <div className="w-5 h-5 bg-white rounded-full top-1.5 left-1.5 absolute"></div>
              <div className="w-5 h-5 bg-white rounded-full bottom-1.5 left-1.5 absolute"></div>
              <span className="font-bold text-white text-xl">A</span>
              <div className="font-passion text-6xl flex flex-col gap-1 ">
                <span> EVENT BOOKING</span>{" "}
                <span className="mt-[-1rem]">PLATFORM</span>
              </div>
            </div>
            <div className="row-span-2">
              <div className="border-black relative  border h-[70%] rounded-md p-4  w-full  overflow-hidden ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-md"
                >
                  <source
                    src="https://ik.imagekit.io/qfj6zsfnqn/heads.mp4?updatedAt=1760604635828"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="text-sm my-5 text-justify">
                We developed events.indinite.co.uk as a custom event booking
                platform with seamless scheduling, secure transactions, and a
                user-friendly interface, enabling organizers and attendees to
                manage events efficiently and effortlessly online.
              </div>
            </div>
            <div className="rounded-md  h-60 col-span-2 w-full p-3 border border-primary">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-md"
              >
                <source
                  src="https://ik.imagekit.io/qfj6zsfnqn/SCK%20Files.mp4?updatedAt=1760604635797"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-5 text-2xl">
            <span>
              20K+ GBP in ticket sales processed through our custom event
              booking platform.
            </span>
            <span>
              <span className="text-primary">5000+</span> bookings managed with
              automated QR code ticketing and email workflows.
            </span>
            <span>
              <span className="text-primary">99.99%</span> uptime achieved
              during high-traffic event launches.
            </span>
          </div>
        </div>
      </div>

      {/* The Fabric Nation */}

      <div className="my-20 py-20 w-full flex justify-between gap-2">
        <div className="max-w-6xl relative mx-auto w-full grid grid-cols-2">
          <div className="sticky top-10  self-start h-fit  w-full   text-[7rem] open-condensed-bold">
            <div className="border w-[20rem] leading-1 border-black"></div>
            THE <span className="text-primary">FAB</span>RIC <br />
            NATION
          </div>
          <div className="relative w-full">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-end">
                <p className="text-xl uppercase tracking-widest">
                  From crafting posts to crafting conversions we handled
                  everything.
                </p>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1279_564)">
                    <path
                      d="M11.666 30.625H23.3327"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 24.7915V30.6248"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.209 5.8335H24.7923"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.7923 5.8335V17.5002C24.7923 19.434 24.0241 21.2887 22.6566 22.6562C21.2892 24.0236 19.4345 24.7918 17.5007 24.7918C15.5668 24.7918 13.7121 24.0236 12.3447 22.6562C10.9772 21.2887 10.209 19.434 10.209 17.5002V5.8335"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.375 13.1252C4.375 13.8987 4.68229 14.6406 5.22927 15.1876C5.77625 15.7345 6.51812 16.0418 7.29167 16.0418C8.06521 16.0418 8.80708 15.7345 9.35406 15.1876C9.90104 14.6406 10.2083 13.8987 10.2083 13.1252C10.2083 12.3516 9.90104 11.6097 9.35406 11.0628C8.80708 10.5158 8.06521 10.2085 7.29167 10.2085C6.51812 10.2085 5.77625 10.5158 5.22927 11.0628C4.68229 11.6097 4.375 12.3516 4.375 13.1252Z"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.791 13.1252C24.791 13.8987 25.0983 14.6406 25.6453 15.1876C26.1923 15.7345 26.9341 16.0418 27.7077 16.0418C28.4812 16.0418 29.2231 15.7345 29.7701 15.1876C30.3171 14.6406 30.6243 13.8987 30.6243 13.1252C30.6243 12.3516 30.3171 11.6097 29.7701 11.0628C29.2231 10.5158 28.4812 10.2085 27.7077 10.2085C26.9341 10.2085 26.1923 10.5158 25.6453 11.0628C25.0983 11.6097 24.791 12.3516 24.791 13.1252Z"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1279_564">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className=" flex flex-col gap-4">
                <svg
                  width="30"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1279_573)">
                    <path
                      d="M5.83398 11.6668C5.83398 10.1197 6.44857 8.636 7.54253 7.54204C8.63649 6.44808 10.1202 5.8335 11.6673 5.8335H23.334C24.8811 5.8335 26.3648 6.44808 27.4588 7.54204C28.5527 8.636 29.1673 10.1197 29.1673 11.6668V23.3335C29.1673 24.8806 28.5527 26.3643 27.4588 27.4583C26.3648 28.5522 24.8811 29.1668 23.334 29.1668H11.6673C10.1202 29.1668 8.63649 28.5522 7.54253 27.4583C6.44857 26.3643 5.83398 24.8806 5.83398 23.3335V11.6668Z"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5Z"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.0625 10.9375V10.9521"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1279_573">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-xl uppercase font-semibold tracking-widest italic">
                  We grew The Fabric Nation’s Instagram to over 50K followers
                </p>
              </div>

              <div className="flex gap-4">
                <svg
                  width="318"
                  height="502"
                  viewBox="0 0 318 502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="5"
                    y="3"
                    width="308"
                    height="496"
                    rx="12"
                    fill="white"
                  />
                  <rect
                    x="5"
                    y="3"
                    width="308"
                    height="496"
                    rx="12"
                    stroke="black"
                    strokeWidth="6"
                  />
                  <rect
                    x="149"
                    y="11"
                    width="20"
                    height="20"
                    rx="10"
                    fill="black"
                  />
                  <rect
                    x="140"
                    y="487"
                    width="37"
                    height="4"
                    rx="2"
                    fill="#E85102"
                  />
                  <rect
                    width="2"
                    height="30"
                    transform="translate(316 65)"
                    fill="#E85102"
                  />
                  <rect
                    width="2"
                    height="30"
                    transform="translate(316 97)"
                    fill="#E85102"
                  />
                  <rect
                    width="2"
                    height="30"
                    transform="translate(0 80)"
                    fill="#E85102"
                  />
                </svg>
                <div className="flex  flex-col justify-between">
                  <svg
                    width="195"
                    height="251"
                    viewBox="0 0 195 251"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4.22656"
                      y="3"
                      width="186.547"
                      height="245"
                      rx="12"
                      fill="white"
                    />
                    <rect
                      x="4.22656"
                      y="3"
                      width="186.547"
                      height="245"
                      rx="12"
                      stroke="black"
                      strokeWidth="6"
                    />
                    <rect
                      x="28"
                      y="20"
                      width="29"
                      height="20"
                      rx="10"
                      fill="black"
                    />
                    <rect
                      x="62"
                      y="20"
                      width="29"
                      height="20"
                      rx="10"
                      fill="black"
                    />
                    <rect
                      width="1.22642"
                      height="15"
                      transform="translate(193.773 32.5)"
                      fill="black"
                    />
                    <rect
                      width="1.22642"
                      height="15"
                      transform="translate(193.773 48.5)"
                      fill="black"
                    />
                    <rect
                      width="1.22642"
                      height="15"
                      transform="translate(0 40)"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1279_605)">
                      <path
                        d="M13.125 17.4998V11.6665"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.875 17.5002V14.5835"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 17.4998V16.0415"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.375 5.8335H30.625"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83398 5.8335V20.4168C5.83398 21.1904 6.14128 21.9322 6.68826 22.4792C7.23524 23.0262 7.9771 23.3335 8.75065 23.3335H26.2507C27.0242 23.3335 27.7661 23.0262 28.313 22.4792C28.86 21.9322 29.1673 21.1904 29.1673 20.4168V5.8335"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 23.3335V29.1668"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.125 29.1665H21.875"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1279_605">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-8 my-6">
                <div className="uppercase text-xl font-semibold tracking-widest">
                  managed their social media presence, and ran Meta campaigns
                  with a 5.5X ROAS. 
                </div>
                <div className="uppercase text-xl font-semibold tracking-widest">
                  we built their e-commerce website
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="uppercase tracking-widest">
                  managed their social media presence, and ran Meta campaigns
                  with a 5.5X ROAS. 
                </p>
                <p className="uppercase tracking-widest">
                  we built their e-commerce website{" "}
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="flex justify-end w-full">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1279_599)">
                      <path
                        d="M4.375 10.2082C4.375 9.43462 4.68229 8.69276 5.22927 8.14578C5.77625 7.59879 6.51812 7.2915 7.29167 7.2915H27.7083C28.4819 7.2915 29.2237 7.59879 29.7707 8.14578C30.3177 8.69276 30.625 9.43462 30.625 10.2082V24.7915C30.625 25.5651 30.3177 26.3069 29.7707 26.8539C29.2237 27.4009 28.4819 27.7082 27.7083 27.7082H7.29167C6.51812 27.7082 5.77625 27.4009 5.22927 26.8539C4.68229 26.3069 4.375 25.5651 4.375 24.7915V10.2082Z"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.75 11.6665H8.76458"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.125 11.6665H13.1396"
                        stroke="#E85102"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1279_599">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative border w-full h-80 border-primary rounded-md overflow-hidden">
                  <Image fill alt="tfn image" src="/tfn-img.png" />
                </div>
                <div>
                  <Button className={"pointer-events-none"}>
                    Handled Thousands Of Orders
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* SHAMALI POLYMATS */}

      <div className=" pt-5 w-full flex hide-scrollbar ">
        <HorizontalScroll />
      </div>
    </>
  );
};
