import React from 'react';
import Logo from "../../assets/surya engg logo.webp";
import { motion } from 'framer-motion';
import { slideUp } from '../Utility/Animation';

const Banner2 = () => {
  return (
    <div className='container mx-auto px-8 py-20'>
      <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-10'>

        {/* Logo Image - Small Size on Right */}
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src={Logo} 
          alt='Surya Engineering Logo' 
          className='w-24 h-24 rounded-full shadow-md object-cover'
        />

        {/* Internship Details */}
        <motion.div 
          variants={slideUp(0.3)} 
          initial='initial' 
          whileInView='animate' 
          className='text-center md:text-left max-w-xl text-white'
        >
          <h2 className='text-2xl font-bold text-[#ffff] mb-2'>
  Internship at Surya Engineering
</h2>

          <p className='text-gray-300'>
            I completed a <strong>System Engineer Internship</strong> at <strong>Surya Engineering</strong> from 
            <span className='italic'> January 2024 to June 2024</span>. During this internship, I managed <strong>network infrastructure, system monitoring, and technical troubleshooting</strong>. 
            I also <strong>designed and developed their official website</strong>, helping improve the company's digital presence.
          </p>

          <div className='mt-4'>
            <h3 className='font-semibold'>Tech Stack Used:</h3>
            <ul className='list-disc list-inside text-gray-400 text-sm'>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Responsive Design using Flexbox and Grid</li>
              <li>Basic Hosting & Deployment</li>
              <li>Git & GitHub for version control</li>
              <li>Website Performance Optimization</li>
            </ul>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Banner2;
