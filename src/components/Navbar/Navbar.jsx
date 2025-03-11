import React from 'react';
import { motion } from "framer-motion";
import { slideBottom } from '../Utility/Animation';

const NavbarLinks = [
  { id: 1, title: "About", link: "#about" },
  { id: 2, title: "Education", link: "#education" },
  { id: 3, title: "Projects", link: "#projects" },
  { id: 4, title: "Work Experience", link: "#experience" },
  { id: 6, title: "Contact", link: "#contact" }
];

const Navbar = () => {
  return (
    <motion.div
    variants={slideBottom(0.2)}
    initial='initial'
    animate='animate'
    className='py-4 container mx-auto px-8 flex flex-col md:flex-row items-center justify-center gap-4 bg-[#0a1f44]'
  >
  
      {/* Link Section */}
      <div>
        <ul className='flex flex-wrap justify-center gap-3 xl:gap-7'>
          {NavbarLinks.map((link) => (
            <li key={link.id}>
              <a
                className='hover:text-[#B95134] uppercase text-sm xl:text-base transition duration-300 text-white'
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
