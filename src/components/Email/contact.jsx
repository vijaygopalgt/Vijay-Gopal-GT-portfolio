// src/components/Email.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { slideUp } from '../Utility/Animation';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Email = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // Replace with your actual EmailJS service ID
      'your_template_id',    // Replace with your actual Template ID
      e.target,
      'your_public_key'      // Replace with your actual EmailJS public key
    ).then(() => {
      alert("✅ Thank you! Your message has been sent.");
      e.target.reset();
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please check the console.");
    });
  };

  return (
    <div className='bg-[#0a1f44] text-white'>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container text-center space-y-10 py-12 px-6"
      >
        <div className='space-y-4'>
          <motion.p variants={slideUp(0.2)} initial='initial' whileInView='animate' className='text-3xl md:text-4xl font-bold'>
            Let’s Connect
          </motion.p>
          <motion.p variants={slideUp(0.4)} initial='initial' whileInView='animate' className='text-gray-300'>
            I’d love to hear from you! Drop your email and message — I’ll get back to you.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form 
          variants={slideUp(0.5)} 
          initial='initial' 
          whileInView='animate' 
          onSubmit={sendEmail}
          className='flex flex-col items-center gap-4 max-w-xl mx-auto'
        >
          <input 
            type="email" 
            name="user_email"
            required 
            placeholder="Your Email" 
            className="w-full px-4 py-2 rounded focus:outline-none shadow-sm border border-gray-600 bg-[#1c2634] text-white placeholder-gray-400"
          />
          <textarea 
            name="message" 
            required 
            placeholder="Your Message" 
            rows="5"
            className="w-full px-4 py-2 rounded focus:outline-none shadow-sm border border-gray-600 bg-[#1c2634] text-white placeholder-gray-400"
          ></textarea>
          <button 
            type="submit"
            className='bg-[#B95134] text-white hover:bg-black hover:text-white py-2 px-6 rounded shadow-md transition-all'
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div 
          variants={slideUp(0.6)} 
          initial='initial' 
          whileInView='animate' 
          className='flex justify-center gap-6 text-2xl pt-6'
        >
          <a href="https://instagram.com/_vj_gt" target="_blank" rel="noreferrer" className='hover:text-[#B95134]'>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/vijay-gopal-513777242" target="_blank" rel="noreferrer" className='hover:text-[#B95134]'>
            <FaLinkedin />
          </a>
          <a href="https://wa.me/919791078378?text=Hi%20Vijay%2C%20I%20visited%20your%20portfolio!" target="_blank" rel="noreferrer" className='hover:text-[#B95134]'>
            <FaWhatsapp />
          </a>
          <a href="https://github.com/vijaygopalgt" target="_blank" rel="noreferrer" className='hover:text-[#B95134]'>
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Email;
