"use client";
import React, { useRef, useState, useEffect } from "react";

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
  const [clipValues, setClipValues] = useState({ start: 25, end: 75 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setClipValues({ start: 15, end: 85 }); // more open on mobile
      } else {
        setClipValues({ start: 25, end: 75 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clip1 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [clipValues.start, 0]
  );
  const clip2 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [clipValues.end, 100]
  );

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
      className="sticky flex items-center justify-center bg-zinc-900  top-0 h-[70vh] md:h-screen w-full "
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
        "  bg-black mt-5 rounded-2xl overflow-hidden p-5 flex gap-5 h-50 md:h-50 z-20 relative"
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
        <span className="open-condensed-bold text-3xl md:text-5xl">DBN</span>
        <span className="open-condensed text-6xl md:text-8xl">LONDON</span>
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
      <div className="max-w-6xl mx-auto w-full my-25 flex md:flex-row flex-col gap-3">
        <div className="w-full md:w-1/2 ">
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
        <div className="w-full md:w-1/2 relative border flex items-center justify-center overflow-hidden rounded-2xl ">
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
      <div className="w-full my-20 px-3">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
          {/* GRID SECTION */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Orange Title Card */}
            <div className="col-span-1 md:col-span-2 relative overflow-hidden rounded-md px-6 py-6 bg-[#EC7231] flex flex-col justify-center items-start">
              <div className="absolute left-0 top-0 w-6 md:w-8 h-full bg-black"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full top-2 left-1.5 absolute"></div>
              <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full bottom-2 left-1.5 absolute"></div>

              <span className="font-bold text-white text-lg md:text-xl">A</span>
              <div className="font-passion text-4xl md:text-6xl flex flex-col gap-1 leading-tight">
                <span>EVENT BOOKING</span>
                <span className="mt-[-0.5rem] md:mt-[-1rem]">PLATFORM</span>
              </div>
            </div>

            {/* Right Column (Video + Description) */}
            <div className="row-span-2 flex flex-col md:col-span-1">
              <div className="border border-black relative rounded-md overflow-hidden w-full h-56 sm:h-64 md:h-[70%]">
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
              <div className="text-sm md:text-base my-4 md:my-5 text-justify leading-relaxed">
                We developed <strong>Indinite</strong> as a custom event booking
                platform with seamless scheduling, secure transactions, and a
                user-friendly interface, enabling organizers and attendees to
                manage events efficiently and effortlessly online.
              </div>
            </div>

            {/* Bottom Video */}
            <div className="rounded-md col-span-1 md:col-span-2 w-full h-48 sm:h-56 md:h-60 p-2 border border-primary">
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

          {/* METRICS SECTION */}
          <div className="mt-10 flex flex-col gap-4 md:gap-5 text-lg sm:text-xl md:text-2xl">
            <span>
              20K+ GBP in ticket sales processed through our custom event
              booking platform.
            </span>
            <span>
              <span className="text-primary font-semibold">5000+</span> bookings
              managed with automated QR code ticketing and email workflows.
            </span>
            <span>
              <span className="text-primary font-semibold">99.99%</span> uptime
              achieved during high-traffic event launches.
            </span>
          </div>
        </div>
      </div>

      {/* The Fabric Nation */}

      <div className="my-20 py-20 w-full flex justify-between gap-2">
        <div className="max-w-6xl relative mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0">
          {/* LEFT SIDE - Heading */}
          <div className="sticky md:top-10 self-start h-fit w-full text-[3rem] sm:text-[5rem] md:text-[7rem] leading-tight open-condensed-bold text-center md:text-left">
            <div className="hidden md:block border w-[10rem] md:w-[20rem] leading-1 border-black mb-3"></div>
            THE <span className="text-primary">FAB</span>RIC <br />
            NATION
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="relative w-full">
            <div className="flex flex-col gap-6">
              {/* Text and Icon */}
              <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-end">
                <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest leading-snug">
                  From crafting posts to crafting conversions we handled
                  everything.
                </p>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block"
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
                  </g>
                </svg>
              </div>

              {/* Stats section */}
              <div className="flex flex-col gap-4">
                <svg
                  width="30"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block"
                >
                  <path
                    d="M13.125 17.5C13.125 18.6603 13.5859 19.7731 14.4064 20.5936C15.2269 21.4141 16.3397 21.875 17.5 21.875C18.6603 21.875 19.7731 21.4141 20.5936 20.5936C21.4141 19.7731 21.875 18.6603 21.875 17.5C21.875 16.3397 21.4141 15.2269 20.5936 14.4064C19.7731 13.5859 18.6603 13.125 17.5 13.125C16.3397 13.125 15.2269 13.5859 14.4064 14.4064C13.5859 15.2269 13.125 16.3397 13.125 17.5Z"
                    stroke="#E85102"
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-base sm:text-lg md:text-xl uppercase font-semibold tracking-widest italic">
                  We grew The Fabric Nation’s Instagram to over 50K followers
                </p>
              </div>

              {/* Device mockups */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6">
                <svg
                  width="180"
                  height="300"
                  viewBox="0 0 318 502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-40 sm:w-48 md:w-72"
                >
                  <rect
                    x="5"
                    y="3"
                    width="308"
                    height="496"
                    rx="12"
                    fill="white"
                    stroke="black"
                    strokeWidth="6"
                  />
                </svg>
                <div className="flex flex-col justify-between items-center gap-6">
                  <svg
                    width="120"
                    height="160"
                    viewBox="0 0 195 251"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-28 sm:w-32 md:w-48"
                  >
                    <rect
                      x="4.22656"
                      y="3"
                      width="186.547"
                      height="245"
                      rx="12"
                      fill="white"
                      stroke="black"
                      strokeWidth="6"
                    />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-6 my-6 text-base sm:text-lg md:text-xl font-semibold tracking-widest uppercase">
                <div>
                  managed their social media presence, and ran Meta campaigns
                  with a 5.5X ROAS.
                </div>
                <div>we built their e-commerce website</div>
              </div>

              {/* Image */}
              <div className="flex flex-col gap-3">
                <div className="relative border w-full h-60 sm:h-80 border-primary rounded-md overflow-hidden">
                  <Image fill alt="tfn image" src="/tfn-img.png" />
                </div>
                <div>
                  <Button className="pointer-events-none w-full sm:w-auto">
                    Handled Thousands Of Orders
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHAMALI POLYMATS */}

      <div className="hidden md:flex pt-5 w-full ">
        <HorizontalScroll />
      </div>
    </>
  );
};
