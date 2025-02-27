import React from 'react';
import { Link } from 'react-router-dom';
import './projectcard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h2 className="project-card-title">{title}</h2>
      <p className="project-card-description">{description}</p>
      <Link to={link} className="project-card-link">
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
