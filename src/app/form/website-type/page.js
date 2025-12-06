"use client";
import { Button } from "@/components/ui/button";
import { IconArrowAutofitLeft, IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  const websiteType = [
    {
      text: "E-Commerce",
      link: "/form/website-type/e-commForm",
    },
    {
      text: "Service Based",
      link: "/form/website-type/service-based",
    },
    {
      text: "Portfolio",
      link: "/form/website-type/portfolio",
    },
    {
      text: "Product Catalog",
      link: "/form/website-type/product-catalog",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative h-[80vh] max-w-screen-xl w-full  flex justify-center items-center rounded-4xl p-5 sm:p-10 md:p-20">
        <div className="flex flex-col min-h-50 gap-8 ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold"
          >
            Select Website Type
          </motion.h1>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4"
          >
            {websiteType.map((opt) => (
              <SelectCard key={opt} text={opt} link={item.link} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const SelectCard = ({
  text = "E-Commerce",
  link = "/form/website-type/e-commForm",
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Link href={link}>
      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
        className="w-50 h-50 border p-5 rounded-2xl cursor-pointer flex items-center justify-center"
      >
        <span className=" text-xl">{text}</span>
      </motion.div>
    </Link>
  );
};
