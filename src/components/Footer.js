import React from "react"
import Layout from "./Layout"
import Link from "next/link"
import { motion } from "framer-motion"
import { GithubIcon, LinkedInIcon } from "./Icons"

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-base
         dark:text-light dark:border-light sm:text-sm
        ">
            <Layout className="py-8 flex flex-col items-center justify-center">
                <div className="flex items-center justify-between w-full mb-4 lg:flex-col lg:gap-3">
                    <div className="flex items-center">
                        <span className="text-dark/75 dark:text-light/75">&copy; {new Date().getFullYear()}</span>
                        <span className="mx-1">|</span>
                        <Link
                            href="/"
                            className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                        >
                            CoderGanesh
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 lg:py-2">
                        <motion.a
                            href="https://github.com/ganeshshit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/ganesh-shit-957246243/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <LinkedInIcon />
                        </motion.a>
                    </div>

                    <div className="flex items-center">
                        <Link
                            href="https://ganeshshit.github.io/new-resume/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                        >
                            Resume
                        </Link>
                        <span className="mx-2">|</span>
                        <Link
                            href="mailto:shitganesh4@gmail.com"
                            className="hover:text-primary dark:hover:text-primaryDark transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="text-center text-dark/75 dark:text-light/75 text-sm">
                    Built with <span className="text-primary text-lg px-1 dark:text-primaryDark">&hearts;</span>
                    using Next.js, React, and Tailwind CSS
                </div>
            </Layout>
        </footer>
    )
}

export default Footer
