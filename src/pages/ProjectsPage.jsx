import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import FilterButton from '@/components/FilterButton.jsx';
import { motion } from 'framer-motion';
import projects from '@/data/projects';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'IT Support'];

 const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project =>
        project.category.includes(activeFilter)
      );

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