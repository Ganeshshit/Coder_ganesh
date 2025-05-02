import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={`${className} relative group px-4 py-2 rounded-md transition-all duration-300
        ${isActive
          ? 'text-primary dark:text-primaryDark font-bold bg-light/50 dark:bg-dark/50 shadow-sm'
          : 'text-dark dark:text-light hover:bg-light/30 dark:hover:bg-dark/30'}`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-primary absolute left-0 bottom-0
            group-hover:w-full transition-[width] ease duration-300
            ${isActive ? 'w-full' : 'w-0'}
            dark:bg-primaryDark
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <motion.button
      className={`${className} relative group text-xl font-medium my-2 px-6 py-3 rounded-lg w-full
        ${isActive
          ? 'bg-primary/20 dark:bg-primaryDark/20 text-light dark:text-dark border-l-4 border-primaryDark dark:border-primary font-bold'
          : 'text-light/90 dark:text-dark/90 hover:bg-light/10 dark:hover:bg-dark/10 border-l-4 border-transparent'}`}
      onClick={handleClick}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center">
        {/* Icon based on the page */}
        <span className="mr-3 text-primaryDark dark:text-primary">
          {href === "/" && "🏠"}
          {href === "/about" && "👤"}
          {href === "/projects" && "💻"}
          {href === "/articals" && "📝"}
        </span>

        <span>{title}</span>

        {isActive && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="ml-2 w-2 h-2 rounded-full bg-primaryDark dark:bg-primary"
          />
        )}
      </div>
    </motion.button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 20 }}
      className="w-full px-32 py-4 font-medium flex items-center justify-between
        dark:text-light bg-light/80 dark:bg-dark/80 backdrop-blur-md
        sticky top-0 z-30 shadow-md border-b border-dark/5 dark:border-light/5
        lg:px-16 md:px-12 sm:px-8"
    >
      {/* Mobile Menu Button */}
      <motion.button
        className="hidden lg:flex flex-col justify-center items-center z-50 p-2.5 rounded-lg
          bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20
          transition-colors border border-dark/20 dark:border-light/20 shadow-md"
        onClick={handleClick}
        aria-label="Toggle Menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Menu</span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-full my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </motion.button>

      {/* Desktop Navigation */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-3 text-lg bg-light/30 dark:bg-dark/30 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/articals" title="Articles" />
        </nav>

        <nav className="flex items-center justify-center gap-4 bg-light/30 dark:bg-dark/30 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
          <motion.a
            href="https://x.com/shit8_shit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark shadow-md"
            aria-label="X (Twitter)"
          >
            <i className="text-sm font-extrabold">X</i>
          </motion.a>

          <motion.a
            href="https://github.com/ganeshshit"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark shadow-md"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ganesh-shit-957246243/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark shadow-md"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
          </motion.a>

          <motion.button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1.5 shadow-md
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              border-2 border-solid border-transparent hover:border-dark dark:hover:border-light
              transition-all duration-300
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark w-5 h-5" />
            ) : (
              <MoonIcon className="fill-dark w-5 h-5" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 40 }}
          className="w-full h-screen flex flex-col justify-center items-center fixed top-0 left-0 z-40
            bg-dark/90 dark:bg-light/90 backdrop-blur-md"
        >
          {/* Mobile Menu Container */}
          <div className="w-[90%] max-w-md flex flex-col items-center bg-dark/95 dark:bg-light/95
            rounded-2xl py-10 px-6 shadow-2xl border border-dark/10 dark:border-light/10 relative">

            {/* Mobile Logo */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <Logo isMobile={true} />
            </div>

            <div className="w-full text-center mb-6 mt-4">
              <h2 className="text-light dark:text-dark text-xl font-bold">Menu</h2>
              <div className="h-1 w-12 bg-primary dark:bg-primaryDark mx-auto mt-1 rounded-full"></div>
            </div>

            <nav className="flex items-center flex-col justify-center w-full">
              <CustomMobileLink
                href="/"
                title="Home"
                toggle={handleClick}
                className="w-full"
              />
              <CustomMobileLink
                href="/about"
                title="About"
                toggle={handleClick}
                className="w-full"
              />
              <CustomMobileLink
                href="/projects"
                title="Projects"
                toggle={handleClick}
                className="w-full"
              />
              <CustomMobileLink
                href="/articals"
                title="Articles"
                toggle={handleClick}
                className="w-full"
              />
            </nav>

          <nav className="flex items-center justify-center gap-4 flex-wrap mt-8 bg-dark/50 dark:bg-light/50 px-6 py-3 rounded-full">
            <motion.a
              href="https://x.com/shit8_shit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-light text-dark dark:bg-dark dark:text-light shadow-md"
              aria-label="X (Twitter)"
            >
              <i className="text-base font-extrabold">X</i>
            </motion.a>

            <motion.a
              href="https://github.com/ganeshshit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-light text-dark dark:bg-dark dark:text-light shadow-md"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ganesh-shit-957246243/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-light text-dark dark:bg-dark dark:text-light shadow-md"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
                // Don't close the menu when switching theme
              }}
              className={`flex items-center justify-center rounded-full p-2 shadow-md
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                border-2 border-solid border-transparent hover:border-dark dark:hover:border-light
                transition-all duration-300
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark w-5 h-5" />
              ) : (
                <MoonIcon className="fill-dark w-5 h-5" />
              )}
            </motion.button>
          </nav>

          </div> {/* End of Mobile Menu Container */}

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-light/20 dark:bg-dark/20 text-light dark:text-dark"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Close menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
        </motion.div>
      ) : null}

      {/* Desktop Logo */}
      <div className="absolute left-[50%] top-1/2 -translate-y-1/2 translate-x-[-50%] z-20">
        <Logo />
      </div>
    </motion.header>
  );
};
export default NavBar;
