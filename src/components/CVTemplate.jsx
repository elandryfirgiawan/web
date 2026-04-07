import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

const CVTemplate = ({ data, id }) => {
  if (!data) return null;

  const { personalInfo, summary, experience, education, skills, certifications, languages } = data;

  return (
    <div id={id} className="cv-container p-8 md:p-12 bg-card text-foreground">
      {/* Header Section */}
      <header className="cv-header">
        <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl font-medium text-primary mb-4">
          {personalInfo.title}
        </h2>
        
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-muted-foreground">
          {personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center gap-1.5">
              <Github className="w-4 h-4" />
              <span>{personalInfo.github}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {summary && (
        <section className="cv-section">
          <h3 className="cv-section-title">Professional Summary</h3>
          <p className="text-sm leading-relaxed text-foreground/90">
            {summary}
          </p>
        </section>
      )}

      {/* Work Experience */}
      {experience && experience.length > 0 && (
        <section className="cv-section">
          <h3 className="cv-section-title">Experience</h3>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="text-base font-bold text-foreground">{job.position}</h4>
                  <span className="cv-entry-meta text-primary">{job.duration}</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  {job.company}
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 cv-entry-description">
                  {job.description.map((desc, i) => (
                    <li key={i} className="pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="cv-section">
          <h3 className="cv-section-title">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="cv-entry">
                <div className="cv-entry-header">
                  <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                  <span className="cv-entry-meta text-primary">{edu.year}</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {edu.school}
                </div>
                {edu.details && (
                  <p className="cv-entry-description">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && Object.keys(skills).length > 0 && (
        <section className="cv-section">
          <h3 className="cv-section-title">Skills</h3>
          <div className="cv-skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="cv-skill-category">
                <h4 className="text-sm font-bold text-foreground mb-1">{category}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skillList.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <section className="cv-section mb-0">
            <h3 className="cv-section-title">Certifications</h3>
            <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-foreground/90">
              {certifications.map((cert, index) => (
                <li key={index} className="pl-1">{cert}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <section className="cv-section mb-0">
            <h3 className="cv-section-title">Languages</h3>
            <ul className="space-y-1 text-sm text-foreground/90">
              {languages.map((lang, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-muted-foreground">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default CVTemplate;