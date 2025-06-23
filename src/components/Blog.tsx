
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowRight, FaClock } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable MERN Applications',
      excerpt: 'Best practices and patterns for creating maintainable full-stack applications with the MERN stack.',
      date: 'Coming Soon',
      readTime: '5 min read',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'AI Tools in Modern Development',
      excerpt: 'How artificial intelligence is revolutionizing the way we write code and solve problems.',
      date: 'Coming Soon',
      readTime: '7 min read',
      category: 'AI & Development',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center'
    },
    {
      title: 'Deployment Automation with CI/CD',
      excerpt: 'Streamlining your deployment process with Jenkins and modern DevOps practices.',
      date: 'Coming Soon',
      readTime: '6 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop&crop=center'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog & Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing thoughts on full-stack development, AI tools, and the journey of continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group">
                  Read More
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
