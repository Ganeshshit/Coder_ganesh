import React from "react"
import { motion } from "framer-motion"

const Layout = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full h-full inline-block z-0 bg-light p-32
                dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8
                ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Layout
