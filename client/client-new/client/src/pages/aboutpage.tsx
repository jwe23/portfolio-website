import React from 'react';
import './aboutpage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About Me</h1>
        <p>Hi, I'm Joseph—a passionate full-stack developer dedicated to building modern web applications.</p>
      </section>

      <section className="about-content">
        <p>
          I hold a <strong>B.S. in Computer Science</strong> from FSU and specialize in full-stack development using
          technologies like <strong>React, Node.js, and TypeScript</strong>.
        </p>
        <p>
          My focus is on building <strong>scalable</strong> and <strong>maintainable</strong> software solutions while
          staying up-to-date with the latest innovations in web development and AI.
        </p>
      </section>

      <section className="about-footer">
        <p>
          Welcome to my portfolio! Feel free to explore my <a href="/projects">projects</a> and reach out if you’d like to
          collaborate.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
