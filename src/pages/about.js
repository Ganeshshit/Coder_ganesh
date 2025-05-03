import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// Using direct path reference for images
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="inline-block"></span>;
};
const About = () => {
  return (
    <>
      <Head>
        <title>CoderGanesh | About Page</title>
        <meta name="description" content="Learn about Ganesh Shit, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences." />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="pb-16 text-7xl lg:!text-7xl sm:!text-6xl xs:!text-2xl sm:mb-8"
          />

          {/* Main Content Grid */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Biography Section */}
            <motion.div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-primary dark:text-primaryDark">
                Biography
              </h2>

              <div className="space-y-6">
                <p className="font-medium text-lg text-dark dark:text-light md:text-base sm:text-sm">
                  Hi, I am <span className="font-bold">Ganesh</span>, a web developer and UI/UX designer with a
                  passion for creating beautiful, functional, and user-centered
                  digital experiences. With 4 years of experience in the field, I
                  am always looking for new and innovative ways to bring my
                  clients&apos; visions to life.
                </p>

                <p className="font-medium text-lg text-dark dark:text-light md:text-base sm:text-sm">
                  I believe that design is about more than just making things look
                  pretty — it is about solving problems and creating intuitive,
                  enjoyable experiences for users.
                </p>

                <p className="font-medium text-lg text-dark dark:text-light md:text-base sm:text-sm">
                  Whether I&apos;m working on a website, mobile app, or other digital
                  product, I bring my commitment to design excellence and
                  user-centered thinking to every project I work on. I look
                  forward to the opportunity to bring my skills and passion to
                  your next project.
                </p>
              </div>

              <motion.a
                href="/Ganesh_Resume.pdf"
                target="_blank"
                className="mt-8 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume <span className="ml-1">↗</span>
              </motion.a>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="col-span-3 relative h-max xl:col-span-4 md:order-1 md:col-span-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <div className="absolute -bottom-10 -left-10 -z-10 w-[80%] h-[80%] rounded-full bg-primary/20 dark:bg-primaryDark/20 blur-2xl" />

              {/* Animated gradient background */}
              <div className="absolute inset-0 -z-20 rounded-3xl bg-gradient-to-br from-primary/10 via-light/80 to-dark/10 dark:from-primaryDark/10 dark:via-dark/80 dark:to-light/10 animate-gradient" />

              {/* Gradient overlay for the image */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/40 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image container with hover effects */}
              <motion.div
                className="group relative rounded-2xl border-2 border-solid border-dark p-6 sm:p-6 xs:p-4
                  bg-light dark:bg-dark dark:border-light overflow-hidden float-animation
                  shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/80 dark:bg-primaryDark/80 z-10
                  clip-path-triangle transform translate-x-1/4 -translate-y-1/4 opacity-80" />

                {/* Decorative frame */}
                <div className="relative p-1 xs:p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-tr from-primary to-dark dark:from-primaryDark dark:to-light">
                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden border-2 border-light dark:border-dark">
                    <Image
                      src="/images/profile/devloper.png"
                      alt="Ganesh Shit - Web Developer and UI/UX Designer"
                      className="w-full h-auto object-cover object-center transform
                        group-hover:scale-105 transition-transform duration-500"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      width={600}
                      height={800}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0
                      group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Decorative corner elements */}
                    <div className="absolute top-2 left-2 w-4 h-4 sm:top-3 sm:left-3 sm:w-6 sm:h-6 border-t-2 border-l-2 border-light/80 dark:border-dark/80" />
                    <div className="absolute top-2 right-2 w-4 h-4 sm:top-3 sm:right-3 sm:w-6 sm:h-6 border-t-2 border-r-2 border-light/80 dark:border-dark/80" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 sm:bottom-3 sm:left-3 sm:w-6 sm:h-6 border-b-2 border-l-2 border-light/80 dark:border-dark/80" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 sm:bottom-3 sm:right-3 sm:w-6 sm:h-6 border-b-2 border-r-2 border-light/80 dark:border-dark/80" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-light/90 dark:bg-dark/90 rounded-lg
                  backdrop-blur-sm transform translate-y-full opacity-0 group-hover:translate-y-0
                  group-hover:opacity-100 transition-all duration-300 border border-dark/10 dark:border-light/10">
                  <h3 className="text-base sm:text-lg font-bold text-dark dark:text-light">Ganesh Shit</h3>
                  <p className="text-xs sm:text-sm text-primary dark:text-primaryDark">Web Developer & UI/UX Designer</p>
                </div>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 grid grid-cols-3 grid-rows-3 gap-1 sm:gap-1.5 md:gap-2">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-dark dark:bg-light"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Clients */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              {/* Projects */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              {/* Experience */}
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-dark dark:text-light md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <Skills />

          {/* Education Section */}
          <Education />

          {/* Achievements Section */}
          <Achievements />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Experience Section */}
          <Experience />

          {/* Call to Action Section */}
          <CallToAction />
        </Layout>
      </main>
    </>
  );
};

export default About;
