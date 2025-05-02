import React from "react"
import { CircularText } from "./Icons"
import Link from "next/link"
import { motion } from "framer-motion"

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
         md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute z-20
        ">
            <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="relative"
                >
                    <CircularText className={"fill-dark dark:fill-light"} />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-md animate-pulse-slow"></div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Link
                        href="mailto:shitganesh4@gmail.com"
                        className="flex items-center justify-center
                            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                            bg-primary text-light border-2 border-solid border-transparent
                            w-20 h-20 rounded-full font-semibold
                            hover:bg-light hover:text-primary hover:border-primary
                            dark:bg-primaryDark dark:text-dark dark:hover:bg-dark
                            dark:hover:text-primaryDark dark:hover:border-primaryDark
                            md:w-12 md:h-12 md:text-[10px] md:font-bold
                            transition-all duration-300 shadow-lg
                            before:content-[''] before:absolute before:inset-0 before:rounded-full
                            before:border-2 before:border-primary/50 dark:before:border-primaryDark/50 before:scale-110
                            before:animate-ping before:opacity-75
                        "
                    >
                        Hire Me
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default HireMe
