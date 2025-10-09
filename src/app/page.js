"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ClientCarousel from "./components/ClientCarousel";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Trophy } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconAlertCircle,
  IconAppWindow,
  IconClock,
  IconFishHook,
  IconGraph,
  IconHeartHandshake,
  IconJetpackFilled,
  IconLayout,
  IconMap,
  IconPhoneRinging,
  IconProgressHelp,
  IconRocket,
  IconSquareFilled,
  IconTrophy,
  IconTrophyFilled,
} from "@tabler/icons-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/ui/retro-grid";
import { CoolMode } from "@/components/ui/cool-mode";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Spotlight } from "@/components/ui/spotlight";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const clientLogo = [
    { url: "/client/apna-food-logo.png" },
    { url: "/client/arjay-designs-logo.png" },
    { url: "/client/baba-logo.png" },
    { url: "/client/dbn-live-logo.png" },
    { url: "/client/dbn-london-logo.png" },
    { url: "/client/ges-logo.png" },
    { url: "/client/gq-designs-logo.png" },
    { url: "/client/hmv-logo.png" },
    { url: "/client/indinite-logo.png" },
    { url: "/client/leaksfinder-logo.png" },
  ];

  const projectCategories = [
    {
      name: "Construction",
    },
    {
      name: "Home Services",
    },
    {
      name: "Ticket Booking",
    },
    {
      name: "CRM Software",
    },
    {
      name: "Manufacturing",
    },
    {
      name: "E - Commerce",
    },
    {
      name: "Logistics & Transport",
    },
  ];

  const projectsData = [
    {
      name: "The Fabric Nation",
      heading: "90X ROI in 3 Months (Yes, You Read That Right)",
      bannerURL:
        "https://images.unsplash.com/photo-1735014112085-ad2ece33840f?q=80&w=870&auto=format&fit=crop",
      description:
        "We built a sleek, conversion-optimized eCommerce platform for The Fabric Nation — and our Meta Ads performance marketing didn’t just perform… it *performed*. The brand hit a whopping 9x ROAS for three consecutive months. Tailored results, literally. 👕✨",
    },
    {
      name: "Indinite",
      heading: "10K Pounds in Ticket Sales — Straight Outta UK",
      bannerURL:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=870&auto=format&fit=crop",
      description:
        "Developed a full-scale UK-based event booking platform handling events smoother than British tea time. 💂‍♂️ With over £10,000 in ticket sales, Indinite became the go-to for event organizers looking to level up their digital experience.",
    },
    {
      name: "Crest Projects",
      heading: "Construction, But Make It Creative 🧱",
      bannerURL:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=870&auto=format&fit=crop",
      description:
        "Built a modern and expressive construction profile website for Crest Projects — complete with dynamic project pages, sleek portfolios, and a design that screams ‘built different’.",
    },
    {
      name: "DBN London",
      heading: "Turning Events into 2X Profits Every Month",
      bannerURL:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=870&auto=format&fit=crop",
      description:
        "Running ongoing performance marketing campaigns for DBN London — pulling consistent 2x ROAS month after month. The events are loud, but the results speak louder. 📈",
    },
    {
      name: "Baba Namkeen",
      heading: "When Snacks Met Sales 🍿",
      bannerURL:
        "https://images.unsplash.com/photo-1601050690597-1b9bc40d7f9e?q=80&w=870&auto=format&fit=crop",
      description:
        "Created a full-fledged eCommerce experience for Baba Namkeen. Crispy design, spicy conversions — because why should snacks have all the crunch?",
    },
    {
      name: "Shamali Polymats",
      heading: "Expanding B2B Horizons — Straight to the Gulf 🌍",
      bannerURL:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=870&auto=format&fit=crop",
      description:
        "Developed a lead-gen focused B2B website tailored for the Gulf markets. With precision design and clear CTAs, Shamali Polymats now rolls out leads faster than their mats.",
    },
  ];

  const activeProject = projectsData[activeIndex];

  const secondRow = projectCategories.slice(projectCategories.length / 2);

  const steps = [
    {
      title: "Discovery & Planning",
      desc: "Understand needs, define strategy",
    },
    { title: "Design & Architecture", desc: "Create structure, user flow" },
    { title: "Development & Testing", desc: "Build, Integrate, Quality Check" },
    { title: "Deployment & Support", desc: "Launch, Monitor, Maintain" },
  ];

  return (
    <>
      <div className="min-h-screen flex items-center bg-black relative">
        <div className="absolute top-0 left-0 h-full w-full  overflow-hidden">
          <RetroGrid opacity={0.3} />
        </div>

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />

        <div className="flex flex-col items-center w-full gap-3 z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center leading-12 md:leading-14 pointer-events-none z-10 ">
            WE BUILD <span className="text-primary">SCALABLE</span> & <br />
            <span className="text-primary"> SECURE </span>DIGITAL SOLUTIONS
          </h1>
          <p className="text-white/80 text-base w-full max-w-xl text-center text-balance">
            From modern UI/UX design to powerful development and result-driven
            marketing we craft end to end IT solutions that help businesses grow
            and scale.
          </p>
          <div className="flex gap-5 mt-2">
            <Button
              className={"h-8 hover:scale-95 active:scale-90"}
              variant={"outline"}
            >
              <IconPhoneRinging /> Schedule A Call
            </Button>
            <CoolMode>
              <Button className={"h-8 hover:scale-95 active:scale-90"}>
                View Our Projects
              </Button>
            </CoolMode>
          </div>
        </div>

        <style jsx>{`
          @keyframes grid-scroll {
            0% {
              background-position: center bottom;
            }
            100% {
              background-position: center top;
            }
          }

          .animate-grid-scroll {
            animation: grid-scroll 20s linear infinite;
          }
        `}</style>
      </div>
      <div className="min-h-50 py-20  w-full">
        <div className="max-w-6xl  mx-auto flex flex-col gap-3 items-center">
          <span className="italic text-xl font-semibold">
            Over 50+ business trust us
          </span>
          <ClientCarousel reviews={clientLogo} />
        </div>
      </div>
      <div className="  w-full flex flex-col gap-5">
        <div className="relative max-w-6xl mx-auto bg-cover w-full h-70 md:h-100  bg-[url(/achivement-img-2.jpg)] p-10 flex flex-col rounded-sm items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full mx-auto bg-black/40 "></div>
          <Button
            variant={"outline"}
            className={
              "w-max absolute top-5 cursor-none hover:scale-95 active:scale-90 left-5 shadow-2xl z-20"
            }
          >
            Schedule a Meeting now
          </Button>
          <div className="h-max z-20">
            <span className="text-white font-bold text-4xl md:text-[64px] uppercase ">
              Our{" "}
              <LineShadowText className={"italic"} shadowColor="white">
                Achievements
              </LineShadowText>
            </span>
          </div>
        </div>
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-4 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-1/2">
            <div className="md:h-[340px]  relative overflow-hidden p-4 border bg-primary text-white rounded-md flex flex-col">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold text-3xl">40+</span>
                <span className="font-light text-sm">CLIENTS COMPLETED</span>
              </div>
              <img
                src="/gif/gif1.gif"
                className="absolute bottom-0 left-0 hidden md:flex "
                alt=""
              />
            </div>
            <div className="md:h-[340px] relative overflow-hidden p-4 border bg-primary text-white rounded-md flex flex-col">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold text-3xl">15+</span>
                <span className="font-light text-sm">YEARS OF EXPERIENCE</span>
              </div>
              <img
                src="/gif/gif2.gif"
                className="absolute bottom-0 left-0 hidden md:flex"
                alt=""
              />
            </div>
            <div className="md:h-[340px] relative overflow-hidden p-4 border bg-primary text-white rounded-md flex flex-col">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold text-3xl">30+</span>
                <span className="font-light text-sm">GAME CHANGERS</span>
              </div>
              <img
                src="/gif/gif3.gif"
                className="absolute bottom-0 left-0 hidden md:flex"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-3">
            <div className="flex flex-col justify-end items-end h-auto md:h-60 p-5 shadow rounded-xl">
              <div className="bg-[#F9F9F9] p-4 rounded-sm justify-end items-end flex flex-col w-full">
                <div>
                  <p className="text-sm md:text-base">
                    We could tell you how awesome our projects are… but why
                    spoil the surprise? 🤫 Click and see the problems we&apos;ve
                    solved and the ideas we&apos;ve brought to life.
                  </p>
                </div>
                <div className="mt-3">
                  <Button className="h-8 rounded-md font-light">
                    Our Projects
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 border p-2 rounded-xl w-full sm:w-max px-5 font-bold text-sm md:text-base">
              <IconTrophyFilled className="size-4" /> Award winning delivery
              streak
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col py-10">
        <div className="max-w-6xl w-full mx-auto p-10">
          <div className="flex flex-col items-center  pb-20 text-md gap-5">
            <motion.div className="relative mx-4 my-4 flex  items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
              <LayoutTextFlip
                text="Is this"
                words={[
                  "You ?",
                  "Your Business ?",
                  "Your Brand ?",
                  "Your Dream ?",
                  "Your Potential ?",
                  "Your Time ?",
                ]}
              />
            </motion.div>
            <h2 className="uppercase font-bold text-xl md:text-3xl text-center">
              STRUGGLING TO BUILD A{" "}
              <span className="text-primary">
                PROFESSIONAL <br /> ONLINE PRESENCE ?
              </span>
            </h2>
          </div>
          <div className="w-full min-h-50 border rounded-md shadow p-5">
            <div className=" flex justify-center">
              <span className="flex relative gap-2 justify-center font-bold text-sm items-center  w-max px-4 py-2 rounded-md">
                <IconSquareFilled className="text-orange-500 size-4" /> GET A
                FREE QUOTE
                <BorderBeam borderWidth={1} duration={8} size={50} />
              </span>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3">
              <div className="min-h-[180px] flex flex-col justify-center items-center gap-5 p-5">
                <span>
                  <IconAppWindow className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  Without a landing page or application, potential clients can’t
                  find you online.
                </span>
              </div>
              <div className="min-h-[180px] flex flex-col justify-center items-center gap-5 p-5">
                <span>
                  <IconMap className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  From apps to websites to automation tools—you don’t know where
                  to start.
                </span>
              </div>
              <div className="min-h-[180px]  p-5 flex flex-col justify-center items-center gap-5">
                <span>
                  <IconAlertCircle className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  Your competitors are winning online while you’re stuck
                  figuring out tech you didn’t sign up for.
                </span>
              </div>
              <div className="min-h-[180px]  p-5 flex flex-col justify-center items-center gap-5">
                <span>
                  <IconLayout className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  You’re spending valuable hours trying DIY solutions instead of
                  focusing on your core business.
                </span>
              </div>
              <div className="min-h-[180px]  p-5 flex flex-col justify-center items-center gap-5">
                <span>
                  <IconFishHook className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  You’re unsure how to attract customers digitally and your
                  competitors are getting ahead.
                </span>
              </div>
              <div className="min-h-[180px]  p-5 flex flex-col justify-center items-center gap-5">
                <span>
                  <IconProgressHelp className="text-orange-500 size-8" />
                </span>
                <span className="text-sm text-center">
                  You know your business needs a website or app, but you don’t
                  have the technical knowledge to create one.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-100 flex flex-col overflow-hidden gap-3 bg-[#171719]">
        <div className="h-8 bg-primary"></div>

        <div className="max-w-6xl flex flex-col lg:flex-row gap-10 px-4 sm:px-6 lg:px-8 mx-auto w-full justify-between py-10 text-white">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                Our Services
              </span>
              <span className="text-white/80 text-sm sm:text-base leading-relaxed">
                We provide end-to-end IT solutions to help your business grow —
                from creating a professional online presence to scaling through
                digital marketing.
              </span>
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="bg-primary px-3 py-2 rounded-sm text-sm sm:text-base [&[data-state=open]]:rounded-none [&[data-state=open]]:rounded-t-sm">
                    DEVELOP
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#333333] p-3 text-sm">
                    <motion.ul className="space-y-2">
                      <li>Website Development</li>
                      <li>Mobile Application</li>
                      <li>Web Application</li>
                    </motion.ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="bg-primary px-3 py-2 rounded-sm text-sm sm:text-base [&[data-state=open]]:rounded-none [&[data-state=open]]:rounded-t-sm">
                    DESIGN
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#333333] p-3 text-sm">
                    <ul className="space-y-2">
                      <li>Logo & Branding</li>
                      <li>Graphics/Print Design</li>
                      <li>Photography</li>
                      <li>Video Production</li>
                      <li>Packaging & Product Design</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="bg-primary px-3 py-2 rounded-sm text-sm sm:text-base [&[data-state=open]]:rounded-none [&[data-state=open]]:rounded-t-sm">
                    MARKET
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#333333] p-3 text-sm">
                    <ul className="space-y-2">
                      <li>Performance Marketing</li>
                      <li>Email Marketing</li>
                      <li>Social Media Marketing</li>
                      <li>Search Engine Optimisation</li>
                      <li>Lead Generation</li>
                      <li>Influencer Marketing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <TracingBeam>
              <div className="flex flex-col gap-4 justify-between py-5 w-full sm:w-[90%]">
                {steps.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="bg-[#2d2d2d] text-white flex flex-col items-center text-center py-6 px-6 sm:px-8 rounded-md shadow-md"
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {item.title}
                    </span>
                    <span className="text-xs sm:text-sm text-white/70">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </div>

      <div className="w-full min-h-200 flex flex-col gap-3 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto py-14 ">
          <div className="flex justify-center flex-col gap-2 items-center">
            <span className="italic text-neutral-900 font-light">
              Performance Marketing
            </span>
            <h2 className="uppercase text-xl md:text-3xl font-bold text-center leading-9">
              For instant results we do <br />
              <span className="text-primary"> performance marketing</span>
            </h2>
            <Button variant={"outline"} className={"shadow my-8"}>
              Schedule a Meeting Now
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-13">
            <CardSpotlight className="h-[527px]  border p-5 rounded-xl shadow">
              <div className="z-20 relative h-1/2 border-b border-dashed flex flex-col justify-between pb-8">
                <IconRocket className="text-primary size-15 " />
                <div className="flex flex-col ">
                  <span className="font-bold text-3xl text-white">189%</span>
                  <span className="text-white text-base font-light">
                    INCREASED ROI
                  </span>
                </div>
              </div>
              <div className="z-20 relative h-1/2 py-5 flex flex-col text-white text-sm justify-between">
                <span>Precision Targeting</span>
                <span>
                  Maximize your ROI with our results-driven performance
                  marketing, focusing on targeted strategies and data analysis
                  to boost your brand’s success. We leverage cutting-edge
                  techniques to ensure your marketing efforts deliver
                  measurable, impactful results.
                </span>
              </div>
              <BorderBeam
                duration={8}
                size={500}
                borderWidth={2}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </CardSpotlight>
            <CardSpotlight className="h-[527px]  border p-5 rounded-xl shadow">
              <div className="z-20 relative h-1/2 border-b border-dashed flex flex-col justify-between pb-8">
                <IconFishHook className="text-primary size-15 " />
                <div className="flex flex-col ">
                  <span className="font-bold text-3xl text-white">89%</span>
                  <span className="text-white text-base font-light">
                    INCREASED LEADS
                  </span>
                </div>
              </div>
              <div className="z-20 relative h-1/2 py-5 flex flex-col text-white text-sm justify-between">
                <span>Cost-Effective Solutions</span>
                <span>
                  Our strategies are designed to maximize your budget and
                  eliminate wasted ad spend for a higher return and
                  Cost-effective advertising solutions
                </span>
              </div>
              <BorderBeam
                duration={8}
                size={500}
                borderWidth={2}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </CardSpotlight>
            <CardSpotlight className="h-[527px]  border p-5 rounded-xl shadow">
              <div className="z-20 relative h-1/2 border-b border-dashed flex flex-col justify-between pb-8">
                <IconGraph className="text-primary size-15 " />
                <div className="flex flex-col ">
                  <span className="font-bold text-3xl text-white">100%</span>
                  <span className="text-white text-base font-light">
                    INCREASED SALES
                  </span>
                </div>
              </div>
              <div className="z-20 relative h-1/2 py-5 flex flex-col text-white text-sm justify-between">
                <span>Data-Driven Decisions</span>
                <span>
                  Make informed decisions based on performance data and
                  analytics.
                </span>
              </div>
              <BorderBeam
                duration={8}
                size={500}
                borderWidth={2}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                }}
              />
            </CardSpotlight>
          </div>
        </div>
      </div>
      <div className="w-full min-h-200 flex flex-col gap-3 overflow-hidden ">
        <div className="max-w-6xl w-full mx-auto py-14 ">
          <div className="w-full gap-3 flex flex-col justify-center items-center">
            <span className="italic text-neutral-900 font-light">
              Not to flex… but kinda gonna flex. 😏
            </span>
            <h2 className="uppercase text-3xl text-center font-bold leading-9">
              Check Out Our <span className="text-primary">Proud Projects</span>
            </h2>
          </div>
          <div className="mt-6">
            <Marquee className="[--duration:20s]">
              {secondRow.map((item, index) => {
                return (
                  <div key={index} className="border px-2 py-1 rounded-xl">
                    {item.name}
                  </div>
                );
              })}
            </Marquee>
          </div>

          <section className="flex flex-col md:flex-row w-full min-h-[80vh] gap-8 px-8 py-8">
            {/* Left Main Project */}
            <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.bannerURL}
                  src={activeProject.bannerURL}
                  alt={activeProject.name}
                  className="w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <motion.div
                className="absolute bottom-6 left-6 text-white bg-black/50 p-4 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-xl font-bold">{activeProject.name}</h2>
                <p className="text-sm">{activeProject.heading}</p>
              </motion.div>
            </div>

            {/* Right Project Grid */}
            <div className="w-full md:w-1/3 grid grid-cols-2 gap-4 overflow-y-auto max-h-[80vh]">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.name + index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 hover:scale-95 duration-200 transition-all active:scale-90 ${
                    index === activeIndex
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={project.bannerURL}
                    alt={project.name}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div className="w-full min-h-50 pb-8">
        <div className="max-w-6xl w-full mx-auto  space-y-10">
          <div className="rounded-md shadow w-max  flex gap-2 overflow-hidden">
            <span className="px-4 py-2 font-bold w-1/3">OUR</span>
            <span className="px-4 py-2 bg-primary w-full text-white">
              BLOGS
            </span>
          </div>
          <div className="flex gap-5">
            <div className="min-h-[8rem] w-80  rounded-lg  border-gray-200 hover:border-gray-300 transition-colors duration-200 flex flex-col gap-4 bg-white">
              <div className="relative w-full h-60 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                <img
                  src="https://sckonnect.com/wp-content/uploads/2025/04/thumbnail-1.png"
                  alt="Blog thumbnail"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                  Blog Title
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IconClock className="w-4 h-4" />
                  <span>24 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="min-h-[8rem] w-80  rounded-lg  border-gray-200 hover:border-gray-300 transition-colors duration-200 flex flex-col gap-4 bg-white">
              <div className="relative w-full h-60 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                <img
                  src="https://sckonnect.com/wp-content/uploads/2025/04/thumbnail-1.png"
                  alt="Blog thumbnail"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                  Blog Title
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IconClock className="w-4 h-4" />
                  <span>24 June, 2023</span>
                </div>
              </div>
            </div>
            <div className="min-h-[8rem] w-80  rounded-lg  border-gray-200 hover:border-gray-300 transition-colors duration-200 flex flex-col gap-4 bg-white">
              <div className="relative w-full h-60 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                <img
                  src="https://sckonnect.com/wp-content/uploads/2025/04/thumbnail-1.png"
                  alt="Blog thumbnail"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                  Blog Title
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IconClock className="w-4 h-4" />
                  <span>24 June, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
