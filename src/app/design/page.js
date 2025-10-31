"use client";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";
import HoverAccordion from "@/components/ui/HoverAccordion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  IconTarget,
  IconChartFunnel,
  IconLivePhoto,
  IconClipboardText,
} from "@tabler/icons-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
export default function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const clientLogo = [
    { url: "/client/apna-food-logo.png" },
    { url: "/client/arjay-designs-logo.png" },
    // { url: "/client/baba-logo.png" },
    { url: "/client/dbn-live-logo.png" },
    { url: "/client/dbn-london-logo.png" },
    { url: "/client/ges-logo.png" },
    { url: "/client/gq-designs-logo.png" },
    { url: "/client/hmv-logo.png" },
    { url: "/client/indinite-logo.png" },
    { url: "/client/leaksfinder-logo.png" },
  ];

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const expertiseArr = [
    "Web Development",
    "Application",
    "Cloud",
    "Web Scraping",
    "IOS APP Development",
  ];
  return (
    <>
      <div className="h-screen w-full  mx-auto bg-black">
        <div className="relative flex  w-full mx-auto gap-4  h-full">
          <div className="relative w-1/2 ml-20 flex flex-col gap-5 justify-center h-full ">
            {/* <div className="absolute top-0 right-[-7rem] w-32 h-full bg-gradient-to-l from-black/70 via-black z-10 pointer-events-none"></div> */}

            <h1 className=" text-6xl text-white font-semibold">
              Design That Speaks Before You Do
            </h1>
            <p className="text-white font-light">
              We turn your brand’s ideas into visuals that connect — designs
              that look good, feel right, and stay remembered.
            </p>
            <div className="flex gap-3">
              <Button>🎨 See Our Work</Button>
              <Button
                className={"bg-transparent text-white"}
                variant={"outline"}
              >
                ✉️ Let&apos;s Konnect Now
              </Button>
            </div>
          </div>
          <div className="relative w-1/2 h-full  overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/70 to-transparent z-10 pointer-events-none"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://ik.imagekit.io/qfj6zsfnqn/sck-design.mp4?updatedAt=1760522508692"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute bottom-2 w-full z-30">
            <Marquee pauseOnHover className={"[--duration:20s"}>
              {clientLogo.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item.url}
                    alt="client logo"
                    width={150}
                    height={50}
                    className="white-logo"
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="max-w-6xl mx-auto w-full p-4 pt-7 ">
          <div className="w-full flex flex-col items-center gap-3">
            <div
              className={cn(
                "group rounded-full border  text-base text-white transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-200 hover:bg-neutral-300"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Magic UI</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <h2 className="font-extrabold text-[#292929] uppercase text-4xl text-center">
              Where Ideas Meet Aesthetics
            </h2>
            <span className="text-center max-w-150 text-sm">
              Every brand has a voice. We just give it form — through color,
              space, and story. Our designs are crafted to feel alive, to move
              your audience before they even read a word.
            </span>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-3 my-15">
            {/* Left block */}
            <div className="w-full pb-20 flex gap-6 p-4 items-center">
              <span className="mt-10 font-extrabold text-[#292929] uppercase text-3xl">
                Clarity Over <br /> Chaos
              </span>
              <div className="w-50 h-80 relative">
                <Image
                  className="border object-center rounded-sm"
                  src={"/design-1-img.png"}
                  alt="design image"
                  fill
                />
              </div>
            </div>

            {/* Right block */}
            <div className="w-full pt-20 flex gap-6 p-4 items-center">
              <div className="w-120 h-80 relative">
                <Image
                  className="border object-cover object-center rounded-sm"
                  src={"/design-2-img.png"}
                  alt="design image"
                  fill
                />
              </div>
              <div className="h-full w-full flex flex-col gap-3 justify-center">
                <h2 className="text-xl font-semibold">
                  Design isn’t decoration — <br />
                  it’s direction.
                </h2>
                <span className="text-base font-light">
                  We cut through the noise with visuals that *guide* attention,
                  not distract it. Every color, shape, and type choice has a
                  purpose — to make your brand story impossible to ignore.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-13">
        {/* Logo And Branding */}
        <HoverAccordion
          className="mx-auto w-full border-t border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">1</div>
                  <div className="w-[75%] font-bold text-5xl">
                    LOGO AND BRANDING
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger
                        asChild
                        className="border bg-white text-black  flex justify-center group/modal-btn"
                      >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Explore our work
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          🚀
                        </div>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Performance Marketing That{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              Delivers
                            </span>{" "}
                            More Than Clicks! 🎯
                          </h4>
                          <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                              <motion.div
                                key={"images" + idx}
                                style={{
                                  rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                whileTap={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              How we make it work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Targeting
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative That Converts
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Real-Time Optimization
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Transparent Reporting
                                </span>
                              </div>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              ),
              content: (
                <div className="w-full flex  mx-auto px-4">
                  <div className="w-[10%] font-semibold text-2xl"></div>
                  <div className="w-[75%] flex justify-between  text-base">
                    <div>
                      Your logo isn’t just a symbol — it’s your story in its
                      simplest form. We build identities that stick, crafting
                      every curve, color, and typeface to feel unmistakably you.{" "}
                      <br />
                      <br />
                      From brand strategy to visual identity, we make sure your
                      presence feels cohesive, confident, and timeless — whether
                      it’s a business card or a billboard.
                    </div>
                    <div></div>
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />

        {/* Graphics Print Design */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">2</div>
                  <div className="w-[75%] font-bold text-5xl">
                    GRAPHICS/PRINT DESIGN
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger
                        asChild
                        className="border bg-white text-black  flex justify-center group/modal-btn"
                      >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Explore our work
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          🚀
                        </div>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Performance Marketing That{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              Delivers
                            </span>{" "}
                            More Than Clicks! 🎯
                          </h4>
                          <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                              <motion.div
                                key={"images" + idx}
                                style={{
                                  rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                whileTap={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              How we make it work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Targeting
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative That Converts
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Real-Time Optimization
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Transparent Reporting
                                </span>
                              </div>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              ),
              content: (
                <div className="w-full flex  mx-auto px-4">
                  <div className="w-[10%] font-semibold text-2xl"></div>
                  <div className="w-[75%]  text-base">
                    Posters, brochures, banners — print design still hits
                    different when it’s done right. We bring stories to life on
                    paper with bold visuals, strong layouts, and tactile appeal.{" "}
                    <br />
                    <br />
                    Our designs don’t just look good — they feel intentional.
                    Each piece is crafted to connect, captivate, and leave a
                    mark long after the first glance.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* Photography */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">3</div>
                  <div className="w-[75%] font-bold text-5xl">PHOTOGRAPHY</div>
                  <div>
                    <Modal>
                      <ModalTrigger
                        asChild
                        className="border bg-white text-black  flex justify-center group/modal-btn"
                      >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Explore our work
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          🚀
                        </div>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Performance Marketing That{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              Delivers
                            </span>{" "}
                            More Than Clicks! 🎯
                          </h4>
                          <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                              <motion.div
                                key={"images" + idx}
                                style={{
                                  rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                whileTap={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              How we make it work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Targeting
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative That Converts
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Real-Time Optimization
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Transparent Reporting
                                </span>
                              </div>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              ),
              content: (
                <div className="w-full flex  mx-auto px-4">
                  <div className="w-[10%] font-semibold text-2xl"></div>
                  <div className="w-[75%]  text-base">
                    We don’t just take pictures — we capture personality. Every
                    shot is designed to express mood, tone, and meaning,
                    aligning perfectly with your brand’s narrative. <br />
                    <br />
                    From product shoots to brand portraits, we use light, color,
                    and detail to create visuals that feel cinematic yet natural
                    — real moments that sell without shouting.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* Video Production */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">4</div>
                  <div className="w-[75%] font-bold text-5xl">
                    VIDEO PRODUCTION
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger
                        asChild
                        className="border bg-white text-black  flex justify-center group/modal-btn"
                      >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Explore our work
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          🚀
                        </div>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Performance Marketing That{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              Delivers
                            </span>{" "}
                            More Than Clicks! 🎯
                          </h4>
                          <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                              <motion.div
                                key={"images" + idx}
                                style={{
                                  rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                whileTap={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              How we make it work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Targeting
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative That Converts
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Real-Time Optimization
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Transparent Reporting
                                </span>
                              </div>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              ),
              content: (
                <div className="w-full flex  mx-auto px-4">
                  <div className="w-[10%] font-semibold text-2xl"></div>
                  <div className="w-[75%]  text-base">
                    Motion speaks louder than words. We craft videos that hook
                    attention, spark emotion, and tell your story in a way
                    static visuals never could. <br />
                    <br />
                    From concept and scripting to post-production, we turn your
                    ideas into visual journeys — whether it’s a snappy ad, a
                    brand film, or an entire campaign rollout.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* Packaging & Product Design */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">5</div>
                  <div className="w-[75%] font-bold text-5xl">
                    PACKAGING & PRODUCT DESIGN
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger
                        asChild
                        className="border bg-white text-black  flex justify-center group/modal-btn"
                      >
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Explore our work
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          🚀
                        </div>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Performance Marketing That{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              Delivers
                            </span>{" "}
                            More Than Clicks! 🎯
                          </h4>
                          <div className="flex justify-center items-center">
                            {images.map((image, idx) => (
                              <motion.div
                                key={"images" + idx}
                                style={{
                                  rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                whileTap={{
                                  scale: 1.1,
                                  rotate: 0,
                                  zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <img
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              How we make it work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Targeting
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative That Converts
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Real-Time Optimization
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Transparent Reporting
                                </span>
                              </div>
                            </div>
                          </div>
                        </ModalContent>
                      </ModalBody>
                    </Modal>
                  </div>
                </div>
              ),
              content: (
                <div className="w-full flex  mx-auto px-4">
                  <div className="w-[10%] font-semibold text-2xl"></div>
                  <div className="w-[75%]  text-base">
                    First impressions start with the box. We design packaging
                    that people want to touch, hold, and remember — where form
                    meets function beautifully. <br />
                    <br />
                    Every fold, texture, and detail is considered to tell your
                    product’s story — blending aesthetics, usability, and shelf
                    appeal in one clean shot.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
      </div>
      <section className="  py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="relative lg:py-14 lg:px-20 p-10 rounded-2xl bg-black  border flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                Connect with us
              </h2>
              <p className="text-xl text-neutral-300">
                Contact us with any query or any idea.
              </p>
            </div>
            <Button variant={"outline"} className={"z-10"}>
              Get In Touch
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#000000"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <DottedGlowBackground
              className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
              opacity={1}
              gap={10}
              radius={1.6}
              colorLightVar="--color-neutral-500"
              glowColorLightVar="--color-neutral-600"
              colorDarkVar="--color-neutral-500"
              glowColorDarkVar="--color-sky-800"
              backgroundOpacity={0}
              speedMin={0.3}
              speedMax={1.6}
              speedScale={1}
            />
          </div>
        </div>
      </section>
    </>
  );
}
