import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
import project1 from "../../public/images/projects/noteapp.png";
import project2 from "../../public/images/projects/weather_time.png";
import project3 from "../../public/images/projects/music.png";
import Bitcoin from "../../public/images/projects/BitcoinBaat.png";
import Shopito from "../../public/images/projects/Shopito.png";
import InterviewPro from "../../public/images/projects/interviewpro.png";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  techStack,
  techStackName,
  isInterviewPro,
}) => {
  // Determine color scheme based on project
  const isPrimary = isInterviewPro;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full relative mt-6 ${isPrimary ? 'mb-10' : 'mb-8'}`}
    >
      {/* Main container */}
      <div className={`w-full flex flex-col overflow-hidden rounded-lg shadow-md
        bg-light dark:bg-dark border ${isPrimary
          ? 'border-primary/20 dark:border-primaryDark/20'
          : 'border-blue-500/20 dark:border-blue-400/20'}`}
      >
        {/* Header ribbon */}
        <div className={`w-full py-1.5 px-3 flex justify-between items-center
          ${isPrimary
            ? 'bg-primary dark:bg-primaryDark'
            : 'bg-blue-500 dark:bg-blue-600'}`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-light dark:text-dark font-medium text-xs">Featured Project</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-light dark:bg-dark animate-pulse"></span>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full relative">
          <div className="relative overflow-hidden">
            {/* Project image */}
            <Link
              href={link}
              target="_blank"
              className="block"
            >
              <FramerImage
                src={img}
                alt={title}
                className="w-full h-[200px] sm:h-[250px] object-cover object-top"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                priority={isPrimary}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>

            {/* Project logo overlay */}
            <div className="absolute top-2 left-2 bg-dark/80 dark:bg-light/80 rounded-md p-1.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className={`w-5 h-5 rounded-sm flex items-center justify-center
                  ${isPrimary
                    ? 'bg-primary dark:bg-primaryDark'
                    : 'bg-blue-500 dark:bg-blue-600'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-light dark:text-dark">
                    {isPrimary ? (
                      <>
                        <path d="M15 10l5 5-5 5"></path>
                        <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                      </>
                    )}
                  </svg>
                </div>
                <span className="font-bold text-light dark:text-dark text-xs">
                  {isPrimary ? "InterviewPro" : "CryptoDash"}
                </span>
              </div>
            </div>

            {/* Type badge */}
            <div className="absolute bottom-2 right-2 z-10">
              <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm
                ${isPrimary
                  ? 'bg-primary/90 text-light dark:bg-primaryDark/90 dark:text-dark'
                  : 'bg-blue-500/90 text-light dark:bg-blue-600/90 dark:text-light'}`}>
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="w-full p-3 sm:p-4 flex flex-col">
          {/* Project title */}
          <Link
            href={link}
            target="_blank"
            className="group"
          >
            <h2 className={`mb-2 text-left text-lg sm:text-xl font-bold transition-colors duration-300
              ${isPrimary
                ? 'text-primary dark:text-primaryDark'
                : 'text-blue-600 dark:text-blue-400'}`}>
              {title}
            </h2>
          </Link>

          {/* Project summary */}
          <p className="mb-3 text-dark/80 dark:text-light/80 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">{summary}</p>

          {/* Tech stack */}
          <div className="mt-auto">
            <h3 className="text-dark dark:text-light font-bold text-sm mb-2">{techStack}</h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {techStackName.split(',').slice(0, 5).map((tech, index) => (
                <span key={index} className={`inline-block px-1.5 py-0.5 rounded text-xs font-medium
                  ${isPrimary
                    ? 'bg-primary/10 text-primary/90 dark:bg-primaryDark/10 dark:text-primaryDark/90'
                    : 'bg-blue-500/10 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300'}`}>
                  {tech.trim()}
                </span>
              ))}
              {techStackName.split(',').length > 5 && (
                <span className="text-xs text-dark/60 dark:text-light/60">+{techStackName.split(',').length - 5} more</span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <Link
                href={link}
                target="_blank"
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md
                  transition-colors duration-300 text-xs font-medium
                  ${isPrimary
                    ? 'bg-primary text-light dark:bg-primaryDark dark:text-dark hover:bg-primary/90 dark:hover:bg-primaryDark/90'
                    : 'bg-blue-500 text-light dark:bg-blue-600 dark:text-light hover:bg-blue-600 dark:hover:bg-blue-700'}`}
                aria-label="Visit Project"
              >
                <span>View Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>

              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className={`w-9 h-9 flex items-center justify-center rounded-md transition-colors duration-300
                    ${isPrimary
                      ? 'bg-dark/10 dark:bg-light/10 text-dark dark:text-light hover:bg-dark/20 dark:hover:bg-light/20'
                      : 'bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 dark:hover:bg-blue-400/20'}`}
                  aria-label="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article
      className="w-full flex flex-col overflow-hidden rounded-md shadow-sm bg-light dark:bg-dark
        hover:shadow-md transition-all duration-300 border border-dark/5 dark:border-light/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Project image */}
      <div className="relative overflow-hidden h-36">
        <Link
          href={link}
          target="_blank"
          className="block h-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Type badge */}
        {type && (
          <span className="absolute top-2 left-2 z-20 inline-block px-1.5 py-0.5 rounded text-xs font-medium
            bg-dark/80 text-light backdrop-blur-sm">
            {type}
          </span>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0
          group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project details */}
      <div className="p-3 flex flex-col flex-grow">
        <Link
          href={link}
          target="_blank"
          className="group/title"
        >
          <h2 className="text-base font-bold text-dark dark:text-light line-clamp-1
            group-hover/title:text-primary dark:group-hover/title:text-primaryDark transition-colors duration-300">
            {title}
          </h2>
        </Link>

        {/* Action buttons */}
        <div className="mt-2 pt-2 border-t border-dark/10 dark:border-light/10 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark
              transition-colors duration-300 text-xs font-medium"
            aria-label="Visit Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-dark dark:text-light">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>View Demo</span>
          </Link>

          {github && (
            <Link
              href={github}
              target="_blank"
              className="flex items-center gap-1 text-dark/70 dark:text-light/70 hover:text-primary
                dark:hover:text-primaryDark transition-colors duration-300 text-xs font-medium"
              aria-label="View GitHub Repository"
            >
              <GithubIcon className="w-3 h-3 text-dark dark:text-light" />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};
const Projects = () => {
  return (
    <>
      <Head>
        <title>CoderGanesh | Projects Portfolio</title>
        <meta name="description" content="Explore Ganesh's portfolio of web development and software engineering projects" />
      </Head>
      <main className="w-full mb-8 flex flex-col items-center justify-center">
        <Layout className="pt-4 sm:pt-8">
          {/* Hero section */}
          <div className="w-full mb-6 sm:mb-8 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 dark:bg-primaryDark/5 rounded-lg -z-10"></div>
            <div className="mx-auto py-4 sm:py-6 px-3 sm:px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-light mb-2">
                  My <span className="text-primary dark:text-primaryDark">Projects</span>
                </h1>
                <p className="text-dark/70 dark:text-light/70 text-sm sm:text-base mb-2">
                  Showcasing my journey through code and innovation
                </p>
              </motion.div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <section className="mb-8">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="h-0.5 w-4 bg-primary dark:bg-primaryDark mr-2"></div>
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-dark dark:text-light">
                Featured Projects
              </h2>
            </div>

            {/* InterviewPro - New Featured Project */}
            <FeaturedProject
              type="Full-Stack Application"
              title="InterviewPro - Technical Interview Platform"
              summary="A comprehensive platform for conducting seamless technical interviews with integrated video calls and live coding environments. InterviewPro streamlines the technical interview process by providing a collaborative space where interviewers and candidates can interact in real-time."
              img={InterviewPro}
              link="https://interviewpage-inky.vercel.app/home"
              github="https://github.com/Ganeshshit/interview-pro"
              techStack="Tech Stack"
              techStackName="React, Node.js, WebRTC, Socket.io, Monaco Editor, Express, MongoDB"
              isInterviewPro={true}
            />

            {/* Cryptocurrency Dashboard */}
            <FeaturedProject
              type="Data Visualization"
              title="Cryptocurrency Dashboard"
              summary="The Crypto Dashboard project provides users with a comprehensive and visually appealing platform to track and analyze cryptocurrency market data. Leveraging the power of React, React Chart Library, Material-UI, and the CoinGecko API, this dashboard empowers users to make informed decisions in the volatile world of cryptocurrencies."
              img={Bitcoin}
              link="https://deshboard-94nkyk2kw-ganeshshit.vercel.app/"
              github="https://github.com/Ganeshshit/deshboard"
              techStack="Tech Stack"
              techStackName="React, Material UI, React Charting Library, CoinGecko API"
              isInterviewPro={false}
            />
          </section>

          {/* Other Projects Section */}
          <section>
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="h-0.5 w-4 bg-primary dark:bg-primaryDark mr-2"></div>
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-dark dark:text-light">
                Other Projects
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Project
                type="E-Commerce"
                title="Shopito"
                img={Shopito}
                link="https://shopito.vercel.app/"
                github="https://github.com/Ganeshshit/Shopito"
              />

              <Project
                type="Productivity"
                title="Note App"
                img={project1}
                link="https://ganeshshit.github.io/notes/"
                github="https://github.com/Ganeshshit/notes"
              />

              <Project
                type="Utility"
                title="Weather App"
                img={project2}
                link="https://ganeshshit.github.io/weather_time1/"
                github="https://github.com/Ganeshshit/weather_time1"
              />

              <Project
                type="Entertainment"
                title="Music Player"
                img={project3}
                link="https://music-player-ganeshshit.vercel.app/"
                github="https://github.com/Ganeshshit/Music_Player"
              />
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <p className="text-dark/70 dark:text-light/70 mb-3 text-sm">
                Interested in seeing more of my work?
              </p>
              <a
                href="https://github.com/Ganeshshit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-dark text-light dark:bg-light dark:text-dark
                  hover:bg-primary dark:hover:bg-primaryDark transition-colors duration-300 font-medium text-xs sm:text-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View More on GitHub</span>
              </a>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
