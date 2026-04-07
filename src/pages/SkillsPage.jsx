import React from 'react';
import { Helmet } from 'react-helmet';
import { Code, Database, Wrench, Package, Server, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import SkillCard from '@/components/SkillCard.jsx';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', icon: Code, level: 92 },
        { name: 'Vue.js', icon: Code, level: 85 },
        { name: 'TypeScript', icon: Code, level: 88 },
        { name: 'TailwindCSS', icon: Code, level: 90 },
        { name: 'Framer Motion', icon: Code, level: 83 },
        { name: 'Next.js', icon: Code, level: 87 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Server, level: 90 },
        { name: 'Express', icon: Server, level: 88 },
        { name: 'Python', icon: Server, level: 82 },
        { name: 'REST APIs', icon: Server, level: 91 },
        { name: 'GraphQL', icon: Server, level: 78 },
        { name: 'Microservices', icon: Server, level: 80 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', icon: Database, level: 87 },
        { name: 'MongoDB', icon: Database, level: 85 },
        { name: 'Redis', icon: Database, level: 81 },
        { name: 'Firebase', icon: Database, level: 83 },
        { name: 'MySQL', icon: Database, level: 79 },
        { name: 'Prisma ORM', icon: Database, level: 84 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Package,
      skills: [
        { name: 'Git & GitHub', icon: Package, level: 93 },
        { name: 'Docker', icon: Package, level: 86 },
        { name: 'AWS', icon: Package, level: 82 },
        { name: 'CI/CD', icon: Package, level: 80 },
        { name: 'Nginx', icon: Package, level: 77 },
        { name: 'Linux', icon: Package, level: 85 }
      ]
    },
    {
      title: 'IT Support',
      icon: Wrench,
      skills: [
        { name: 'Windows Server', icon: Wrench, level: 88 },
        { name: 'Network Administration', icon: Wrench, level: 86 },
        { name: 'Active Directory', icon: Wrench, level: 84 },
        { name: 'Troubleshooting', icon: Wrench, level: 91 },
        { name: 'System Security', icon: Wrench, level: 83 },
        { name: 'Help Desk', icon: Wrench, level: 89 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'HTML5', icon: Globe, level: 95 },
        { name: 'CSS3', icon: Globe, level: 93 },
        { name: 'JavaScript', icon: Globe, level: 91 },
        { name: 'Responsive Design', icon: Globe, level: 92 },
        { name: 'Web Performance', icon: Globe, level: 87 },
        { name: 'Accessibility', icon: Globe, level: 85 }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skills - DevPortfolio</title>
        <meta name="description" content="Comprehensive overview of my technical skills including frontend development, backend technologies, databases, DevOps tools, and IT support expertise." />
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
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                Skills & expertise
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A comprehensive overview of my technical skills across web development, IT support, and modern technologies.
              </p>
            </motion.div>

            <div className="space-y-16">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCard
                        key={skillIndex}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Always learning</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring serverless architectures, AI integration, and advanced DevOps practices to stay at the forefront of web development.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;