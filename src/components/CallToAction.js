import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.div
      className="my-32 w-full rounded-2xl p-12 bg-dark dark:bg-light text-light dark:text-dark relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 dark:bg-primaryDark/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/20 dark:bg-primaryDark/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold mb-6 md:text-3xl sm:text-2xl">
          Ready to Start Your Next Project?
        </h2>

        <p className="text-xl max-w-2xl mb-8 text-light/80 dark:text-dark/80 md:text-lg sm:text-base">
          I&apos;m currently available for freelance work. If you have a project that needs some creative touch, I&apos;d love to hear about it.
        </p>

        <div className="flex gap-6 sm:flex-col">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="py-3 px-8 bg-primary text-light rounded-lg font-semibold
                hover:bg-primary/80 dark:bg-primaryDark dark:text-dark dark:hover:bg-primaryDark/80
                transition-all duration-300 sm:w-full sm:text-center sm:block"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="mailto:shitganesh4@gmail.com"
              className="py-3 px-8 bg-transparent text-light border-2 border-light rounded-lg font-semibold
                hover:bg-light hover:text-dark dark:text-dark dark:border-dark
                dark:hover:bg-dark dark:hover:text-light
                transition-all duration-300 sm:w-full sm:text-center sm:block sm:mt-4"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
