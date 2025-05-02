import React from "react"
import { motion } from "framer-motion"

const textContainer = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.08,
        }
    }
}

const textWord = {
    initial: {
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {
    return (
        <div className="w-full mx-auto flex items-center justify-center text-center overflow-hidden
         dark:text-light sm:py-0
        ">
            <motion.h1
                className={`text-7xl inline-block w-full text-dark font-bold capitalize
                    ${className} mb-8 dark:text-light relative
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                    after:w-1/4 after:h-1 after:bg-primary after:dark:bg-primaryDark after:rounded-full
                    after:opacity-80 after:hidden md:after:block
                `}
                variants={textContainer}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            key={word + "-" + index}
                            className="inline-block"
                            variants={textWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText
