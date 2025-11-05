import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import { ChartLineInteractive } from "../components/chat-line-interactive";

export default function Page() {
  const partnerLogo = [
    {
      imgTitle: "Google Ads",
      imgUrl: "/logo/googlelogo.webp",
    },
    {
      imgTitle: "Meta Ads",
      imgUrl: "/logo/metalogo.png",
    },
    {
      imgTitle: "AWS",
      imgUrl: "/logo/awslogo.svg",
    },
    {
      imgTitle: "GoDaddy",
      imgUrl: "/logo/godaddylogo.svg",
    },
    {
      imgTitle: "BigRock",
      imgUrl: "/logo/bigrocklogo.svg",
    },
  ];

  const associationLogo = [
    "/logo/skclouds.png",
    "/logo/rimacle.png",
    "/logo/indinite-logo.webp",
  ];

  const images = ["/abt-us-img.png", "/abt-us-img.png", "/abt-us-img.png"];
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-black w-full">
        <video
          loop
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://ik.imagekit.io/qfj6zsfnqn/SCK%20UI%20Files.mp4?updatedAt=1761390146053"
            type="video/mp4"
          />
        </video>

        {/* Overlay for better readability (optional) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative max-w-xs md:max-w-6xl gap-5 h-full w-full mx-auto items-start flex-col justify-center flex z-20">
          <h1 className="text-5xl text-white font-bold">
            About <span className="text-primary">S</span>ourceCatch <br />
            <span className="text-primary">K</span>onnect
          </h1>
          <p className="text-white/90">
            We deliver robust, scalable, and secure IT solutions that drive
            <br />
            tangible business success and ensure technological resilience.
          </p>
          <div className="space-x-5">
            <Button>Contact Us</Button>
            <Button className="bg-transparent text-white" variant="outline">
              View Plans
            </Button>
          </div>
        </div>
      </div>
      {/* Who We Are */}
      {/* <div className="py-15 w-full bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex gap-10 items-center h-full">
            <div className="w-[60%] flex flex-col gap-5">
              <h2 className="font-bold text-3xl">WHO WE ARE</h2>
              <p>
                At SourceCatch Konnect Pvt. Ltd., we specialize in elevating
                your digital presence and accelerating business growth. Our
                all-inclusive range of digital marketing services is tailored to
                meet your unique needs, helping your brand stand out in today’s
                competitive online landscape. From SEO and social media
                marketing to web development and IT solutions, we provide
                innovative strategies that drive measurable results and
                transform your brand for the digital future. <br /> <br /> With
                years of experience in technology and design, we’ve helped
                startups, enterprises, and global brands build impactful digital
                ecosystems that drive measurable growth.
              </p>
            </div>
            <div className="w-[40%] flex flex-col ">
              <div className="border w-full h-40 p-5 rounded-xl">
                <div className="flex flex-col justify-start gap-2">
                  <div className="flex w-full justify-start items-center gap-7 ">
                    <span className="font-semibold text-[2.5rem]">07+</span>
                    <span className="font-normal text-white w-full bg-primary rounded-md px-5 py-2">
                      Years Of Experience
                    </span>
                  </div>
                  <div className="flex w-full justify-start gap-7 items-center">
                    <span className="font-semibold text-[2.5rem]">08+</span>
                    <span className="font-normal text-white w-full bg-primary rounded-md px-5 py-2">
                      Team Of Professionals
                    </span>
                  </div>
                </div>
                <div></div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Who We ARe Two */}
      <div className="w-full bg-[#f9f9f9] py-18">
        <div className="max-w-6xl mx-auto w-full min-h-[20rem] items-center flex flex-col md:flex-row px-6 md:px-0 ">
          <div className="w-full md:w-[70%] flex flex-col   py-3 h-full ">
            <h2 className=" py-3 font-bold text-xl text-center md:text-left">
              We don’t just build brands. We build momentum. ⚡
            </h2>
            <div className="min-h-50 overflow-hidden flex flex-col md:flex-row gap-2 md:gap-9 border-t border-b">
              <div className="w-full md:w-[40%] h-full  relative py-3">
                <div className="absolute hidden md:block left-0 top-0 h-full w-25 bg-gradient-to-r from-white z-10 via-white/50 to-transparent"></div>
                <div className="absolute hidden md:block right-0 top-0 h-full w-25 bg-gradient-to-l from-white z-10 via-white/50 to-transparent"></div>
                <Marquee className={"[--duration:20s] "}>
                  {images.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative w-60 h-40 flex rounded-xl overflow-hidden items-center justify-center"
                      >
                        <Image
                          src={item}
                          alt="img"
                          fill
                          className="object-cover "
                        />
                      </div>
                    );
                  })}
                </Marquee>
              </div>
              <div className="w-full h-full p-3">
                <p className="w-full text-justify">
                  At SourceCatch, we’re a bunch of creators, coders, and
                  strategists obsessed with making ideas come alive. From
                  crafting high-converting campaigns to developing powerful
                  digital products — we help brands catch the attention they
                  deserve.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              boxShadow: "8px 8px 0 0 var(--tw-shadow-color, #3b82f6)",
            }}
            className="md:w-[30%] w-full h-full border-2 rounded-2xl shadow-primary shadow-2xl border-primary p-2 md:p-4"
          >
            <div className="h-full w-full border-dashed p-4 md:p-8  border rounded-2xl">
              <div className="flex flex-col justify-around h-full">
                <span className="text-3xl leading-10 uppercase font-bold">
                  07+ Years <br /> of Experience
                </span>
                <div className="flex flex-col gap-4">
                  <span className="text-sm">
                    A journey built on creativity, precision, and a relentless
                    drive to make things that actually work.
                  </span>
                  <ShimmerButton
                    // background="#00000"
                    shimmerSize="0.05em"
                    shimmerColor="#e85102"
                    className="w-max py-2  "
                  >
                    See What We’ve Built
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue */}
      <div className="w-full hidden md:block md:py-18 bg-[#f9f9f9] ">
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row  gap-3 p-6 md:p-0">
          <div className="w-full md:w-[40%] z-10 ">
            <div
              className="w-full border-2 border-primary rounded-sm p-5  shadow-primary"
              style={{
                boxShadow: "6px 6px 0 0 var(--tw-shadow-color, #3b82f6)",
              }}
            >
              <ChartLineInteractive />
            </div>
          </div>
          <div className="w-full md:w-[60%] py-13">
            <div className="  border-t-2 border-b-2 min-h-10 py-8">
              <Marquee className={"[--duration:20s]"}>
                <span className="uppercase font-bold text-3xl  text-neutral-500 px-5">
                  Development
                </span>
                <span className="uppercase font-bold text-3xl text-primary px-5">
                  Marketing Expert
                </span>
                <span className="uppercase font-bold text-3xl text-neutral-500 px-5">
                  Designer
                </span>
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full bg-[#f9f9f9] h-full py-18">
        <div className="max-w-6xl mx-auto w-full border rounded-md    relative shadow">
          <div className="absolute w-3 h-3 rounded-full bg-gray-300 top-5 left-5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-gray-300 top-5 right-5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-gray-300 bottom-5 right-5"></div>
          <div className="absolute w-3 h-3 rounded-full bg-gray-300 bottom-5 left-5"></div>
          <div className="px-5 py-13">
            <div className="flex w-full justify-center gap-30">
              <span className="text-primary font-bold text-3xl">MISSION</span>
              <span className="text-primary font-bold text-3xl">VISION</span>
            </div>
            <div className="w-full flex items-center justify-center py-8 ">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <hr className="w-60 border-t border-black" />
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </div>
            <div className="w-full flex justify-center gap-4">
              <div className=" w-70 border border-black rounded-md px-4 py-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip_path="url(#clip0_1526_60)">
                    <path
                      d="M19.9988 11.6666C21.9038 11.6666 23.7238 11.725 25.4572 11.84C27.1522 11.9533 28.7072 12.185 30.1205 12.54C31.4755 12.8783 32.6538 13.3816 33.6522 14.055C34.6018 14.6958 35.3653 15.576 35.8655 16.6066C36.4088 17.7016 36.6655 19.0733 36.6655 20.7166C36.6655 22.3933 36.3505 23.9 35.7088 25.2283C35.0838 26.5266 34.2322 27.555 33.1472 28.3083C32.0913 29.0416 30.8325 29.4262 29.5472 29.4083C28.6988 29.4083 27.9305 29.295 27.2438 29.0583C26.562 28.8269 25.908 28.5206 25.2938 28.145C24.7003 27.7787 24.1194 27.3924 23.5522 26.9866C23.0194 26.6008 22.4621 26.2501 21.8838 25.9366C21.3076 25.6151 20.6603 25.4427 20.0005 25.435C19.3788 25.435 18.7505 25.5966 18.1138 25.935C17.5872 26.2183 17.0305 26.5683 16.4472 26.985C15.9105 27.3683 15.3305 27.755 14.7022 28.1433C14.0894 28.5194 13.4364 28.8258 12.7555 29.0566C12.0672 29.2933 11.3022 29.4066 10.4588 29.4066C9.17095 29.4257 7.90933 29.0417 6.85049 28.3083C5.76549 27.555 4.91382 26.525 4.28882 25.2283C3.64716 23.8983 3.33216 22.395 3.33216 20.7133C3.32549 19.08 3.58216 17.71 4.12716 16.6133C4.6279 15.582 5.39269 14.7016 6.34382 14.0616C7.34382 13.39 8.52216 12.8883 9.87716 12.55C11.409 12.1782 12.9706 11.9423 14.5438 11.845C16.2772 11.7266 18.0938 11.6666 19.9988 11.6666Z"
                      stroke="#E85102"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1526_60">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  To deliver intelligent, reliable, and scalable IT solutions
                  that transform how businesses operate and innovate.
                </p>
              </div>
              <div className=" w-70 border border-black rounded-md px-4 py-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1526_74)">
                    <path
                      d="M20.0015 10C21.9348 10 23.7915 10.0589 25.5715 10.1767C27.3704 10.2956 29.022 10.5444 30.5265 10.9233C32.0687 11.3067 33.422 11.89 34.5865 12.6733C35.7759 13.4755 36.733 14.577 37.3615 15.8667C38.0231 17.2017 38.3348 18.815 38.3348 20.7167C38.3348 22.6433 37.9648 24.3967 37.2131 25.95C36.4631 27.5067 35.4248 28.7583 34.0998 29.6767C32.7649 30.6035 31.1748 31.0921 29.5498 31.075C28.5142 31.0761 27.5681 30.93 26.7115 30.6367C25.9115 30.3629 25.1436 30.003 24.4215 29.5633C23.793 29.175 23.1777 28.7659 22.5765 28.3367C22.0974 27.9887 21.5958 27.673 21.0748 27.3917C20.7461 27.2102 20.3785 27.1107 20.0031 27.1017C19.6548 27.1017 19.2931 27.1967 18.9065 27.4017C18.4398 27.6528 17.9437 27.9661 17.4181 28.3417C16.8179 28.7691 16.2037 29.1766 15.5765 29.5633C14.8596 30.0034 14.096 30.3623 13.2998 30.6333C12.3927 30.9341 11.4421 31.0828 10.4865 31.0733C8.85031 31.0979 7.24753 30.6095 5.90313 29.6767C4.5798 28.76 3.5398 27.5067 2.7898 25.9533C2.0398 24.39 1.66591 22.6456 1.66813 20.72C1.6598 18.8283 1.97146 17.2117 2.6298 15.8867C3.25951 14.5892 4.22156 13.4817 5.41813 12.6767C6.58313 11.8933 7.93646 11.3167 9.48813 10.9283C11.1118 10.5346 12.7672 10.2853 14.4348 10.1833C16.2115 10.0611 18.067 10 20.0015 10Z"
                      fill="#E85102"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1526_74">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>
                  To become a global leader in technology services by enabling
                  businesses to unlock their full digital potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/* Founder Intro */}
      <div className="relative w-full  mb-13 overflow-hidden">
        <div className="absolute h-full w-1/2 bg-black"></div>
        <div className="relative max-w-6xl mx-auto w-full h-100 ">
          <div className="w-1/2"></div>
          <div className="w-1/2"></div>
          <div className="relative max-w-6xl mx-auto w-full h-full py-4 flex ">
            <div className="w-1/2 px-2 md:px-0 flex flex-col gap-2">
              <span className="text-white text-sm md:text-base">
                Meet our founder
              </span>
              <h2 className="font-semibold text-2xl md:text-3xl text-white">
                MR. PRANAV KOTHARI
              </h2>
              <div className="text-primary flex gap-2">
                <IconBrandWhatsapp />
                <IconBrandLinkedin />
                <IconBrandInstagram />
              </div>
            </div>
            <div className="w-1/2 hidden px-2 md:px-0 md:flex  justify-end items-end  z-50">
              <div className="w-100 flex flex-col gap-5">
                <p className="text-black text-md">
                  At SourceCatch Konnect, We build lasting connections between
                  businesses and innovative, results-driven IT solutions. Our
                  commitment is to excellence guarantees clients access to
                  cutting-edge technology, seamless integration, and unmatched
                  support.
                </p>
                <Button className={"w-max"}>Contact Us</Button>
              </div>
            </div>
            <div className="h-full w-70 absolute top-1/2 left-1/2 md:-translate-x-1/2 -translate-y-1/2 sm:left-1/2  translate-x-[0%] sm:translate-x-[-50%]">
              <Image
                src="https://ik.imagekit.io/qfj6zsfnqn/pranav-img.webp?updatedAt=1761552006347"
                alt="pranav img"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl backdrop-blur-sm bg-white/60 shadow-lg p-4 flex flex-col justify-center gap-3 md:hidden border border-gray-200">
          <div className="flex items-start gap-2">
            <span className="text-3xl text-gray-400 leading-none">“</span>
            <p className="text-black text-sm leading-relaxed">
              At <span className="font-semibold">SourceCatch Konnect</span>, we
              build lasting connections between businesses and innovative,
              results-driven IT solutions. Our commitment to excellence ensures
              clients access to cutting-edge technology, seamless integration,
              and unmatched support.
            </p>
            <span className="text-3xl text-gray-400 leading-none self-end">
              ”
            </span>
          </div>
        </div>
      </div>

      {/* Client Testimonial */}
      <div className="w-full flex gap-5 my-15">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row px-3 md:px-0 gap-5">
          <div className="shadow rounded-2xl w-full   md:w-1/2 relative py-3 md:py-13">
            <div className="w-full justify-center">
              <h2 className="font-bold text-xl md:text-2xl text-center text-black">
                OUR PARTNERS
              </h2>
            </div>
            <div className="w-full">
              <Marquee className="[--duration:20s] ">
                {partnerLogo.map((item, index) => {
                  return (
                    <div
                      key={item.imgTitle}
                      className="relative w-20 h-20 mx-6 "
                    >
                      <Image
                        fill
                        key={index}
                        src={item.imgUrl}
                        className="object-contain"
                        alt={item.imgTitle}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
          <div className="shadow rounded-2xl  w-full md:w-1/2 relative py-3 md:py-13">
            <div className="w-full justify-center">
              <h2 className="font-bold text-xl md:text-2xl text-center text-black">
                IN ASSOCIATION WITH
              </h2>
            </div>
            <div className="w-full">
              <Marquee className="[--duration:20s] ">
                {associationLogo.map((item, index) => {
                  return (
                    <div key={index} className="relative w-20 h-20 mx-6 ">
                      <Image
                        fill
                        key={index}
                        src={item}
                        className="object-contain"
                        alt={item}
                      />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="w-full flex h-90  mt-13 bg-gradient-to-b from-orange-500/20 via-white to-orange-500/20">
        <div className="max-w-6xl w-full mx-auto py-20  ">
          <div className="flex flex-col px-3 md:px-0 items-center gap-5">
            <h2 className="uppercase text-2xl md:text-3xl text-balance text-black font-bold text-center">
              TAKE YOUR BUSINESS WORKFLOW TO <br /> THE NEXT LEVEL
            </h2>
            <span className="text-center text-balance">
              We don’t just design we create experiences that make your <br />
              brand unforgettable design we create experiences
            </span>
            <div className="flex gap-5">
              <Button>Contact Us</Button>
              <Button variant={"outline"}>View Work</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
