import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import FilterButton from '@/components/FilterButton.jsx';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'IT Support'];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment processing, inventory management, order tracking, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'Full Stack',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'IT Support Dashboard',
      description: 'Comprehensive ticketing system for managing IT support requests with real-time updates, priority queuing, and automated notifications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      category: 'IT Support',
      github: 'https://github.com'
    },
    {
      title: 'Portfolio Website Builder',
      description: 'Drag-and-drop website builder allowing users to create professional portfolios without coding. Features template library and custom domain support.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'Frontend',
      demo: 'https://example.com'
    },
    {
      title: 'Network Monitoring Tool',
      description: 'Real-time network monitoring solution with automated alerts, performance metrics, and detailed reporting for IT infrastructure management.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Python', 'Flask', 'Docker', 'Grafana'],
      category: 'IT Support',
      github: 'https://github.com'
    },
    {
      title: 'REST API Gateway',
      description: 'Scalable API gateway with authentication, rate limiting, request logging, and microservices orchestration. Handles 10k+ requests per second.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      tags: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      category: 'Backend',
      github: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with team workspaces, real-time updates, file attachments, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Material-UI'],
      category: 'Frontend',
      demo: 'https://example.com'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Projects - Elandry Firgiawan</title>
        <meta name="description" content="Explore my portfolio of web development projects including full stack applications, frontend interfaces, backend systems, and IT support solutions." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ScrollToTopButton />

        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                My projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of web applications, tools, and solutions I've built using modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  label={category}
                  isActive={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                />
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;