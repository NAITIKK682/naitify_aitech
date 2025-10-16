import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Powered Chatbots',
      description: 'Build custom chatbots that answer FAQs, guide users, or collect leads — using simple NLP, no PhD required. Perfect for college projects, small business websites, or customer support.'
    },
    {
      icon: '🌐',
      title: 'Smart Website Automation',
      description: 'Turn static sites into smart ones. Auto-update content, collect user feedback, or integrate AI forms — all with clean React + Flask backend. Ideal for student portfolios or MVP startups.'
    },
    {
      icon: '📊',
      title: 'Data Insights for Small Projects',
      description: 'Got Excel sheets or basic databases? We help you visualize trends, spot patterns, and make smarter decisions — without complex ML. Great for academic projects or early business tracking.'
    },
    {
      icon: '🧠',
      title: 'AI Learning Assistants (For Students!)',
      description: 'Stuck with coding, theory, or project ideas? Our lightweight AI tools explain concepts, debug code snippets, or suggest project structures — built by students, for students.'
    },
    {
      icon: '⚙️',
      title: 'Workflow Automators',
      description: 'Automate boring stuff: file sorting, report generation, email reminders, or data entry between Google Sheets & your app. Save 5+ hours/week with simple Python + Node.js scripts.'
    },
    {
      icon: '💡',
      title: 'Startup Tech Consulting (Zero Fluff)',
      description: 'Not sure how to start your AI project? We\'ll help you pick the right stack (React? Flask? MongoDB?), scope your MVP, and avoid common beginner traps — all in plain language.'
    },
    {
      icon: '🎯',
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors with our advanced predictive models to make data-driven decisions.'
    },
    {
      icon: '🧠',
      title: 'Intelligent Automation',
      description: 'Streamline workflows and reduce manual tasks with our AI-powered automation solutions.'
    },
    {
      icon: '🤖',
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI strategies tailored to your specific business needs and goals.'
    },
    {
      icon: '📝',
      title: 'AI-Powered Content Assistants',
      description: 'Struggling with writing? Our tools help you draft emails, project reports, or social media posts using smart prompts — no fancy GPT API needed. Great for students and solopreneurs.'
    },
    {
      icon: '🌐',
      title: 'AI-Ready Business Websites (End-to-End)',
      description: 'We build complete, responsive websites — from design to deployment — with built-in AI features like smart contact forms, auto-responses, or content suggestions. Built on React + Flask/Node, hosted & maintained by us. One-time delivery or monthly plan.'
    },
    {
      icon: '🔐',
      title: 'Secure Student Project Hosting',
      description: 'Need to showcase your AI/ML project without worrying about security or downtime? We offer free-tier hosting + basic SSL for student portfolios, hackathons, or academic submissions.'
    }
  ];

  const metrics = [
    { value: '93%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'AI Experts' }
  ];

  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        {/* decorative orbs */}
        <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" aria-hidden />
        <div className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl" aria-hidden />

        <div className="container-custom z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Building Smarter Web & AI Solutions for the Future
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Naitify_AiTech, we create smart AI-powered websites, chatbots, and automation tools that simplify learning, business, and everyday work. Founded by Naitik Kushwaha in 2025 (Mumbai), we combine creativity and AI innovation to solve real-world problems with modern technology.
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
                {/* Placeholder for visual element, can add image/video later */}
                <div className="w-full max-w-[520px] mx-auto h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300"
              variant="elevated"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </Card>
          ))}
        </div>
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
            <Link to="/contact" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
