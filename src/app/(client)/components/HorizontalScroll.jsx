"use client";
import { useScroll, useTransform, motion } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

export default function HorizontalScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <section ref={containerRef} className="relative h-[200vh] ">
      <div className="sticky hide-scrollbar top-0 h-[80vh] overflow-hidden flex items-center ">
        <motion.div
          style={{ x }}
          className="flex bg-[#f9f9f9]  px-20 will-change-transform"
        >
          <div className="min-w-[50vw]  relative  h-90 ">
            <div className="flex h-full flex-col justify-between">
              <div className="flex pt-20">
                <div>
                  <h2 className="font-bold text-6xl">SHAMALI</h2>
                  <span className="text-primary font-bold text-5xl">
                    POLYMATS
                  </span>
                </div>
                <div className="w-[451px]"></div>
                <div className="max-w-50">
                  <p>
                    When Shamali Polymats wanted to expand into
                    <span className="text-primary"> Gulf markets</span>
                  </p>
                </div>
                <div className="w-[143px]"></div>
                <div className="relative">
                  <Image
                    className="absolute top-[-2rem] right-[-2rem]"
                    src={"/eaglefortext.svg"}
                    width={20}
                    height={20}
                    alt="eagle"
                  />
                  <p>We Made it happen</p>
                </div>
              </div>

              <div className="relative w-full h-10 bottom-0">
                <Image
                  alt="Mountain Image - 1"
                  src="/Back layer.svg"
                  fill
                  className="object-contain bottom-0"
                />
                <Image
                  src="/Front layer.svg"
                  fill
                  alt="Mountain Image - 2"
                  className="object-contain bottom-0"
                />
              </div>
            </div>
          </div>
          <div className=" relative  h-90 ">
            <div className="flex h-full flex-col justify-between">
              <div className="h-full relative ">
                <div className="absolute top-0">
                  <Image src={"Sun.svg"} alt="Sun" width={40} height={40} />
                </div>
                <div className="w-[206px]"></div>
                <div className="w-100 ml-50 p-10 flex items-end bg-white border-l-1 border-r-1 border-b-1  border-primary h-50">
                  <p className="uppercase">
                    We designed a lead-generation website and managed Google Ads
                    campaigns
                  </p>
                </div>

                <div className="absolute bottom-[-1.5rem] left-[10rem]    h-20 w-50">
                  <Image src={"/camel-svg.svg"} alt="camel" fill />
                </div>
                <div className="absolute bottom-[-1.8rem] left-[40rem]    h-25 w-30">
                  <Image src={"/mahal.png"} alt="Taj Mahal" fill />
                </div>
                <div className="absolute bottom-[0rem] left-[90rem]    h-100 w-30">
                  <Image src={"/tower-img.png"} alt="Taj Mahal" fill />
                </div>
              </div>
              <div className="relative   bottom-0">
                <div className="absolute pt-5 bottom-50 right-200  w-50 h-40  ">
                  <span className="font-bold text-base ">
                    <span className="text-primary">₹400–₹500</span> CPM with
                    precise geo-targeting.
                  </span>
                </div>
                <div className="absolute pt-5 bottom-50 right-280  w-40 h-40  ">
                  <span className="font-bold text-xl uppercase ">
                    Delivering
                  </span>
                </div>
                <div className="relative h-3 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2571"
                    height="10"
                    viewBox="0 0 2571 10"
                    fill="none"
                  >
                    <rect width="2570" height="3" fill="#FFA651" />
                  </svg>
                </div>

                {/* Building Image */}
                <div className="absolute bottom-2  right-100">
                  <Image
                    src={"/building-img.png"}
                    alt="building image"
                    width={"1000"}
                    height={"50"}
                  />
                </div>

                {/* <div className="absolute bottom-2  right-100">
                  <Image
                    src={"/building-img.png"}
                    alt="building image"
                    width={"1000"}
                    height={"50"}
                  />
                </div> */}
              </div>
            </div>
          </div>

          {/* {["One", "Two", "Three", "Four"].map((text, i) => (
            <div
              key={i}
              className="min-w-[100vw] h-[80vh] bg-white flex items-center justify-center text-6xl font-bold rounded-2xl "
            >
              {text}
            </div>
          ))} */}
        </motion.div>
      </div>
    </section>
  );
}
