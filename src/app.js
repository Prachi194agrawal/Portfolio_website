import React, { useState, useEffect } from 'react';
import './style.css';

// Header/Navigation Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__brand">
          <a href="#home">Your Name</a>
        </div>
        <button className="nav__toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav__list">
            <li><a href="#home" className="nav__link">Home</a></li>
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#skills" className="nav__link">Skills</a></li>
            <li><a href="#experience" className="nav__link">Experience</a></li>
            <li><a href="#projects" className="nav__link">Projects</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <div>
            <h1 className="hero__title">Hi, I'm Your Name</h1>
            <h2 className="hero__subtitle">Full Stack Developer</h2>
            <p className="hero__description">
              I build modern web applications with a focus on user experience and clean code.
            </p>
            <div className="hero__buttons">
              <a href="#contact" className="btn btn--primary">Contact Me</a>
              <a href="#projects" className="btn btn--secondary">View Projects</a>
            </div>
          </div>
          <div className="hero__avatar">
            <div className="avatar">YN</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I am a passionate developer with experience in building modern web applications.
              I love solving complex problems and creating intuitive user interfaces.
            </p>
          </div>
          <div className="about__info">
            <div className="info-item">
              <h4>Education</h4>
              <p className="text-secondary">Your University</p>
              <p>Bachelor's in Computer Science</p>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p className="text-secondary">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
    'Backend': ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB'],
    'Tools': ['Git', 'Docker', 'AWS', 'VS Code', 'Figma']
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Company Name',
      duration: '2020 - Present',
      achievements: [
        'Led development of key features',
        'Mentored junior developers',
        'Improved application performance by 40%'
      ]
    },
    // Add more experiences as needed
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const projects = [
    {
      title: 'Project Name',
      date: '2023',
      description: 'A brief description of the project and its impact.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      links: {
        github: '#',
        live: '#'
      }
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.github} className="btn btn--secondary">GitHub</a>
                <a href={project.links.live} className="btn btn--primary">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-item">
              <strong>Location</strong>
              <p>Your City, Country</p>
            </div>
            <div className="social-links">
              {/* <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a> */}
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--full-width">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;