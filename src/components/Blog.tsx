
import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and patterns for creating maintainable React apps.',
      date: 'Coming Soon',
      readTime: '5 min read'
    },
    {
      title: 'MERN Stack Development Journey',
      excerpt: 'My experience and lessons learned while mastering the MERN stack.',
      date: 'Coming Soon',
      readTime: '8 min read'
    },
    {
      title: 'AI Integration in Web Development',
      excerpt: 'Exploring the possibilities of AI tools in modern web development.',
      date: 'Coming Soon',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
