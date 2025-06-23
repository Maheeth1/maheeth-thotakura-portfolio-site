
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm an energetic MERN stack developer with hands-on experience in React, Node.js, and REST APIs. 
              During my full-stack internship, I worked extensively with Flask, Django, and Jenkins, building 
              scalable web applications and implementing deployment automation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating impactful web applications and exploring new technologies, 
              particularly in the realm of AI tools and modern web development frameworks. 
              Always eager to learn and tackle new challenges in the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
