"use client";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

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
  IconClipboardSmile,
  IconArrowBadgeUp,
  IconNut,
  IconTrophy,
  IconBrandLinktree,
  IconBrandSpeedtest,
} from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Aperture,
  Box,
  Handshake,
  Lock,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import Link from "next/link";

export default function Page() {
  const [open, setOpen] = useState(false);
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

  const expertiseArr = [
    "🚀 Amplify Your Reach",
    "💡 Make Every Click Count",
    "🎯 Target. Engage. Convert.",
    "🔥 Build Hype That Lasts",
    "📈 Turn Impressions Into Impact",
  ];

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

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const performanceMarketing = [
    "/project-cards/Leak finder.avif",
    "/project-cards/Shamali Polymats.avif",
    "/project-cards/Indinite.avif",
    "/project-cards/Fabric nation.avif",
    "/project-cards/DBN.avif",
    "/project-cards/Perfume By JS.avif",
    "/project-cards/Perfume By JS.avif",
  ];

  const emailMarketing = [
    "/project-cards/SK translines.avif",
    "/project-cards/SK Cloud.avif",
  ];

  const socialMediaImages = [
    "/project-cards/market/baba.avif",
    "/project-cards/market/bee blend.avif",
    "/project-cards/market/sck.avif",
    "/project-cards/market/ZERO.avif",
  ];

  const seoImages = [
    "/project-cards/Baba Namkeen.avif",
    "/project-cards/market/crest-project.avif",
    "/project-cards/Fabric nation.avif",
    "/project-cards/Shamali Polymats.avif",
    "/project-cards/market/The Globar.avif",
  ];

  const leadGenImages = [
    "/project-cards/Leak finder.avif",
    "/project-cards/Shamali Polymats.avif",
    "/project-cards/SK Cloud.avif",
    "/project-cards/SK translines.avif",
  ];

  const handleOpenModal = () => {
    console.log("clicked");
    setOpen(true);
  };
  return (
    <>
      <div className="relative h-screen w-full bg-black overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/qfj6zsfnqn/Marketing.mp4?updatedAt=1761294920106"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center gap-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-semibold leading-tight">
            Your Brand Deserves to Be <span className="text-primary">Seen</span>
          </h1>

          <p className="text-white font-light max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base">
            We design and develop stunning websites, dynamic web apps, and
            smooth mobile experiences that don’t just look good — they perform
            like magic!
          </p>

          <div className="flex flex-row gap-3 mt-4">
            <Link href={"/our-projects"}>
              <Button>View Work</Button>
            </Link>
            <Button
              data-cal-namespace="lets-konnect-and-grow"
              data-cal-link="sckonnect/lets-konnect-and-grow"
              data-cal-config='{"layout":"month_view"}'
              className="bg-transparent text-white cursor-pointer"
              variant="outline"
            >
              Meet Now
            </Button>
          </div>
        </div>

        {/* Client logos */}
        <div className="absolute bottom-3 w-full z-30">
          <Marquee pauseOnHover className="[--duration:20s]">
            {clientLogo.map((item, index) => (
              <Image
                key={index}
                src={item.url}
                alt="client logo"
                width={120}
                height={40}
                className="white-logo mx-4 opacity-80 hover:opacity-100 transition"
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="min-h-screen w-full py-13 bg-black">
        <div className="max-w-6xl mx-auto w-full p-4 pt-7">
          <h2 className="font-extrabold text-white uppercase text-3xl text-balance md:text-4xl text-center">
            How We Help You Grow 😏
          </h2>

          <div className="my-10">
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Box className="h-4 w-4 text-neutral-400" />}
                title="Craft Stories That Stick"
                description="We shape your message into something people actually remember — not just scroll past."
              />

              <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4 text-neutral-400" />}
                title="Design That Feels Alive"
                description="Every color, font, and motion has a purpose — to make your brand feel human, not just “pretty.”"
              />

              <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Lock className="h-4 w-4 text-neutral-400" />}
                title="Visibility That Matters"
                description="We don’t chase numbers. We focus on the places and people who’ll truly connect with you."
              />

              <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-4 w-4 text-neutral-400" />}
                title="Strategy That Adapts"
                description="Markets change, trends fade — we evolve your presence to stay relevant, not repetitive."
              />

              <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-4 w-4 text-neutral-400" />}
                title="Growth You Can Feel"
                description="From awareness to action, we track what truly counts — progress you can see, not just measure."
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-13">
        {/* Performance Marketing */}
        <HoverAccordion
          className="mx-auto w-full border-t border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    1
                  </div>
                  <div className="w-[75%] font-bold text-xl md:text-5xl">
                    PERFORMANCE MARKETING
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            <Marquee
                              pauseOnHover
                              className={"[--duration:20s]"}
                            >
                              {performanceMarketing.map((image, idx) => (
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
                                  <Image
                                    src={image}
                                    alt="bali images"
                                    width="500"
                                    height="500"
                                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover object-top shrink-0"
                                  />
                                </motion.div>
                              ))}
                            </Marquee>
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
                      We focus on creating campaigns that bring real, measurable
                      impact. Every click, impression, and conversion is planned
                      with intent — designed to reach the right audience at the
                      right moment. <br /> <br /> Our approach blends creativity
                      with strategy, ensuring your budget works harder and
                      delivers visible growth. It’s not about running ads — it’s
                      about building momentum that scales.
                    </div>
                    <div></div>
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* Email Marketing */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    2
                  </div>
                  <div className="w-[75%] font-bold text-xl md:text-5xl">
                    EMAIL MARKETING
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            {emailMarketing.map((image, idx) => (
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
                                className="relative rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                              >
                                <Image
                                  src={image}
                                  alt="bali images"
                                  width="500"
                                  height="500"
                                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover object-bottom shrink-0"
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
                    Email is still one of the most personal ways to connect with
                    your audience — when it’s done right. We craft campaigns
                    that sound like conversations, not promotions. <br />
                    <br /> From welcome flows to newsletters, every message we
                    send builds trust, value, and curiosity. Our goal? Make your
                    brand the email people want to open.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* SMM */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    3
                  </div>
                  <div className="w-[75%] font-bold text-xl md:text-5xl">
                    SOCIAL MEDIA MARKETING
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            Your{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              social
                            </span>{" "}
                            pages shouldn&apos;t feel like an afterthought.
                          </h4>
                          <div className="relative flex justify-center items-center">
                            <div className="absolute hidden md:block left-0 top-0 h-full w-25 bg-gradient-to-r from-white z-10 via-white/50 to-transparent"></div>
                            <div className="absolute hidden md:block right-0 top-0 h-full w-25 bg-gradient-to-l from-white z-10 via-white/50 to-transparent"></div>
                            <Marquee
                              pauseOnHover
                              className={"[--duration:20s]"}
                            >
                              {socialMediaImages.map((image, idx) => (
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
                            </Marquee>
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              Our Social Edge
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconTarget className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Story Over Strategy
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconChartFunnel className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Platform-Native Creativity
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconLivePhoto className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Community Building
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconClipboardText className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Consistency That Wins
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
                    Your social presence isn’t just posts — it’s your brand’s
                    personality. We help you create content that people don’t
                    just scroll past, but stop and engage with. <br />
                    <br />
                    From planning your calendar to creating campaigns that
                    trend, we make sure your story stays consistent and real
                    across every platform.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* SMO */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    4
                  </div>
                  <div className="w-[75%] font-bold text-xl md:text-5xl">
                    SEARCH ENGINE OPTIMISATION
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            Websites that went from{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              invisible
                            </span>{" "}
                            to unstoppable! 🚀
                          </h4>
                          <div className="relative flex justify-center items-center">
                            <div className="absolute hidden md:block left-0 top-0 h-full w-25 bg-gradient-to-r from-white z-10 via-white/50 to-transparent"></div>
                            <div className="absolute hidden md:block right-0 top-0 h-full w-25 bg-gradient-to-l from-white z-10 via-white/50 to-transparent"></div>
                            <Marquee
                              pauseOnHover
                              className={"[--duration:20s]"}
                            >
                              {seoImages.map((image, idx) => (
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
                            </Marquee>
                          </div>
                          <div className="flex flex-col py-8 gap-5 ">
                            <h4 className="text-center text-xl">
                              Our SEO Game Plan
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <IconClipboardSmile className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Content That Performs
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconArrowBadgeUp className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  On-Page Precision
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconNut className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Technical Edge
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconTrophy className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Long-Term Wins
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
                    When people search, they’re ready to take action — and
                    that’s where we place you. Our SEM strategies focus on
                    intent, making sure your brand appears when it matters most.{" "}
                    <br />
                    <br />
                    We craft ad campaigns that are clear, optimized, and
                    conversion-focused — not just traffic generators but true
                    revenue drivers.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />
        {/* Lead Generation */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    5
                  </div>
                  <div className="w-[75%] font-bold text-xl md:text-5xl">
                    LEAD GENERATION
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            Not all clicks are equal. We{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              focus 🎯
                            </span>{" "}
                            on the ones that become real customers 🤝.
                          </h4>
                          <div className="flex justify-center items-center">
                            {leadGenImages.map((image, idx) => (
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
                    Good leads aren’t about quantity — they’re about quality. We
                    identify and attract people who actually need what you
                    offer. <br />
                    <br /> Using the right mix of content, outreach, and
                    automation, we create systems that turn curiosity into loyal
                    customers.
                  </div>
                  <div className="w-[15%] p-2 px-2  rounded-md text-center"></div>
                </div>
              ),
            },
          ]}
        />

        {/* Influencer Marketing */}
        <HoverAccordion
          className="mx-auto w-full  border-b border-primary overflow-hidden "
          hideIcon={true}
          items={[
            {
              value: "item-1",
              trigger: (
                <div className="flex w-full uppercase open-condensed-bold px-4 items-center">
                  <div className="w-[10%] font-semibold text-base md:text-2xl">
                    5
                  </div>
                  <div className="w-[75%] font-bold text-xl  md:text-5xl">
                    INFLUENCER MARKETING
                  </div>
                  <div>
                    <Modal>
                      <ModalTrigger className="border bg-white text-black  flex justify-center group/modal-btn">
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
                            People trust{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                              people 🤝
                            </span>{" "}
                            — that’s where the magic happens ✨.
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
                              Our Influence Approach
                            </h4>
                            <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-center max-w-sm mx-auto">
                              <div className="flex  items-center justify-center">
                                <Handshake className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Authentic Partnerships
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <IconBrandLinktree className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Creative Freedom
                                </span>
                              </div>
                              <div className="flex items-center justify-center">
                                <Aperture className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Smart Matchmaking
                                </span>
                              </div>
                              <div className="flex  items-center justify-center">
                                <IconBrandSpeedtest className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                  Performance You Can See
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
                    Influencers shape how people see brands — and we make that
                    connection authentic. We partner you with creators who
                    genuinely align with your message. <br />
                    <br /> From campaign planning to performance tracking, we
                    turn collaborations into conversations that reach the right
                    audience, the right way.
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
          <div className="relative  lg:py-14 lg:px-20 p-10 rounded-2xl bg-black  border flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0">
              <h2 className="font-manrope text-3xl md:text-4xl text-white font-semibold mb-5 lg:mb-2">
                Connect with us
              </h2>
              <p className="text-base text-balance md:text-xl text-neutral-300">
                Contact us with any query or any idea.
              </p>
            </div>
            <Link href="/contact">
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
            </Link>
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

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance  md:text-2xl/[1.875rem] text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem]  md:text-base/[1.375rem] text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
