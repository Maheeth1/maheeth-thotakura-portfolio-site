
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaEnvelope } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Avatar on Top */}
        <div className="block lg:hidden">
          {/* Avatar - Mobile Top */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-12"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 mb-7">
              <Tilt>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <img
                    src="/avatar.svg"
                    alt="Avatar"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>

          {/* Content - Mobile Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-2"
            >
              Maheeth Thotakura
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium px-2"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{' '}
              – MERN & AI Enthusiast
            </motion.h2>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700 mx-4"
            >
              "Still figuring things out — and that's okay"
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <FaArrowDown />
                Jump to Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-blue-600 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center hover:border-transparent text-sm sm:text-base"
              >
                <FaEnvelope />
                Contact Me
              </button>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-gray-200 dark:border-gray-700 text-sm"
            >
              📍 Hyderabad, India
            </motion.p>
          </motion.div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Maheeth Thotakura
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{' '}
              – MERN & AI Enthusiast
            </motion.h2>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 italic max-w-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            >
              "Still figuring things out — and that's okay 💬"
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
              >
                <FaArrowDown />
                Jump to Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center hover:border-transparent"
              >
                <FaEnvelope />
                Contact Me
              </button>
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-gray-500 dark:text-gray-400 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-2 inline-block border border-gray-200 dark:border-gray-700"
            >
              📍 Hyderabad, India
            </motion.p>
          </motion.div>

          {/* Avatar - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 mb-12 pb-12">
              <Tilt>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <img
                    src="/avatar.svg"
                    alt="Avatar"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
