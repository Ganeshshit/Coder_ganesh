import Head from "next/head"
import Layout from "@/components/Layout"
import Image from "next/image"
// Using direct path references for images
import { motion } from "framer-motion"
import Link from "next/link"
import { LinkArrow, GithubIcon, LinkedInIcon } from "@/components/Icons"
import HireMe from "@/components/HireMe"
import { useEffect, useRef } from "react"

export default function Home() {
  const profileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (profileRef.current) {
        const scrollY = window.scrollY;
        profileRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>CoderGanesh | Home</title>
        <meta name="description" content="Full-stack developer portfolio showcasing React.js and web development expertise" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light relative overflow-hidden
        bg-gradient-to-b from-light to-light dark:from-dark dark:to-dark
      ">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 dark:bg-primaryDark/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primaryDark/10 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-3/4 left-1/2 w-40 h-40 bg-primary/20 dark:bg-primaryDark/20 rounded-full filter blur-2xl"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primaryDark/5 dark:bg-primary/5 rounded-full filter blur-2xl"></div>
        </div>

        <Layout className="pt-0 md:pt-16 sm:pt-8 z-10 relative">
          <div className="grid grid-cols-12 gap-8 items-center w-full">
            {/* Left column - Profile Image */}
            <div className="col-span-5 lg:col-span-12 lg:mb-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                {/* Image container with effects */}
                <div className="relative group">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 dark:bg-primaryDark/20 rounded-3xl blur-lg transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-primaryDark/20 dark:bg-primary/20 rounded-3xl blur-lg transform -rotate-3 scale-105 group-hover:-rotate-2 transition-transform duration-300"></div>

                  {/* Main image */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-dark/10 dark:border-light/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-30 dark:from-primaryDark/40 transition-opacity duration-300 z-10"></div>
                    <div className="bg-light dark:bg-dark p-2">
                      <Image
                        ref={profileRef}
                        src="/images/profile/devloper.png"
                        alt="Ganesh Shit"
                        className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 max-h-[500px]"
                        priority
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>

                {/* Social media links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center mt-6 space-x-4"
                >
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-dark dark:bg-light rounded-full transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-300"></div>
                    <GithubIcon className="w-8 h-8 fill-dark dark:fill-light transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-[#0A66C2] rounded-full transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-300"></div>
                    <LinkedInIcon className="w-8 h-8 transform group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - Content */}
            <div className="col-span-7 lg:col-span-12 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-6xl font-bold leading-tight tracking-tight text-dark dark:text-light mb-6 lg:text-5xl md:text-4xl sm:text-3xl">
                  <span className="text-primary dark:text-primaryDark">Turning Vision</span> Into Reality With Code And Design.
                </h1>

                <p className="text-xl text-dark/80 dark:text-light/80 leading-relaxed mb-8 md:text-lg sm:text-base">
                  As a skilled <span className="font-semibold text-primary dark:text-primaryDark">full-stack developer</span>, I transform ideas into innovative web applications. My expertise lies in creating responsive, user-friendly interfaces with clean, efficient code.
                </p>

                <div className="flex flex-col space-y-4 mb-8 text-lg text-dark/70 dark:text-light/70 md:text-base sm:text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-primaryDark mr-3"></div>
                    <span>Explore my latest <Link href="/projects" className="text-dark dark:text-light font-medium underline decoration-primary/30 dark:decoration-primaryDark/30 underline-offset-4 hover:decoration-primary dark:hover:decoration-primaryDark transition-all">projects</Link> showcasing React.js expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-primaryDark mr-3"></div>
                    <span>Read my <Link href="/articals" className="text-dark dark:text-light font-medium underline decoration-primary/30 dark:decoration-primaryDark/30 underline-offset-4 hover:decoration-primary dark:hover:decoration-primaryDark transition-all">articles</Link> on web development trends</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary dark:bg-primaryDark mr-3"></div>
                    <span>Committed to creating elegant, performant digital experiences</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 md:space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/dumy.pdf"
                      target="_blank"
                      className="flex items-center bg-dark text-light px-8 py-3 rounded-lg text-lg font-medium
                        hover:bg-primary border-2 border-solid border-transparent
                        dark:bg-light dark:text-dark dark:hover:bg-primaryDark
                        md:px-6 md:py-2.5 md:text-base shadow-lg group"
                      download={true}
                    >
                      <span>Download Resume</span>
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <LinkArrow className="w-6 h-6" />
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="mailto:shitganesh4@gmail.com"
                      className="flex items-center bg-transparent text-dark dark:text-light px-8 py-3 rounded-lg text-lg font-medium
                        border-2 border-solid border-dark dark:border-light hover:bg-dark hover:text-light
                        dark:hover:bg-light dark:hover:text-dark md:px-6 md:py-2.5 md:text-base transition-colors duration-300"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="absolute right-8 bottom-8 w-24 inline-block md:hidden"
        >
          <Image
            src="/images/svgs/miscellaneous_icons_1.svg"
            alt="Light Bulb"
            className="w-full h-auto animate-pulse"
            width={96}
            height={96}
          />
        </motion.div>
      </main>
    </>
  )
}
