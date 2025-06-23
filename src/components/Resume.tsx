
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    // This would normally trigger a download of the actual resume PDF
    console.log('Download resume functionality would be implemented here');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Download my complete resume or view it below
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {/* PDF Viewer Placeholder */}
          <div className="mb-8">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <FaFilePdf className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Resume PDF Viewer</h3>
              <p className="text-gray-500 mb-4">
                The actual resume PDF would be embedded here using a PDF viewer component
              </p>
              <p className="text-sm text-gray-400">
                Implementation would use react-pdf or similar library for inline viewing
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaDownload />
              Download Resume (PDF)
            </motion.button>
          </div>

          {/* Quick Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-600">Full Stack Development</p>
              <p className="text-gray-600">MERN Stack Specialist</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
              <p className="text-gray-600">React, Node.js, MongoDB</p>
              <p className="text-gray-600">Python, Flask, Django</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Hyderabad, India</p>
              <p className="text-gray-600">Available for Remote</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
