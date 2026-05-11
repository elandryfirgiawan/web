const projects = [
  {
    title: 'Portfolio Website Builder',
    description: 'Developed a personal portfolio website to showcase professional experience, projects, technical skills, and achievements in web development. Built using React, Tailwind CSS, and Framer Motion with a modern responsive design and smooth animations, then deployed on Vercel for fast and reliable public access.',
    image: '/project/portofolio.png',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    category: ['Frontend'],
    github: 'https://github.com/elandryfirgiawan/web',
    demo: 'https://elandryfirgiawan-web.vercel.app/'
  },
  {
    title: 'Dashboard Admin Portal Magang',
    description: 'Developed a web-based Internship Admin Panel to manage internship participants, progress monitoring, onboarding, data export, and centralized dashboard statistics efficiently.',
    image: '/project/portal-magang-admin.png',
    tags: ['Laravel', 'Filament', 'MySQL', 'REST API'],
    category: ['Backend', 'Frontend', 'Full Stack'],
    demo: 'https://services-magang.huabao-indonesia.com/'
  },
  {
    title: 'A web-based application for classifying breast cancer',
    description: 'A web-based application for classifying breast cancer (Invasive vs Non-Invasive) using DNA sequence data (FASTA format). This system applies Markov Chain feature extraction, PCA for dimensionality reduction, and SVM for classification.',
    image: '/project/klasifikasi-kanker.jpeg',
    tags: ['Python', 'Machine Learning', 'Django'],
    category: ['Full Stack', 'Backend'],
    github: 'https://github.com/elandryfirgiawan/Klasifikasi_Kanker_Payudara'
  },
  {
    title: 'RESTfull API Huabao Recruitment app mobile',
    description: 'Built a RESTful API for a recruitment platform using Laravel, featuring secure authentication, email-based password reset, token validation, and structured JSON responses to support integration with mobile applications such as Flutter.',
    image: '/project/api-huabao-recruitment.png',
    tags: ['MySql', 'Laravel', 'RESTful API'],
    category: ['Backend'],
    github: 'https://github.com/elandryfirgiawan/recruitment-app'
  }
];

export default projects;