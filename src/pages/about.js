import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import AboutPic from '../../public/images/profile/ganeshdeveloper.png'
import { inView, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springvalue = useSpring(motionValue, { duration: 3000 })
    const isInview = useInView(ref);
    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [ value, motionValue])
    //inView
    useEffect(() => {
        springvalue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springvalue, value])
    return <span ref={ref}></span>
}
const About = () => {
    return (
        <>
            <Head>
                <title>CoderGanesh | About paage</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className=' pb-16 text-7xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 '>
                        <div className=' col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className=' mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light sm:mt-5 md:mt-5 xl:mt-5'>Biography</h2>
                            <p className=' font-medium text-2xl'>Hi, I am Ganesh, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients visions to life.</p>
                            <p className=' font-medium text-2xl' >I believe that design is about more than just making things look pretty  it is about solving problems and
                                creating intuitive, enjoyable experiences for users. </p>
                            <p className=' font-medium text-2xl'>Whether I amm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2   border-spacing-9 border-dotted  border-red-300  border-t-amber-200 p-8 w-60 bg-light pb-6 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ml-9'>
                            <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-black  dark:bg-light' />
                            <Image src={AboutPic} alt='ganesh' className=' w-full h-auto rounded-2xl' />
                        </div>
                        <div className=' col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 sm:mt-5 md:mt-5 xl:mt-5'>
                            <div className=' flex flex-col items-end justify-center xl:items-center'>
                                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl mt-5'>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className=' text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>
                            <div className=' flex flex-col items-end justify-center  xl:items-center'>
                                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className=' text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
                            </div>
                            <div className=' flex flex-col items-end justify-center  xl:items-center'>
                                <span className=' inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={1} />+
                                </span>
                                <h2 className=' text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default About
