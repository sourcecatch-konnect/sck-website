"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    // Show line on route change
    setShowLine(true);

    // Hide it after animation
    const timer = setTimeout(() => setShowLine(false), 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* 🔶 Top Animated Line */}
      {showLine && (
        <motion.div
          key={pathname + "-loader"}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-[3px] origin-left z-[9999]
          bg-gradient-to-r from-[#e85102] via-[#ff7a1a] to-[#e85102] shadow-[0_0_8px_#e85102]"
        />
      )}

      {/* ✨ Page Fade/Slide Transition */}
      {children}
    </>
  );
}
