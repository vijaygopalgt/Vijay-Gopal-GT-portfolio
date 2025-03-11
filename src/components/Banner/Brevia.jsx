import React from 'react';
import Logo from "../../assets/BREVIA LOGO.png";
import { motion } from 'framer-motion';
import { slideUp } from '../Utility/Animation';

const Banner = () => {
  return (
    <div className='container mx-auto px-8 py-20 text-white'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10'>

        {/* Logo Image - Small Size */}
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src={Logo} 
          alt='Vijay Gopal' 
          className='w-24 h-24 rounded-full shadow-md object-cover'
        />

        {/* Internship Details */}
        <motion.div 
          variants={slideUp(0.3)} 
          initial='initial' 
          whileInView='animate' 
          className='text-center md:text-left max-w-xl'
        >
          <h2 className='text-2xl font-bold text-[#ffff] mb-2'>
  Internship at Brevia Studios
</h2>
          <p className='text-gray-300 leading-relaxed'>
            I completed a <strong>Full Stack Development Internship</strong> at <strong>Brevia Studios</strong> from <em>October 2024 to March 2025</em>. <br />
            During this time, I worked on building responsive and scalable web applications using <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Firebase</strong>. I also gained hands-on experience with <strong>MongoDB</strong>, <strong>REST APIs</strong>, <strong>JWT-based Authentication</strong>, <strong>Framer Motion</strong> for animations, <strong>Tailwind CSS</strong> for styling, and <strong>Git/GitHub</strong> for version control. <br /><br />
            This internship helped me strengthen my understanding of real-world development workflows, deployment strategies, and building full-stack apps from scratch.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Banner;
