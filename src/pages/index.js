import Head from "next/head"
import { Inter } from "next/font/google"
import { Component } from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
// import profilePic from "../../public/images/profile/ganehsdeveloper2.png";
// import profilePic from "../../public/images/profile/developer.png";
import profilePic from "../../public/images/profile/devloper.png";



import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import { motion } from "framer-motion"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "@/components/Icons"
import HireMe from "@/components/HireMe"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen
       dark:text-light
      " >
        <Layout className=" pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=" w-1/2 md:w-full" >
              <Image src={profilePic} alt="ganesh Shit" className=" w-full/2 h-auto lg:hidden md:inline-block md:w-full " />
            </div>
            <div className=" w-1/2 flex flex-col items-center self-center xs:w-full ">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left
              xl:text-5xl lg:!text-center lg:!text-7xl sm:!text-4xl xs:!text-xl
              
              "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs text-left">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/dumy.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg  text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:px-4 md:text-base
                  "
                  download={true}
                >Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:shitganesh4@gmail.com"
                  className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className=" absolute right-8  bottom-8 w-24 inline-block md:hidden">
          <Image src={lightBulb} alt="ganeshshit" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
