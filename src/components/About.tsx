
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTypescript } from 'react-icons/si';

const About = () => {
  const skills = [
    { icon: FaReact, name: 'React', color: 'text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { icon: SiExpress, name: 'Express.js', color: 'text-gray-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
    { icon: FaPython, name: 'Python', color: 'text-blue-400' },
    { icon: FaDatabase, name: 'REST APIs', color: 'text-purple-500' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm an energetic MERN stack developer with extensive experience in React, Node.js, and REST APIs. 
              My passion lies in building scalable web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              During my full-stack internship, I gained valuable experience working with Flask, Django, and Jenkins, 
              which expanded my understanding of deployment automation and backend technologies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm particularly enthusiastic about AI tools and how they can enhance development workflows. 
              I love exploring new technologies and turning ideas into functional, beautiful applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <skill.icon className={`text-4xl mx-auto mb-3 ${skill.color}`} />
                <p className="text-sm font-medium text-gray-700">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
