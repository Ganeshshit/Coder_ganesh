import React from "react"
import Layout from "./Layout"
import Link from "next/link"
import Contact from "./contact"

const Footer = () => {
    return (
        <footer className="w-f border-t-2 border-solid border-dark font-medium text-lg 
         dark:text-light dark:border-light sm:text-base
        ">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span >{new Date().getFullYear()}&copy;</span>
                <div className=" flex items-center lg:py-2">
                Build With <span className=" text-primary text-2xl px-1 dark:text-primaryDark">
                    &hearts;
                    </span> 
                    <Link href="https:/s/coderganesh.com" className=" underline
                    underline-offset-2" target={"_blank"}>coderGanesh</Link>
                </div>
                <Link href="https://ganeshshit.github.io/new-resume/"  className=" underline
                    underline-offset-2">Say help</Link>
            </Layout>
        </footer>
    )
}

export default Footer
