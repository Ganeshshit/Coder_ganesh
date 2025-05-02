import React from "react";
import { motion } from "framer-motion";

const AchievementItem = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-8 border border-solid border-dark dark:border-light rounded-2xl bg-light dark:bg-dark shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-4xl mb-4 text-primary dark:text-primaryDark">{icon}</div>
      <h3 className="text-xl font-bold text-dark dark:text-light mb-2">{title}</h3>
      <p className="text-dark/75 dark:text-light/75 text-center">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center text-dark dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl">
        Achievements
      </h2>
      
      <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
        <AchievementItem 
          icon="🏆"
          title="Hackathon Winner"
          description="First place in the 2023 Web Innovation Hackathon for developing a real-time collaborative coding platform."
        />
        
        <AchievementItem 
          icon="🌟"
          title="Featured Developer"
          description="Selected as a featured developer on the React community showcase for innovative component design."
        />
        
        <AchievementItem 
          icon="📱"
          title="Top-Rated Mobile App"
          description="Developed a mobile app that achieved a 4.8/5 rating with over 10,000 downloads on the Google Play Store."
        />
        
        <AchievementItem 
          icon="📊"
          title="Performance Optimization"
          description="Improved client website loading speed by 70% through advanced optimization techniques and modern web practices."
        />
      </div>
    </div>
  );
};

export default Achievements;
