import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, Briefcase, GraduationCap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ScrollToTopButton from '@/components/ScrollToTopButton.jsx';
import { motion } from 'framer-motion';
import fotoCV from "../assets/image/fotocv.jpeg";

const AboutPage = () => {
  const timeline = [
    {
      year: '2025 - Present',
      title: 'Full Stack Developer',
      company: 'Huabao Indonesia PT.Bousuo Taman Indusrial investment Group',
      description: 'At PT Baoshuo Taman Industri Investment Group (Huabao Indonesia), I expanded my career as a Software Engineer by working on large-scale HRIS, legal management, and internship systems. This role strengthened my experience in building enterprise-level solutions, supporting digital transformation, and collaborating across departments to improve operational efficiency.',
      icon: Briefcase
    },
    {
      year: 'Mei 2025 – Jul 2025',
      title: 'Full Stack Developer',
      company: 'SMP 2 Tanantovea School',
      description: 'At SMP 2 Tanantovea, I gained experience in developing and managing educational web platforms remotely. I was responsible for ensuring the school’s website could support information delivery and digital presence effectively, while improving accessibility and user experience for students, teachers, and the public.',
      icon: Briefcase
    },
    {
      year: 'Sep 2024 – Oct 2024',
      title: 'Fullstack Web Developer',
      company: 'Badan Pemeriksa Keuangan Perwakilan Sulawesi Tengah (BPK SULTENG)',
      description: 'During my internship at Badan Pemeriksa Keuangan (BPK) Perwakilan Sulawesi Tengah, I started my professional journey by developing a digital guest management system. This experience introduced me to real-world problem solving, where I helped transform manual administrative processes into a more efficient web-based service for public access.',
      icon: Wrench
    },
    {
      year: '2021 - 2025',
      title: 'Bachelor of Mathematics',
      company: 'Tadulako University',
      description: 'Graduated with honors. Focused on software engineering, database systems, and network administration.',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional level certification'
    },
    {
      icon: Target,
      title: '15+ Production Applications',
      description: 'Successfully deployed and maintained'
    },
    {
      icon: Award,
      title: 'CompTIA A+ & Network+',
      description: 'IT support certifications'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Elandry Firgiawan</title>
        <meta name="description" content="Learn about my journey as a full stack web developer and IT support specialist. Over 5 years of experience building modern web applications and solving technical challenges." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <ScrollToTopButton />

        <section className="pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-12 md:mb-16">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                    <img className="w-full h-full object-cover rounded-2xl" src={fotoCV} alt="Profile" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    Full Stack Developer
                  </Badge>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-foreground" style={{ letterSpacing: '-0.02em' }}>
                    Building digital solutions that make a difference
                  </h1>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      With over 1 year of experience in web development and IT support, I specialize in creating robust, scalable applications that solve real-world problems. My journey began in IT support, where I developed a deep understanding of system architecture and user needs.
                    </p>
                    <p>
                      This foundation led me to full stack development, where I combine technical expertise with a user-first approach. I've worked on projects ranging from e-commerce platforms to enterprise dashboards, always focusing on clean code, performance, and maintainability.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or helping others solve technical challenges. I believe in continuous learning and sharing knowledge with the developer community.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">Key achievements</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Milestones and certifications that showcase my expertise and commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                        <achievement.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">{achievement.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16 text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">Experience timeline</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                My professional journey from Software Engineer
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-6 md:pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="pb-6 md:pb-8">
                    <Badge variant="outline" className="mb-2 border-primary/20 text-primary bg-primary/5">
                      {item.year}
                    </Badge>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const Wrench = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default AboutPage;