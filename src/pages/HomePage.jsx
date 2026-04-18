import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, ChevronDown, Code, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import { motion } from 'framer-motion';

const HomePage = () => {
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online store with payment integration, inventory management, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop'
    },
    {
      title: 'IT Support Dashboard',
      description: 'Comprehensive ticketing system for managing IT support requests with real-time updates.',
      tags: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    }
  ];

  const skills = [
    { icon: Code, label: 'Frontend Development', count: '8+ frameworks' },
    { icon: Wrench, label: 'IT Support', count: '1+ years' },
    { icon: Zap, label: 'Backend Development', count: '12+ technologies' }
  ];

  return (
    <>
      <Helmet>
        <title>Elandry Firigawan - Full Stack Web Developer & IT Support</title>
        <meta name="description" content="Professional portfolio showcasing full stack web development projects and IT support expertise. Specializing in React, Node.js, and modern web technologies." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ScrollToTopButton />

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1636073320770-e9e886643dc9"
              alt="Technology background with code and circuits"
              className="w-full h-full object-cover opacity-40 dark:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
          </div>

          <div className="noise-overlay"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Available for new opportunities
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                Full Stack Web Developer
                <br />
                <span className="gradient-text">& IT Support Specialist</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Building modern web applications and providing comprehensive IT solutions with 1 years of experience in development and technical support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 group min-h-[44px]">
                    Explore my work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 min-h-[44px]">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-float hidden sm:block"
            >
              <ChevronDown className="w-8 h-8 text-primary" />
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        <skill.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">{skill.label}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{skill.count}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">Featured projects</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                A selection of recent work showcasing full stack development and problem-solving skills.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 h-full shadow-sm hover:shadow-md flex flex-col">
                    <div className="relative overflow-hidden aspect-video bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/projects" className="inline-block w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/10 group min-h-[44px]">
                  View all projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground">Ready to start a project?</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need a new web application, IT support, or technical consultation, I'm here to help bring your ideas to life.
              </p>
              <Link to="/contact" className="inline-block w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px]">
                  Start a conversation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;