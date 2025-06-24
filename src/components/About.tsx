
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Globe, Wrench, GitBranch } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', icon: Code2, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'Express.js', icon: Code2, color: 'text-yellow-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'Python', icon: Code2, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
    { name: 'Git', icon: GitBranch, color: 'text-gray-500' },
    { name: 'HTML/CSS', icon: Code2, color: 'text-purple-500' },
    { name: 'Tailwind CSS', icon: Wrench, color: 'text-teal-500' },
    { name: 'Database Management', icon: Database, color: 'text-orange-500' },
    { name: 'Google Cloud', icon: Globe, color: 'text-blue-500' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-500' }
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
              I’m <span className='text-purple-600 font-semibold'>Maheeth Thotakura</span>, a Full Stack Developer skilled in the MERN stack with a strong focus on building scalable backends and responsive, user-friendly interfaces. My projects include a movie streaming app, a real-time video streaming system using sockets, and interactive web-based games — all designed with performance and clean architecture in mind.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I'm particularly interested in blending web development with practical AI solutions to automate workflows and enhance user experience. Outside of coding, I enjoy exploring new technologies and working on side projects that push my learning forward.
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
