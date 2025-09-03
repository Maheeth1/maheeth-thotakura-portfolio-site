import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaUser, FaCog, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'OralVis Healthcare App',
      description: 'A full-stack dental scan management portal with secure, role-based access for technicians and dentists.',
      tech: ['React', 'JavaScript', 'Node.js', 'TailwindCSS', 'Express', 'SQLite'],
      github: 'https://github.com/Maheeth1/oralvis-dentalScan-app',
      liveDemo: 'https://oralvis-healthcare.vercel.app/',
      image: 'https://res.cloudinary.com/deaiaaudy/image/upload/v1756878366/login-page_wuopz3.png?w=500&h=300&fit=crop&crop=center',
      expandedDetails: {
        role: 'Full Stack Developer',
        duration: '3 months',
        features: [
          'Role-based authentication system',
          'Secure dental scan management',
          'Real-time data synchronization',
          'Responsive dashboard interface'
        ],
        challenges: 'Implemented secure file handling and role-based access control for sensitive medical data.',
        impact: 'Streamlined dental workflow for 50+ healthcare professionals'
      }
    },
    {
      title: 'FlickNest',
      description: 'React-based movie streaming app with React Player and carousels for seamless video browsing.',
      tech: ['React', 'JavaScript', 'React Player', 'CSS3'],
      github: 'https://flicknest.ccbp.tech/',
      liveDemo: 'https://flicknest.ccbp.tech/',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop&crop=center',
      expandedDetails: {
        role: 'Frontend Developer',
        duration: '2 months',
        features: [
          'Interactive video player',
          'Dynamic content carousels',
          'Search and filter functionality',
          'Responsive design system'
        ],
        challenges: 'Optimized video streaming performance and implemented smooth carousel interactions.',
        impact: 'Enhanced user engagement with intuitive movie browsing experience'
      }
    },
    {
      title: 'WebSocket Video Streaming',
      description: 'Python + OpenCV-based real-time peer video application with live streaming capabilities.',
      tech: ['Python', 'OpenCV', 'WebSocket', 'Real-time'],
      github: 'https://github.com/Maheeth1/WebSocketBasedVideoStreaming',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center',
      expandedDetails: {
        role: 'Backend Developer',
        duration: '6 weeks',
        features: [
          'Real-time video processing',
          'WebSocket communication',
          'Multi-peer connectivity',
          'Low-latency streaming'
        ],
        challenges: 'Achieved sub-100ms latency for real-time video communication using optimized protocols.',
        impact: 'Enabled seamless peer-to-peer video communication for remote collaboration'
      }
    },
    {
      title: 'Connect Four Game',
      description: 'JavaFX desktop game with smooth animations and interactive gameplay mechanics.',
      tech: ['Java', 'JavaFX', 'Animations', 'Desktop'],
      github: 'https://github.com/Maheeth1/connectfour',
      image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&h=300&fit=crop&crop=center',
      expandedDetails: {
        role: 'Game Developer',
        duration: '4 weeks',
        features: [
          'Interactive game board',
          'Smooth piece animations',
          'AI opponent logic',
          'Score tracking system'
        ],
        challenges: 'Implemented efficient game state management and smooth JavaFX animations.',
        impact: 'Created engaging gameplay experience with polished visual effects'
      }
    }
  ];

  // Duplicate projects for infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const container = scrollContainerRef.current;
    
    if (!container) return;

    // Initialize scroll position to middle for seamless infinite scroll
    const cardWidth = 320 + 32; // card width + gap
    container.scrollLeft = cardWidth * projects.length;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Convert vertical scroll to horizontal
      const scrollAmount = e.deltaY;
      container.scrollLeft += scrollAmount;

      // Handle infinite scroll
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll - 10) {
        // Reset to beginning when scrolled near end
        container.scrollLeft = cardWidth * projects.length;
      } else if (currentScroll <= 10) {
        // Jump to middle when scrolled near start
        container.scrollLeft = cardWidth * projects.length;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [projects.length]);

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden lg:block relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
          >
            {duplicatedProjects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="relative flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index % projects.length) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-80 h-96 relative"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onFocus={() => setHoveredProject(index)}
                  onBlur={() => setHoveredProject(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${project.title}`}
                >
                  {/* Main Project Card */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full cursor-pointer focus:ring-2 focus:ring-primary focus:outline-none relative z-10"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub /> GitHub
                        </a>
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200 text-sm font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaPlay /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Expanded Details Card - Fixed positioning to prevent overlap */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-full ml-4 w-80 h-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
                        style={{ 
                          position: 'fixed',
                          transform: 'translateX(0)',
                          left: 'auto',
                          right: '2rem'
                        }}
                      >
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <FaUser className="text-primary text-lg" />
                            </div>
                            <div>
                              <h4 className="font-bold text-card-foreground">{project.expandedDetails.role}</h4>
                              <p className="text-sm text-muted-foreground">{project.expandedDetails.duration}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                              <FaStar className="text-primary" /> Key Features
                            </h5>
                            <ul className="space-y-1">
                              {project.expandedDetails.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-semibold text-card-foreground mb-2 flex items-center gap-2">
                              <FaCog className="text-primary" /> Challenge
                            </h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.expandedDetails.challenges}
                            </p>
                          </div>

                          <div className="mt-auto">
                            <h5 className="font-semibold text-card-foreground mb-2">Impact</h5>
                            <p className="text-sm text-accent font-medium">
                              {project.expandedDetails.impact}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200 text-sm font-medium"
                      >
                        <FaPlay /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;