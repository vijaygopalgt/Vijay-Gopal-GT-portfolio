import React, { useState } from 'react';
import Collab from "../../assets/collab.jpg";
import CRM from "../../assets/medical crm logo.webp";
import TestDrive from "../../assets/service crm lodo.png";
import Unreal from "../../assets/vihicle simulation.jpg";
import { motion } from 'framer-motion';
import { slideUp } from '../Utility/Animation';

const projectData = [
  {
    title: 'Collaborative Whiteboard',
    image: Collab,
    tech: 'React, Node.js, Socket.IO, Firebase',
    duration: '2.5 Months',
    doneAt: 'During PG (MCA) 2024',
    description: `A real-time collaborative whiteboard where multiple users can draw and brainstorm ideas together. Built using React for the frontend and Socket.IO for live communication. Firebase was used for user authentication and persistent storage.`,
    usecase: `Ideal for remote teams and online education tools.`,
  },
  {
    title: 'Medical CRM',
    image: CRM,
    tech: 'Angular, Node.js, MongoDB, Firebase',
    duration: '2 Months',
    doneAt: 'Internship at Brevia Studios 2025',
    description: `A CRM built specifically for medical sales reps to track leads, appointments, doctor interactions, and follow-ups. Angular handled dynamic frontend interactions, while MongoDB and Node.js powered the backend.`,
    usecase: `Helps sales teams efficiently manage client relationships and schedule visits.`,
  },
  {
    title: 'Test Drive CRM',
    image: TestDrive,
    tech: 'React, Express.js, MongoDB',
    duration: '1.5 Months',
    doneAt: 'Internship at Brevia Studios 2025',
    description: `A lightweight CRM for managing test drive bookings in automobile showrooms. Built with a MERN stack and includes scheduling, status tracking, and lead conversion analysis.`,
    usecase: `Optimizes vehicle test drive management for better customer experience.`,
  },
  {
    title: 'Vehicle Simulation in Unreal Engine',
    image: Unreal,
    tech: 'Unreal Engine 5, Blueprint Scripting',
    duration: '4.5 Months',
    doneAt: 'During UG (BCA) 2023',
    description: `A realistic vehicle simulation showcasing advanced dynamics, terrain interaction, and camera control. Built using Unreal Engine 5 and Blueprint scripting without code.`,
    usecase: `Useful for demoing vehicle physics or creating immersive driving experiences.`,
  }
];

const Cards = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className='bg-[#1c2634] backdrop-blur-sm'>
      <div className="container py-14 px-6 mx-auto">
        <h2 className='text-3xl font-bold text-center text-white mb-10'>Projects</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              variants={slideUp(0.3 + index * 0.2)}
              initial='initial'
              whileInView='animate'
              className='bg-[#0a1f44] shadow-xl rounded-xl px-5 py-6 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-16 h-16 rounded-full object-cover border border-white p-1 shadow-md' 
              />
              <p className='text-xl font-semibold text-white'>{project.title}</p>
              <p className='text-sm text-gray-300 leading-relaxed line-clamp-3'>{project.description}</p>
              <button
                onClick={() => setOpenModal(index)}
                className='text-blue-300 underline text-sm hover:text-blue-400 transition'
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
{openModal !== null && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-5">
    <div className="bg-[#1c2634] max-w-md w-full rounded-lg p-6 relative space-y-4 overflow-y-auto max-h-[90vh] text-white">
      <button
        onClick={() => setOpenModal(null)}
        className="absolute top-2 right-3 text-xl text-gray-300 hover:text-white"
      >
        &times;
      </button>

      <img 
        src={projectData[openModal].image} 
        alt={projectData[openModal].title}
        className="w-full max-w-xs mx-auto rounded-md shadow-md border border-white"
      />

      <div className="space-y-2">
        <h2 className='text-2xl font-bold text-center text-white'>{projectData[openModal].title}</h2>
        <p><span className="font-semibold text-gray-300">Time Taken:</span> {projectData[openModal].duration}</p>
        <p><span className="font-semibold text-gray-300">Technologies:</span> {projectData[openModal].tech}</p>
        <p><span className="font-semibold text-gray-300">Description:</span> {projectData[openModal].description}</p>
        <p><span className="font-semibold text-gray-300">Done At:</span> {projectData[openModal].doneAt}</p>
        <p><span className="font-semibold text-gray-300">Use Case:</span> {projectData[openModal].usecase}</p>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Cards;
