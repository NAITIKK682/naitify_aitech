import React, { useState } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const projectLinks = [
    { title: "Responsive Tour and Travel Website", githubUrl: "https://github.com/NAITIKK682/Responsive-Tour-And-Travel-website", liveUrl: "https://naitikk682.github.io/Responsive-Tour-And-Travel-website/" },
    { title: "Fake News Detection", githubUrl: "https://github.com/NAITIKK682/Fake-News-Detection-Flask", liveUrl: null },
    { title: "EHR System with AI Chatbot", githubUrl: "https://github.com/NAITIKK682/EHR-SYSTEM", liveUrl: "https://ehr-system-2.onrender.com" },
    { title: "Vehicle Price Prediction", githubUrl: "https://github.com/NAITIKK682/vehicle-price-prediction", liveUrl: null },
    { title: "Heart Disease Prediction", githubUrl: "https://github.com/NAITIKK682/Heart-Disease-Prediction", liveUrl: null },
    { title: "Fraud Transaction Detection", githubUrl: "https://github.com/NAITIKK682/Fraud-Transaction-Detection", liveUrl: null }
  ];

  const projects = [
    {
      title: "Responsive Tour and Travel Website",
      description: "A modern, responsive website showcasing destinations and bookings. Built with HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/src/assets/images/tourtravel.png",
      category: "Web Development",
      githubUrl: "https://github.com/NAITIKK682/Responsive-Tour-And-Travel-website",
      liveUrl: "https://naitikk682.github.io/Responsive-Tour-And-Travel-website/"
    },
    {
      title: "Fake News Detection",
      description: "An NLP + ML project to classify news as real or fake. Built with Python, scikit-learn, and Flask with a clean UI.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Flask", "Python", "ML", "NLP"],
      image: "/src/assets/images/fakenews.png",
      category: "ML",
      githubUrl: "https://github.com/NAITIKK682/Fake-News-Detection-Flask",
      liveUrl: null
    },
    {
      title: "EHR System with AI Chatbot",
      description: "Electronic Health Record system with integrated AI chatbot for patient assistance and medical data management.",
      technologies: ["Flask", "SQLite", "Python", "AI Chatbot", "HTML", "CSS", "JS"],
      image: "/src/assets/images/ehrsystem.png",
      category: "AI",
      githubUrl: "https://github.com/NAITIKK682/EHR-SYSTEM",
      liveUrl: "https://ehr-system-2.onrender.com"
    },
    {
      title: "Vehicle Price Prediction",
      description: "ML model to predict used car prices using features like brand, year, mileage, and condition. Built with Flask and scikit-learn.",
      technologies: ["Python", "ML", "Pandas", "Regression", "Scikit-learn"],
      image: "/src/assets/images/vehicleprice.png",
      category: "ML",
      githubUrl: "https://github.com/NAITIKK682/vehicle-price-prediction",
      liveUrl: null
    },
    {
      title: "Heart Disease Prediction",
      description: "ML-based system to predict likelihood of heart disease using patient health metrics. Built with Flask and scikit-learn.",
      technologies: ["Python", "ML", "Pandas", "Flask", "Scikit-learn"],
      image: "/src/assets/images/heart-disease.png",
      category: "ML",
      githubUrl: "https://github.com/NAITIKK682/Heart-Disease-Prediction",
      liveUrl: null
    },
    {
      title: "Fraud Transaction Detection",
      description: "AI-powered system to detect fraudulent financial transactions using classification and anomaly detection models.",
      technologies: ["Python", "Imbalanced Data", "ML", "Flask", "Scikit-learn"],
      image: "/src/assets/images/fraud-detection.png",
      category: "AI",
      githubUrl: "https://github.com/NAITIKK682/Fraud-Transaction-Detection",
      liveUrl: null
    }
  ];

  const categories = ['All Projects', 'Web Development', 'ML', 'AI', 'IoT'];

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">Featured Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A collection of my most impactful projects, highlighting my experience in web development, machine learning, and IoT. These projects demonstrate my ability to design, develop, and deploy real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <AnimatedSection className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "primary" : "outline"}
              className="mb-2 transition-all duration-300"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={index}
              className="h-full"
              delay={index * 0.1}
              direction={index % 2 === 0 ? "up" : "down"}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700" variant="elevated">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-primary dark:bg-primary-light text-white dark:text-dark px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`flex gap-2 ${project.liveUrl ? '' : 'justify-center'}`}>
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          Live Demo
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className={project.liveUrl ? "flex-1" : "w-full"}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        GitHub
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Metrics Section */}
      <AnimatedSection
        className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 py-16"
        direction="fade"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key metrics showcasing my development journey and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies Used" },
              { value: "1000+", label: "Hours of Code" }
            ].map((metric, index) => (
              <Card key={index} className="p-6" variant="glass">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-3">
                  {metric.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>


      {/* CTA Section */}
      <AnimatedSection
        className="bg-gradient-to-r from-primary to-secondary text-white py-16 rounded-3xl mx-4"
        direction="scale"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to collaborate? Contact me</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's work together on your next project and bring innovative ideas to life.
          </p>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;