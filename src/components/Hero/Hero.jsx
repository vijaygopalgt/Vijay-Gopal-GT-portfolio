import React from 'react';
import Logo from "../../assets/1.jpeg";
import { motion } from 'framer-motion';
import { slideUp } from '../Utility/Animation';
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <div className='container mx-auto px-8 pt-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>

        {/* Text Content */}
        <div className='space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>

          <motion.h1
            variants={slideUp(0.2)}
            initial="hidden"
            animate="visible"
            className='text-white text-4xl xl:text-5xl font-bold'
          >
            HI I’M VIJAY GOPAL <br />
            <span className='text-gray-300 text-lg font-semibold underline tracking-wide'>
              FULL STACK DEVELOPER
            </span>
          </motion.h1>

          <motion.p
            variants={slideUp(0.4)}
            initial="hidden"
            animate="visible"
            className='text-gray-300 leading-relaxed'
          >
            Developer with a strong foundation in both frontend and backend technologies. I’m passionate about building dynamic, scalable, and user-friendly web applications with clean, efficient code and intuitive UI design.
            <br /><br />
            My experience spans JavaScript, Java, MongoDB, Angular, React, Node.js, and Firebase—allowing me to work across the full stack with ease. I enjoy crafting modern interfaces while ensuring seamless backend performance.
            <br /><br />
            Continuously learning and staying current with new tools and frameworks, I thrive on solving complex problems and building impactful digital solutions.
          </motion.p>

          <a
            href="/VijayGopalGTResume.pdf"
            download
            className="mt-4 inline-flex items-center gap-2  text-white px-6 py-2 rounded-full font-medium] bg-[#475569] hover:bg-[#334155]

"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>

        </div>

        {/* Hero Image */}
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={Logo}
            alt='Vijay Gopal'
            className='w-[80%] md:max-w-[400px] xl:w-[600px] rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
