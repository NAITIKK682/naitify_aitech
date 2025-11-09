import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const services = [
    {
      category: '🤖 Artificial Intelligence Solutions',
      items: [
        {
          icon: '🤖',
          title: 'AI-Powered Chatbots',
          description: 'Smart chatbots for FAQs, lead generation, and user guidance.'
        },
        {
          icon: '🧠',
          title: 'AI Learning & Assistant Tools',
          description: 'Code explanation, debugging, and project guidance.'
        },
        {
          icon: '📝',
          title: 'AI-Powered Content Assistants',
          description: 'Generate blogs, reports, and posts instantly.'
        },
        {
          icon: '🎯',
          title: 'Predictive Analytics & Forecasting',
          description: 'Analyze and predict trends for smarter decisions.'
        },
        {
          icon: '⚡',
          title: 'AI Model & API Integration',
          description: 'Integrate ChatGPT, Gemini, or custom AI APIs.'
        }
      ]
    },
    {
      category: '🌐 Web & App Development',
      items: [
        {
          icon: '🌐',
          title: 'AI-Ready Business Websites',
          description: 'Responsive, full-stack AI-powered websites.'
        },
        {
          icon: '💻',
          title: 'Web Development',
          description: 'Portfolio, Resume, School, and Startup sites.'
        },
        {
          icon: '📱',
          title: 'Mobile App Development',
          description: 'Android/iOS apps using React Native or Flutter.'
        },
        {
          icon: '🛍️',
          title: 'E-Commerce & Booking Platforms',
          description: 'Websites with product & payment systems.'
        },
        {
          icon: '🧩',
          title: 'Landing Page Development',
          description: 'Fast SEO-optimized landing pages.'
        },
        {
          icon: '🧾',
          title: 'Website Maintenance & Hosting Setup',
          description: 'Keep websites secure and updated.'
        }
      ]
    },
    {
      category: '⚙️ Automation & Data Intelligence',
      items: [
        {
          icon: '⚙️',
          title: 'Workflow Automation',
          description: 'Automate reports, emails, and data sync.'
        },
        {
          icon: '📊',
          title: 'Data Insights & Visualization',
          description: 'Create dashboards and visual reports.'
        },
        {
          icon: '🔍',
          title: 'SEO & Web Analytics',
          description: 'Optimize visibility and traffic analytics.'
        },
        {
          icon: '📈',
          title: 'CRM Integration',
          description: 'Automate client tracking and communication.'
        },
        {
          icon: '🗂️',
          title: 'Form & Report Automation',
          description: 'AI-based document handling tools.'
        }
      ]
    },
    {
      category: '🎨 Design & Branding',
      items: [
        {
          icon: '🎨',
          title: 'UI/UX Design',
          description: 'Modern interfaces for web and mobile.'
        },
        {
          icon: '🪄',
          title: 'Logo & Brand Identity Design',
          description: 'Unique visuals for startups and creators.'
        },
        {
          icon: '📱',
          title: 'Social Media Creatives',
          description: 'Posters, ads, and reels with AI enhancement.'
        },
        {
          icon: '🧰',
          title: 'Product Mockups & Prototypes',
          description: 'Showcase app or web concepts visually.'
        }
      ]
    },
    {
      category: '💡 Consulting & Cloud Support',
      items: [
        {
          icon: '💡',
          title: 'Startup Tech Consulting',
          description: 'Help choose stacks, define MVPs, and AI integration.'
        },
        {
          icon: '🧩',
          title: 'AI Project Guidance',
          description: 'Support for students & hackathon projects.'
        },
        {
          icon: '☁️',
          title: 'Cloud Deployment',
          description: 'Deploy apps on AWS, Render, or Vercel.'
        },
        {
          icon: '🔗',
          title: 'API & Database Integration',
          description: 'Connect APIs and databases securely.'
        },
        {
          icon: '🔒',
          title: 'Security & Optimization',
          description: 'Improve speed, SEO, and protection.'
        }
      ]
    },
    {
      category: '🔐 Hosting & Maintenance',
      items: [
        {
          icon: '🔐',
          title: 'Secure Project Hosting',
          description: 'SSL-protected hosting for AI/ML projects.'
        },
        {
          icon: '🔄',
          title: 'Continuous Support',
          description: 'Updates, bug fixes, and enhancements.'
        },
        {
          icon: '💾',
          title: 'Backup & Recovery Setup',
          description: 'Automated backups and data safety.'
        }
      ]
    }
  ];

  const metrics = [
    { value: '93%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'AI Experts' }
  ];

  return (
    <div className="space-y-20 relative">
      {/* Animated Gradient Background */}
      <motion.div
        className="fixed inset-0 -z-10 opacity-10"
        animate={{
          background: [
            'linear-gradient(45deg, #7f5af0, #ff6b6b, #42dff4)',
            'linear-gradient(135deg, #ff6b6b, #42dff4, #7f5af0)',
            'linear-gradient(225deg, #42dff4, #7f5af0, #ff6b6b)',
            'linear-gradient(315deg, #7f5af0, #ff6b6b, #42dff4)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* Intro Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        {/* decorative orbs */}
        <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" aria-hidden />
        <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl" aria-hidden />

        <div className="container-custom z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Building Smarter Web & AI Solutions for the Future
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At NaitifyAi, we create smart AI-powered websites, chatbots, and automation tools that simplify learning, business, and everyday work. Founded by Naitik Kushwaha in 2025 (Mumbai), we combine creativity and AI innovation to solve real-world problems with modern technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Explore Solutions
                </Button>
                <Link to="/contact" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl opacity-60 hidden lg:block" aria-hidden />
                {/* Rocket Animation Image */}
                <img
                  src="/images/rocket.png"
                  alt="Rocket Animation"
                  className="w-full max-w-[520px] mx-auto h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="container mx-auto px-4 z-10" direction="up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {services.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      variant="elevated"
                    >
                      <div className="text-4xl mb-4 text-center">{service.icon}</div>
                      <h4 className="text-xl font-semibold mb-3 text-center">{service.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* Key Metrics Section */}
      <AnimatedSection
        className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 py-16"
        direction="fade"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light">
                  {metric.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="container mx-auto px-4" direction="up">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        <TestimonialSlider />
      </AnimatedSection>

      {/* Call-to-Action Section */}
      <AnimatedSection
        className="bg-gradient-to-r from-primary to-secondary text-white py-16 rounded-3xl mx-4"
        direction="scale"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your AI Project Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our AI experts to discover how our solutions can drive growth for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a
                href="https://wa.me/918948866980?text=Hello!%20I%E2%80%99m%20interested%20in%20your%20AI%20tools%20and%20website%20services.%20Can%20we%20connect%3F%0A%0AMy%20Contact%20Details%3A%0AName%3A%20%0APhone%20Number%3A%20%0AEmail%20ID%3A%20%0ACity%20%2F%20State%3A%20%0ACompany%20%2F%20Organization%3A%20%0AWebsite%20(if%20any)%3A%20%0AMessage%20%2F%20Query%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
