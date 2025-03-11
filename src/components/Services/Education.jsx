import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../Utility/Animation';

const Services = () => {
  return (
    <div className="container mx-auto px-8 py-12">

      {/* Header */}
      <div className='py-20 flex flex-col md:flex-row justify-between items-center'>
        <motion.h1 
          variants={slideUp(0.2)} 
          initial='initial' 
          whileInView='animate' 
          className='text-white text-4xl xl:text-5xl font-bold max-w-[450px]'
        >
          My Academic <span className='text-gray-300 text-lg font-semibold underline tracking-wide'>Journey</span>
        </motion.h1>

        <motion.p 
          variants={slideUp(0.4)} 
          initial='initial' 
          whileInView='animate' 
          className='hidden md:block text-gray-300 leading-relaxed text-right max-w-[400px]'
        >
          From school to post graduation, <br />
          I’ve consistently worked to build a solid foundation in tech.
        </motion.p>
      </div>

      {/* Education Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

        {/* 12th */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='max-w-[300px] mx-auto space-y-3'
        >
          <p className='text-gray-300 text-lg font-semibold underline tracking-wide'>12th Grade</p>
          <p className='text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600'>
            Completed at <strong>Govt. Higher Secondary School</strong> under State Board – <strong>2020 Passed Out</strong>.
          </p>
        </motion.div>

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='max-w-[300px] mx-auto space-y-3'
        >
          <p className='text-gray-300 text-lg font-semibold underline tracking-wide'>Bachelor of Computer Applications</p>
          <p className='text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600'>
            Studied at <strong>Dr.M.G.R. Educational and Research Institute</strong> – <strong>2023 Passed Out</strong>.
          </p>
        </motion.div>

        {/* MCA */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='max-w-[300px] mx-auto space-y-3'
        >
          <p className='text-gray-300 text-lg font-semibold underline tracking-wide'>Master of Computer Applications</p>
          <p className='text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600'>
            Pursued at <strong>SRM University Vadapalani City Campus</strong> – <strong>2025 Passed Out</strong>.
          </p>
        </motion.div>

        {/* Core Java */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='max-w-[300px] mx-auto space-y-3'
        >
          <p className='text-gray-300 text-lg font-semibold underline tracking-wide'>Core Java</p>
          <p className='text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600'>
            Completed training from <strong>NEO ORANGE TECHNOLOGIES</strong>, focused on OOPs, Data Types, Loops, and Exception Handling. <br />
            <span className="text-sm text-gray-400 italic">Duration: Aug 2022 – Nov 2023 (3 Months)</span>
          </p>
        </motion.div>

        {/* Advanced Java */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='max-w-[300px] mx-auto space-y-3'
        >
          <p className='text-gray-300 text-lg font-semibold underline tracking-wide'>Advanced Java</p>
          <p className='text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600'>
            Completed training from <strong>NEO ORANGE TECHNOLOGIES</strong>, gained expertise in JDBC, Servlets, JSP, and dynamic web app development with backend integrations. <br />
            <span className="text-sm text-gray-400 italic">Duration: Dec 2022 – Feb 2023 (3 Months)</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;
