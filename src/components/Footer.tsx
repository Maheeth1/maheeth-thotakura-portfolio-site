
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Maheeth Thotakura</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating impactful web applications and exploring new technologies.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Maheeth Thotakura. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
