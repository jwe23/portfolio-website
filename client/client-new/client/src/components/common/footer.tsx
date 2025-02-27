import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Joseph's Portfolio. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/jwe23" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/jwe23" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
