import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/elandryfirgiawan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/elandry-firgiawan/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:elandryfirgiawan@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg text-primary-foreground">
                <img className="w-full h-full object-cover rounded-xl" src="./src/assets/image/logoelicon.png" alt="Profile" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Elandry Firigiawan
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full stack web developer specializing in modern web technologies and IT support solutions.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block text-foreground">Quick links</span>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                About
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Projects
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block text-foreground">Connect</span>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elandry Firgiawan. Built with React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;