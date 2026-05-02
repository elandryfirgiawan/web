import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaServer,
  FaTools
} from 'react-icons/fa';

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiRedis,
  SiGraphql,
  SiNginx,
  SiLinux,
  SiPython,
} from 'react-icons/si';
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact, level: 92 },
      { name: 'Vue.js', icon: FaVuejs, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'TailwindCSS', icon: SiTailwindcss, level: 90 },
      { name: 'Framer Motion', icon: FaReact, level: 83 }, // fallback terbaik
      { name: 'Next.js', icon: SiNextdotjs, level: 87 }
    ]
  },

  {
    title: 'Backend Development',
    icon: FaServer,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90 },
      { name: 'Express', icon: SiExpress, level: 88 },
      { name: 'Python', icon: SiPython, level: 82 },
      { name: 'REST APIs', icon: FaServer, level: 91 },
      { name: 'GraphQL', icon: SiGraphql, level: 78 },
      { name: 'Microservices', icon: FaServer, level: 80 }
    ]
  },

  {
    title: 'Database & Storage',
    icon: SiMysql,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 87 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'Redis', icon: SiRedis, level: 81 },
      { name: 'Firebase', icon: SiFirebase, level: 83 },
      { name: 'MySQL', icon: SiMysql, level: 79 },
      { name: 'Prisma ORM', icon: SiPrisma, level: 84 }
    ]
  },

  {
    title: 'DevOps & Tools',
    icon: FaDocker,
    skills: [
      { name: 'Git & GitHub', icon: FaGitAlt, level: 93 },
      { name: 'Docker', icon: FaDocker, level: 86 },
      { name: 'AWS', icon: FaServer, level: 82 },
      { name: 'CI/CD', icon: FaTools, level: 80 },
      { name: 'Nginx', icon: SiNginx, level: 77 },
      { name: 'Linux', icon: SiLinux, level: 85 }
    ]
  },

  {
    title: 'IT Support',
    icon: FaTools,
    skills: [
      { name: 'Windows Server', icon: FaServer, level: 88 },
      { name: 'Network Administration', icon: FaServer, level: 86 },
      { name: 'Active Directory', icon: FaServer, level: 84 },
      { name: 'Troubleshooting', icon: FaTools, level: 91 },
      { name: 'System Security', icon: FaTools, level: 83 },
      { name: 'Help Desk', icon: FaTools, level: 89 }
    ]
  },

  {
    title: 'Web Technologies',
    icon: FaHtml5,
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 93 },
      { name: 'JavaScript', icon: FaJs, level: 91 },
      { name: 'Responsive Design', icon: FaCss3Alt, level: 92 },
      { name: 'Web Performance', icon: FaReact, level: 87 },
      { name: 'Accessibility', icon: FaHtml5, level: 85 }
    ]
  }
];

export default skillCategories;
