
import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Maheeth_Thotakura_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">My Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-8 shadow-lg">
            {/* Mobile View - Show buttons only */}
            <div className="block md:hidden text-center space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Resume Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  View or download my resume to learn more about my experience and skills.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={handleView}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <FaExternalLinkAlt />
                    View Resume
                  </button>
                  <button 
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
                  >
                    <FaDownload />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View - Show iframe */}
            <div className="hidden md:block">
              <div className="mb-8">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[800px] lg:h-[1000px] rounded-lg border border-gray-200 dark:border-gray-700"
                  title="Resume PDF"
                ></iframe>
              </div>
              <div className="text-center">
                <button 
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  <FaDownload />
                  Download Resume (PDF)
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
