import Link from "next/link"
import React from "react"
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = ({ className = "", isMobile = false }) => {
  // Adjust sizes based on mobile or desktop
  const containerSize = isMobile ? "w-12 h-12" : "w-16 h-16";
  const textSize = isMobile ? "text-xl" : "text-2xl";
  const taglineSize = isMobile ? "text-[7px]" : "text-[8px]";
  const tmSize = isMobile ? "text-[9px]" : "text-xs";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <MotionLink
        href="/"
        className={`relative ${containerSize} flex items-center justify-center
          transition-all duration-300 group
        `}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main background with gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-light to-light/90 dark:from-dark dark:to-dark/90 shadow-lg"
          initial={{ borderRadius: "30%" }}
          animate={{ borderRadius: ["30%", "25%", "20%", "25%", "30%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Border with animated gradient */}
        <motion.div
          className="absolute inset-0 border-2 border-dark/80 dark:border-light/80 overflow-hidden"
          initial={{ borderRadius: "30%" }}
          animate={{ borderRadius: ["30%", "25%", "20%", "25%", "30%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -inset-[100%] bg-gradient-to-r from-primary via-dark to-primary dark:from-primaryDark dark:via-light dark:to-primaryDark opacity-30"
            animate={{
              left: ["-100%", "100%", "-100%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-[3px] bg-gradient-to-br from-primary/80 to-primary/20 dark:from-primaryDark/80 dark:to-primaryDark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ borderRadius: "28%" }}
          animate={{ borderRadius: ["28%", "23%", "18%", "23%", "28%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative">
            <span className={`${textSize} font-bold text-dark dark:text-light tracking-wider`}>
              GS
            </span>
            <motion.span
              className={`absolute -bottom-1 -right-1 ${tmSize} text-primary dark:text-primaryDark font-semibold`}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ™
            </motion.span>
          </div>
          <span className={`${taglineSize} font-medium text-dark/70 dark:text-light/70 tracking-widest mt-1`}>
            CODER
          </span>
        </div>

        {/* Animated outer glow */}
        <motion.div
          className="absolute inset-0 border-2 border-primary dark:border-primaryDark opacity-0 group-hover:opacity-100"
          initial={{ borderRadius: "35%", scale: 0.9 }}
          animate={{
            borderRadius: ["35%", "30%", "25%", "30%", "35%"],
            scale: [0.9, 1.1, 0.9],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </MotionLink>
    </div>
  )
}

export default Logo
