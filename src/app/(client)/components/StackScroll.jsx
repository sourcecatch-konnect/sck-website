"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StackScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // example transforms (you can tweak these)
  const y1 = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-neutral-100">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center">
        <motion.div
          style={{ translateY: y1 }}
          className="absolute w-3/4 bg-red-400 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-white text-xl font-semibold">Step 1</h2>
          <p className="text-white">This is the first bar info.</p>
        </motion.div>

        <motion.div
          style={{ translateY: y2 }}
          className="absolute w-3/4 bg-blue-400 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-white text-xl font-semibold">Step 2</h2>
          <p className="text-white">This is the second bar info.</p>
        </motion.div>

        <motion.div
          style={{ translateY: y3 }}
          className="absolute w-3/4 bg-green-400 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-white text-xl font-semibold">Step 3</h2>
          <p className="text-white">This is the third bar info.</p>
        </motion.div>

        <motion.div
          style={{ translateY: y4 }}
          className="absolute w-3/4 bg-yellow-400 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-white text-xl font-semibold">Step 4</h2>
          <p className="text-white">This is the fourth bar info.</p>
        </motion.div>
      </div>
    </div>
  );
}
