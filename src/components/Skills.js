import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y,className }) => {
    return (
        <motion.div className='flex  items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark 
     cursor-pointer
     py-3 px-6 
     dark:text-dark dark:bg-lime-400
      '
    
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }} 
        >
            {name}
        </motion.div>

    )
}





const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64  w-full text-center md:text-6xl md:mt-32 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>Skills</h2>
            <div className=' w-full flex h-screen relative items-center  justify-center rounded-full bg-circularLight  dark:bg-circularDark md:hidden xl:hidden sm:hidden'>
                <motion.div className='flex  items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark 
                cursor-pointer 
                p-8
                 
                '
                    whileHover={{ scale: 1.05 }}

                >
                </motion.div>
                <Skill name="HTML" x="-20vw" y='2vw' />
                <Skill name="CSS" x="-5vw" y='-10vw' />
                <Skill name="Javascript" x="20vw" y='6vw' />
                <Skill name="ReactJs" x="0vw" y='12vw' />
                <Skill name="NextJs" x="-20vw" y='-15vw' />
                <Skill name="Bootstrap" x="15vw" y='-12vw' />
                <Skill name="MongoDB" x="28vw" y='-5vw' />
                <Skill name="Nodejs" x="0vw" y='-20vw' />
                <Skill name="PHP" x="-25vw" y='18vw' />
                <Skill name="WEB" x="-30vw" y='0vw'  className=' bg-green-400'/>

            </div>
        </>
    )
}
export default Skills   