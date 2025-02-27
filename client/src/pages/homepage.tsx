import React from 'react';
import projectsData from '../data/projectsdata.ts';
import ProjectCard from '../components/portfolio/projectcard.tsx';
import './homepage.css';

const HomePage: React.FC = () => {
  // Filter only featured projects (Modify your data to include a "featured" flag)
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Joseph, a full-stack developer passionate about building modern web applications.
        </p>
        <a href="/projects" className="btn">
          View Projects
        </a>
      </section>

      {/* About Me Section */}
      <section className="intro">
        <h2>About Me</h2>
        <p>
          With a BS in Computer Science from FSU and a love for innovative technology, I specialize in creating scalable and maintainable solutions using modern web technologies.
        </p>
        <a href="/about" className="btn">
          Learn More
        </a>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-previews">
          {featuredProjects.length > 0 ? (
            featuredProjects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))
          ) : (
            <p>No featured projects available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
