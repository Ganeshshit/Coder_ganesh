import React from "react"
import { motion } from "framer-motion"

// Skill icons
const SkillIcon = ({ icon }) => (
  <div className="text-2xl mr-3">{icon}</div>
);

// Skill data with icons
const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90, icon: "🌐", color: "from-orange-500 to-red-500" },
      { name: "CSS", level: 85, icon: "🎨", color: "from-blue-500 to-blue-600" },
      { name: "JavaScript", level: 85, icon: "📜", color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", level: 75, icon: "🔷", color: "from-blue-600 to-blue-800" },
      { name: "React.js", level: 90, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 80, icon: "▲", color: "from-gray-700 to-black" },
      { name: "Tailwind CSS", level: 85, icon: "🌊", color: "from-cyan-400 to-cyan-600" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢", color: "from-green-500 to-green-700" },
      { name: "Express.js", level: 75, icon: "🚂", color: "from-gray-600 to-gray-800" },
      { name: "MongoDB", level: 70, icon: "🍃", color: "from-green-600 to-green-800" },
      { name: "Firebase", level: 75, icon: "🔥", color: "from-yellow-500 to-orange-500" },
      { name: "REST API", level: 85, icon: "🔌", color: "from-purple-500 to-purple-700" },
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 85, icon: "📊", color: "from-red-500 to-red-700" },
      { name: "UI/UX Design", level: 75, icon: "🎭", color: "from-pink-500 to-purple-500" },
      { name: "Responsive Design", level: 90, icon: "📱", color: "from-indigo-500 to-indigo-700" },
      { name: "Performance Optimization", level: 70, icon: "⚡", color: "from-amber-500 to-amber-700" },
    ]
  }
];

// Skill bar component for the detailed view
const SkillBar = ({ skill, delay }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl mr-2">{skill.icon}</span>
          <h3 className="text-lg font-medium text-dark dark:text-light">{skill.name}</h3>
        </div>
        <span className="text-sm font-semibold text-primary dark:text-primaryDark">{skill.level}%</span>
      </div>
      <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
        />
      </div>
    </motion.div>
  )
}

// Category section for the detailed view
const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-primary dark:text-primaryDark inline-block border-b-2 border-primary dark:border-primaryDark pb-1">
        {category}
      </h3>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} delay={idx} />
        ))}
      </div>
    </motion.div>
  )
}

// Main Skills component
const Skills = () => {
  return (
    <section className="mt-32 mb-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl font-bold text-dark dark:text-light mb-4 md:text-5xl sm:text-4xl xs:text-3xl">
          My <span className="text-primary dark:text-primaryDark">Skills</span>
        </h2>
        <p className="text-xl text-dark/70 dark:text-light/70 max-w-2xl mx-auto md:text-lg sm:text-base">
          A showcase of my technical expertise and proficiency in various technologies
        </p>
      </motion.div>

      {/* Desktop Skills Showcase - Only visible on large screens */}
      <div className="w-full relative lg:hidden md:hidden sm:hidden xs:hidden my-16">
        {/* Modern Grid Layout */}
        <div className="relative mx-auto max-w-6xl">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-light dark:bg-dark rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-dark dark:text-light" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 dark:bg-primaryDark/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primaryDark/10 dark:bg-primary/10 rounded-full blur-3xl"></div>

          {/* Main content container */}
          <div className="relative grid grid-cols-12 gap-8 p-12 rounded-3xl bg-gradient-to-br from-light/90 to-light/95 dark:from-dark/90 dark:to-dark/95 shadow-2xl border border-dark/5 dark:border-light/5 backdrop-blur-sm">

            {/* Left column - Frontend */}
            <div className="col-span-4 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary dark:bg-primaryDark text-light flex items-center justify-center rounded-lg mr-2">
                    <span className="text-sm">FE</span>
                  </span>
                  Frontend
                </h3>
                <div className="space-y-3">
                  {skillsData[0].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 rounded-xl bg-light dark:bg-dark shadow-lg border border-dark/5 dark:border-light/5 group
                        hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent dark:hover:from-primaryDark/10 dark:hover:to-transparent
                        transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background decoration */}
                      <div className="absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-primary/5 dark:bg-primaryDark/5 group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Skill icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br ${skill.color} text-light
                        shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 border border-white/20`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>

                      {/* Skill details */}
                      <div className="flex-1 z-10">
                        <h4 className="font-semibold text-dark dark:text-light text-lg">{skill.name}</h4>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Skill level */}
                      <div className="ml-3 z-10">
                        <span className="text-sm font-bold text-primary dark:text-primaryDark">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Center column - Visual element */}
            <div className="col-span-4 flex flex-col items-center justify-center relative">
              <div className="relative w-full aspect-square">
                {/* Decorative elements */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primaryDark/5 dark:from-primaryDark/20 dark:to-primary/5 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Central visual element */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative w-72 h-72">
                    {/* Outer decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dark/10 dark:border-light/10"></div>

                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-2 rounded-full border-2 border-dashed border-primary/30 dark:border-primaryDark/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Circular progress bars */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute inset-0 rounded-full border-4 border-transparent
                          ${i === 0 ? 'border-t-primary dark:border-t-primaryDark border-r-primary/70 dark:border-r-primaryDark/70' : ''}
                          ${i === 1 ? 'border-b-primary/80 dark:border-b-primaryDark/80 border-l-primary/50 dark:border-l-primaryDark/50' : ''}
                          ${i === 2 ? 'border-r-primary/30 dark:border-r-primaryDark/30 border-l-primary/30 dark:border-l-primaryDark/30' : ''}
                        `}
                        style={{
                          borderWidth: 4 - i,
                          opacity: 1 - (i * 0.15),
                          transform: `scale(${1 - i * 0.05})`,
                        }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{
                          duration: 20 + (i * 10),
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}

                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-44 h-44 rounded-full bg-gradient-to-br from-primary to-primary/80 dark:from-primaryDark dark:to-primaryDark/80
                          flex flex-col items-center justify-center text-light shadow-xl border-2 border-white/20 dark:border-dark/20
                          backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          boxShadow: [
                            "0px 0px 25px rgba(182,62,150,0.3)",
                            "0px 0px 50px rgba(182,62,150,0.5)",
                            "0px 0px 25px rgba(182,62,150,0.3)"
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className="text-5xl mb-2">💻</span>
                        <span className="font-bold text-xl tracking-wide">Full Stack</span>
                        <span className="font-bold text-xl tracking-wide">Developer</span>
                        <div className="w-16 h-1 bg-light/50 rounded-full my-1"></div>
                        <span className="text-sm font-medium mt-1">2+ Years</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating tech icons */}
                {[
                  { icon: "⚛️", x: -100, y: -80, delay: 0 },
                  { icon: "🌐", x: 100, y: -60, delay: 0.5 },
                  { icon: "🔷", x: 120, y: 40, delay: 1 },
                  { icon: "🟢", x: -90, y: 80, delay: 1.5 },
                  { icon: "🔌", x: 0, y: 120, delay: 2 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-10 h-10 rounded-full bg-light dark:bg-dark shadow-lg flex items-center justify-center text-xl border border-dark/10 dark:border-light/10"
                    style={{ left: "50%", top: "50%" }}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: item.x,
                      y: item.y,
                    }}
                    transition={{
                      delay: item.delay,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 50
                    }}
                    animate={{
                      y: [item.y, item.y + 10, item.y]
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right column - Backend & Tools */}
            <div className="col-span-4 flex flex-col">
              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary dark:bg-primaryDark text-light flex items-center justify-center rounded-lg mr-2">
                    <span className="text-sm">BE</span>
                  </span>
                  Backend
                </h3>
                <div className="space-y-3">
                  {skillsData[1].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: -5 }}
                      className="flex items-center p-4 rounded-xl bg-light dark:bg-dark shadow-lg border border-dark/5 dark:border-light/5 group
                        hover:bg-gradient-to-l hover:from-primary/10 hover:to-transparent dark:hover:from-primaryDark/10 dark:hover:to-transparent
                        transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background decoration */}
                      <div className="absolute -left-6 -bottom-6 w-12 h-12 rounded-full bg-primary/5 dark:bg-primaryDark/5 group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Skill icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br ${skill.color} text-light
                        shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 border border-white/20`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>

                      {/* Skill details */}
                      <div className="flex-1 z-10">
                        <h4 className="font-semibold text-dark dark:text-light text-lg">{skill.name}</h4>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Skill level */}
                      <div className="ml-3 z-10">
                        <span className="text-sm font-bold text-primary dark:text-primaryDark">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Others */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-primary dark:text-primaryDark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary dark:bg-primaryDark text-light flex items-center justify-center rounded-lg mr-2">
                    <span className="text-sm">T&O</span>
                  </span>
                  Tools & Others
                </h3>
                <div className="space-y-3">
                  {skillsData[2].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ x: -5 }}
                      className="flex items-center p-4 rounded-xl bg-light dark:bg-dark shadow-lg border border-dark/5 dark:border-light/5 group
                        hover:bg-gradient-to-l hover:from-primary/10 hover:to-transparent dark:hover:from-primaryDark/10 dark:hover:to-transparent
                        transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background decoration */}
                      <div className="absolute -left-6 -bottom-6 w-12 h-12 rounded-full bg-primary/5 dark:bg-primaryDark/5 group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Skill icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br ${skill.color} text-light
                        shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 border border-white/20`}>
                        <span className="text-2xl">{skill.icon}</span>
                      </div>

                      {/* Skill details */}
                      <div className="flex-1 z-10">
                        <h4 className="font-semibold text-dark dark:text-light text-lg">{skill.name}</h4>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Skill level */}
                      <div className="ml-3 z-10">
                        <span className="text-sm font-bold text-primary dark:text-primaryDark">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Skills View (visible only on mobile/tablet) */}
      <div className="hidden lg:block md:block sm:block xs:block mt-16 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-bold text-dark dark:text-light mb-4 md:text-2xl sm:text-xl">
            My <span className="text-primary dark:text-primaryDark">Technical Skills</span>
          </h3>
          <p className="text-lg text-dark/70 dark:text-light/70 max-w-2xl mx-auto md:text-base sm:text-sm">
            A comprehensive overview of my expertise in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Compact Skills Grid View (alternative view) */}
      <div className="hidden lg:block md:hidden sm:hidden xs:hidden mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center text-dark dark:text-light">
          Skills <span className="text-primary dark:text-primaryDark">at a Glance</span>
        </h3>
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {skillsData.flatMap(category =>
            category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`py-4 px-4 rounded-lg font-semibold text-light shadow-lg
                  bg-gradient-to-r ${skill.color} flex flex-col items-center justify-center
                  border border-white/10 dark:border-dark/10 h-24`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span className="text-2xl mb-2">{skill.icon}</span>
                <span className="text-center text-sm">{skill.name}</span>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
export default Skills