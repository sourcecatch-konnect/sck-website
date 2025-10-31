"use client";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import HoverAccordion from "@/components/ui/HoverAccordion";
import {
  IconMail,
  IconTrendingUp,
  IconBrandInstagram,
  IconUserPlus,
  IconSearch,
  IconUsers,
  IconTarget,
  IconChartFunnel,
  IconLivePhoto,
  IconClipboardText,
} from "@tabler/icons-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

export default function Page() {
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
    "Full-Stack Product Engineering",
    "Web & App Development",
    "Server & Cloud Management",
    "Scalable Backend Architecture",
    "DevOps & CI/CD Automation",
    "Performance-Driven Engineering",
    "APIs, Databases & Infrastructure",
    "Secure & Reliable Deployments",
    "From MVPs to Enterprise Systems",
    "We Build. Deploy. Scale. Support.",
  ];
  // const expertiseArr = [
  //   "Full-Stack Product Engineering",
  //   "Web & App Development",
  //   "Server & Cloud Management",
  //   "Scalable Backend Architecture",
  //   "DevOps & CI/CD Automation",
  //   "Performance-Driven Engineering",
  //   "APIs, Databases & Infrastructure",
  //   "Secure & Reliable Deployments",
  //   "From MVPs to Enterprise Systems",
  //   "We Build. Deploy. Scale. Support.",
  // ];

  const items = [
    {
      title: "Email Marketing",
      description:
        "Boost your business with targeted email campaigns that drive engagement, nurture customer relationships, and increase conversions.",
      header: <Skeleton />,
      icon: <IconMail className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Performance Marketing",
      description:
        "Maximize ROI with data-driven campaigns designed to deliver measurable results and optimize every marketing touchpoint.",
      header: <Skeleton />,
      icon: <IconTrendingUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your brand’s presence across social platforms with creative content, audience engagement strategies, and conversion-focused campaigns.",
      header: <Skeleton />,
      icon: <IconBrandInstagram className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lead Generation",
      description:
        "Fuel your sales pipeline with high-quality leads through strategic campaigns that attract, capture, and convert your ideal audience.",
      header: <Skeleton />,
      icon: <IconUserPlus className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Increase your online visibility and rank higher on search engines with proven SEO strategies that drive organic traffic and conversions.",
      header: <Skeleton />,
      icon: <IconSearch className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Influencer Marketing",
      description:
        "Leverage the power of influencers to amplify your brand’s reach, build credibility, and create authentic connections with your audience.",
      header: <Skeleton />,
      icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <>
      <div className="h-screen w-full   mx-auto bg-black">
        <div className="relative flex  w-full mx-auto gap-4  h-full">
          <div className="relative w-full  flex flex-col gap-5 items-center justify-center h-full ">
            {/* <div className="absolute top-0 right-[-7rem] w-32 h-full bg-gradient-to-l from-black/70 via-black z-10 pointer-events-none"></div> */}

            <video
              autoPlay
              loop
              muted
              className="absolute  top-0 left-0 w-full h-full object-cover"
            >
              <source
                src="https://ik.imagekit.io/qfj6zsfnqn/develop.mp4?updatedAt=1761297445677"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="z-50 w-full h-full flex flex-col  gap-3 items-center justify-center ">
              <h1 className=" text-6xl text-white font-semibold">
                Your <span className="text-primary">Ideas</span> Our{" "}
                <span className="text-primary">Code</span>
              </h1>
              <p className="text-white font-light max-w-140 text-center">
                We design and develop stunning websites, dynamic web apps, and
                smooth mobile experiences that don’t just look good they perform
                like magic!
              </p>
              <div className="flex gap-3">
                <Button>View Plans</Button>
                <Button
                  className={"bg-transparent text-white"}
                  variant={"outline"}
                >
                  Meet Now
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full z-30 ">
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
      <div className="min-h-screen relative w-full bg-black  py-15">
        <BackgroundRippleEffect />
        <div className="max-w-6xl z-10 relative mx-auto   rounded-md shadow-md shadow-neutral-700 border border-neutral-700  w-full  py-7">
          <h2 className="font-extrabold text-slate-100 uppercase text-4xl text-center">
            Where Logic Meets Creativity
          </h2>

          <div className="my-6">
            <Marquee pauseOnHover className={"[--duration:20s"}>
              {expertiseArr.map((item, index) => (
                <AnimatedShinyText
                  key={index}
                  className="inline-flex border  border-primary rounded-2xl items-center justify-center px-4 py-1 transition ease-out   hover:duration-300 text-neutral-200"
                >
                  {item}
                </AnimatedShinyText>
              ))}
            </Marquee>
          </div>
          <div className="w-full  flex items-center ">
            <div className="grid grid-cols-3 max-w-4xl w-full  mx-auto gap-30 ">
              <CardSpotlight className="h-full bg-neutral-900 border-neutral-700 px-3 py-2  rounded-md">
                <div className="relative z-20">
                  <div className="relative w-full h-30 rounded-md overflow-hidden flex flex-col gap-3">
                    <Image
                      unoptimized
                      src={"/gif/giphy.gif"}
                      fill
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="my-5 flex flex-col gap-5">
                    <span className="text-neutral-300 text-balance uppercase font-bold italic text-sm">
                      Don’t Be Like This Monkey 🐵
                    </span>
                    <span className="text-2xl font-semilight text-white">
                      We make interfaces that actually listen.
                    </span>
                  </div>
                </div>
              </CardSpotlight>
              <CardSpotlight className="h-full bg-neutral-900 border-neutral-700 px-3 py-2 rounded-md">
                <div className="z-20 relative h-full ">
                  <div className="relative w-full h-30 rounded-md overflow-hidden">
                    <Image
                      unoptimized
                      src={"/gif/comp.gif"}
                      fill
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="my-5 flex flex-col gap-5 justify-between ">
                    <span className="text-neutral-300  text-balance font-bold italic text-sm uppercase">
                      Stop Slamming. Start Shipping. 🚀
                    </span>
                    <h2 className="text-2xl font-semilight text-balance text-white">
                      Code shouldn’t hurt your feelings.
                    </h2>
                  </div>
                </div>
              </CardSpotlight>
              <CardSpotlight className="h-full bg-neutral-900 border-neutral-700 px-3 py-2 rounded-md">
                <div className="relative z-20">
                  <div className="relative w-full h-30 rounded-md overflow-hidden">
                    <Image
                      unoptimized
                      src={"/gif/market-gif.gif"}
                      fill
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="my-5 flex flex-col gap-5">
                    <span className="text-neutral-300 font-bold italic text-balance text-sm uppercase">
                      Endless Scrolling Isn’t Engagement 😅
                    </span>
                    <h2 className="text-2xl text-balance font-semilight text-white">
                      UX so good, you’ll stop searching.
                    </h2>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-13">
        {/* Website Development */}
        <HoverAccordion
          className="mx-auto w-full border-t border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">1</div>
                  <div className="w-[75%] uppercase font-bold text-5xl">
                    website development
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
                          <h4 className="text-lg text-balance md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            We make{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              emails
                            </span>{" "}
                            people actually want to open! 📨
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
                              Why Our Emails Work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Personal, Not Pushy
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Timing
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Design That Guides
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Performance First
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
                      Your website is your digital first impression — we make
                      sure it’s unforgettable. From sleek landing pages to
                      full-scale corporate sites, we blend design and
                      performance to create experiences people actually enjoy
                      using. <br /> <br /> Every site we build is optimized for
                      speed, SEO, and conversions — because what’s the point of
                      looking good if it doesn’t perform?
                    </div>
                    <div></div>
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* WEB APPLICATION */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">2</div>
                  <div className="w-[75%] uppercase font-bold text-5xl">
                    WEB APPLICATION
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
                          <h4 className="text-lg text-balance md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            We make{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              emails
                            </span>{" "}
                            people actually want to open! 📨
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
                              Why Our Emails Work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Personal, Not Pushy
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Timing
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Design That Guides
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Performance First
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
                    We turn complex ideas into clean, scalable web apps that
                    just… work. Whether it’s dashboards, CRMs, or booking
                    systems, we focus on performance, reliability, and a
                    seamless user flow. <br />
                    <br /> You bring the vision — we handle the logic,
                    architecture, and all that behind-the-scenes magic that
                    makes it run smoothly.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* MOBILE APPLICATION */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-2xl">3</div>
                  <div className="w-[75%] uppercase font-bold text-5xl">
                    Mobile Application
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
                          <h4 className="text-lg text-balance md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            We make{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              emails
                            </span>{" "}
                            people actually want to open! 📨
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
                              Why Our Emails Work
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Personal, Not Pushy
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Timing
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Design That Guides
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Performance First
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
                    From concept to code, we build mobile apps that feel native,
                    look stunning, and perform like a dream. Whether Android,
                    iOS, or cross-platform — your users get a buttery-smooth
                    experience every time. <br />
                    <br /> We don’t just create apps, we create habit-forming
                    products that people love opening again and again.
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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
