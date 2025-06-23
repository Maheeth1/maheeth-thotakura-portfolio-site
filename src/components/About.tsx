
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Wrench, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: Code2, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-500' },
    { name: 'Flask/Django', icon: Wrench, color: 'text-red-500' },
    { name: 'Jenkins', icon: GitBranch, color: 'text-orange-500' }
  ];

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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I'm passionate about creating impactful web applications and exploring new technologies, 
              particularly in the realm of AI tools and modern web development frameworks. 
              Always eager to learn and tackle new challenges in the ever-evolving tech landscape.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <skill.icon className={`w-8 h-8 ${skill.color} mb-2`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
