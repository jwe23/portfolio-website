import React from 'react';
import ProjectCard from '../components/portfolio/projectcard.tsx';
import projectsData from '../data/projectsdata.ts'; // Import external project data
import './projectspage.css';

const ProjectsPage: React.FC = () => {
  return (
    <section className="projects-page">
      <h1>Projects</h1>
      <p className="projects-description">
        Explore some of my featured projects showcasing my skills in full-stack development.
      </p>

      <div className="projects-grid" aria-label="Projects List">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
        ) : (
          <p className="no-projects-message">No projects available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
