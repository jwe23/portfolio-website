import React, { useState, FormEvent } from 'react';
import './contactpage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p className="contact-description">
        Have a question or want to work together? Send me a message!
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name"
            required 
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email"
            required 
          />
        </div>

        {/* Message Input */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message"
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Write your message here..."
            required 
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
