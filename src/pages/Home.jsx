import React, { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/ui/AnimatedSection";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import Card from "../components/ui/Card";
import SEO from "../components/seo/SEO";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* SEO Optimization - Unique meta tags for Home page */}
      <SEO
        title="Home"
        description="Naitify_AiTech - Building smarter web and AI solutions for the future. AI websites, chatbots, and automation tools for students, startups, and businesses."
        keywords="AI technology, web development, chatbots, automation, machine learning, digital transformation, tech solutions, Naitify_AiTech"
        canonical="https://naitifyaitech.com"
        ogImage="/images/hero-image.jpg"
      />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          {/* decorative orbs - hide on small screens to prevent overflow */}
          <div
            className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
            aria-hidden
          />
          <div
            className="hidden md:block absolute bottom-20 left-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl"
            aria-hidden
          />

          <div className="container-custom z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 space-y-6">
                <Motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Building Smarter Web & AI Solutions for the Future
                </Motion.h1>

                <Motion.p
                  className="text-lg text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  At Naitify_AiTech, we create smart AI-powered websites,
                  chatbots, and automation tools that simplify learning,
                  business, and everyday work. Founded by Naitik Kushwaha in
                  2025 (Mumbai), we combine creativity and AI innovation to
                  solve real-world problems with modern technology.
                </Motion.p>

                <Motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
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
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", display: "inline-block" }}
                  >
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </Motion.div>
              </div>

              <Motion.div
                className="w-full md:w-1/2 mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative hero-media">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full filter blur-3xl opacity-60 hidden lg:block"
                    aria-hidden
                  />

                  {/* Responsive autoplaying video - muted by default for autoplay to work on mobile/desktop */}
                  <VideoHero />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <AnimatedSection className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions Built for Students, Startups & Small Teams
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to transform your
              business operations, enhance customer experiences, and drive
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🤖 AI-Powered Chatbots",
                description:
                  "Build custom chatbots that answer FAQs, guide users, or collect leads — using simple NLP, no PhD required. Perfect for college projects, small business websites, or customer support.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
              },
              {
                title: "🌐 Smart Website Automation",
                description:
                  "Turn static sites into smart ones. Auto-update content, collect user feedback, or integrate AI forms — all with clean React + Flask backend. Ideal for student portfolios or MVP startups.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Globe */}
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                    <path
                      d="M12 3a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9z"
                      fill="none"
                    />
                    <path
                      d="M12 3v18M3 12h18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    {/* Gear (small, inside or near) — simplified */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                    />
                    <circle cx="16.5" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: "📊 Data Insights for Small Projects",
                description:
                  "Got Excel sheets or basic databases? We help you visualize trends, spot patterns, and make smarter decisions — without complex ML. Great for academic projects or early business tracking.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Bar Chart */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                    {/* Magnifying Glass (top-right) */}
                    <circle
                      cx="18"
                      cy="6"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.25 7.25l2.5 2.5"
                    />
                  </svg>
                ),
              },
              {
                title: "🧠 AI Learning Assistants (For Students!)",
                description:
                  "Stuck with coding, theory, or project ideas? Our lightweight AI tools explain concepts, debug code snippets, or suggest project structures — built by students, for students.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Open book */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v11.5m0 0l-5-3.5m5 3.5l5-3.5M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"
                    />
                    {/* Spark / idea (top-right) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a1 1 0 11-2 0 1 1 0 012 0zM15 13a1 1 0 11-2 0 1 1 0 012 0z"
                      fill="none"
                    />
                    <circle cx="18" cy="10" r="1" fill="currentColor" />
                  </svg>
                ),
              },
              {
                title: "⚙️ Workflow Automators",
                description:
                  "Automate boring stuff: file sorting, report generation, email reminders, or data entry between Google Sheets & your app. Save 5+ hours/week with simple Python + Node.js scripts.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Outer gear (simplified) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Circular arrows (automation loop) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12a5 5 0 11-5-5"
                      fill="none"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8l2-2-2-2"
                      fill="none"
                    />
                  </svg>
                ),
              },
              {
                title: "💡 Startup Tech Consulting (Zero Fluff)",
                description:
                  "Not sure how to start your AI project? We’ll help you pick the right stack (React? Flask? MongoDB?), scope your MVP, and avoid common beginner traps — all in plain language.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
              },
              {
                title: " 🎯 Predictive Analytics",
                description:
                  "Forecast future trends and behaviors with our advanced predictive models to make data-driven decisions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: " 🧠 Intelligent Automation",
                description:
                  "Streamline workflows and reduce manual tasks with our AI-powered automation solutions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: " 🤖  AI Consulting   ",
                description:
                  "Expert guidance on implementing AI strategies tailored to your specific business needs and goals.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Brain (AI intelligence) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17.5h4.674M12 3v1m6.364 1.636l-.707.707M12 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm-4.243-9.243l.707-.707M12 12h.01M16.243 9.757l.707-.707"
                    />
                    {/* Handshake (consulting / partnership) - simplified */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4m16 0l-4 4m4-4l-4-4M4 12l4 4m-4-4l4-4"
                    />
                  </svg>
                ),
              },

              {
                title: "📝 AI-Powered Content Assistants",
                description:
                  "Struggling with writing? Our tools help you draft emails, project reports, or social media posts using smart prompts — no fancy GPT API needed. Great for students and solopreneurs.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Pen / Pencil (writing) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                    {/* Spark / idea (top-right) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a1 1 0 11-2 0 1 1 0 012 0zM15 13a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    <circle cx="18" cy="10" r="0.8" fill="currentColor" />
                  </svg>
                ),
              },

              {
                title: "🌐 AI-Ready Business Websites (End-to-End)",
                description:
                  "We build complete, responsive websites — from design to deployment — with built-in AI features like smart contact forms, auto-responses, or content suggestions. Built on React + Flask/Node, hosted & maintained by us. One-time delivery or monthly plan.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Globe (website / online presence) */}
                    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 3v18M3 12h18"
                    />
                    {/* Spark / AI insight (top-right) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a1 1 0 11-2 0 1 1 0 012 0zM15 13a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                    <circle cx="18" cy="10" r="0.8" fill="currentColor" />
                  </svg>
                ),
              },

              {
                title: "🔐 Secure Student Project Hosting",
                description:
                  "Need to showcase your AI/ML project without worrying about security or downtime? We offer free-tier hosting + basic SSL for student portfolios, hackathons, or academic submissions.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Document (portfolio/project) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                    {/* Lock (top-right corner) */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11V9a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h5"
                    />
                    <circle cx="16" cy="14" r="1" fill="currentColor" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center"
                variant="elevated"
              >
                <div className="text-primary dark:text-primary-light mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection
          className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 py-16"
          direction="fade"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "93%", label: "Client Satisfaction" },
                { value: "10+", label: "Projects Completed" },
                { value: "2+", label: "Years Experience" },
                { value: "5+", label: "AI Experts" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with
              our AI solutions.
            </p>
          </div>

          <TestimonialSlider />
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection
          className="bg-gradient-to-r from-primary to-secondary text-white py-16 rounded-3xl mx-4"
          direction="scale"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our AI experts to discover how our
              solutions can drive growth for your business.
            </p>
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
        </AnimatedSection>
      </div>
    </>
  );
};

// VideoHero component - self-contained inside Home.jsx
const VideoHero = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Try to play muted for autoplay support
    v.muted = true;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    // Ensure we keep video muted on start
    v.muted = true;

    return () => {
      try {
        v.pause();
      } catch {}
    };
  }, []);

  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;

    // If currently muted, unmute and enable audio; otherwise mute
    if (muted) {
      // unmute and ensure playback
      v.muted = false;
      setMuted(false);
      // Some browsers require a user gesture to start audio; ensure play
      v.play().catch(() => {});
    } else {
      v.muted = true;
      setMuted(true);
    }
  };

  return (
    <div className="relative z-10 w-full max-w-[520px] mx-auto h-auto">
      <video
        ref={videoRef}
        className="hero-video w-full h-auto object-contain rounded-xl"
        src="/videos/hero.mp4"
        playsInline
        muted
        loop
        preload="auto"
        // Use no controls - we provide a custom audio toggle
        aria-label="Hero video showcasing AI technology"
      />

      <button
        type="button"
        className="audio-toggle absolute bottom-4 right-4 bg-white/90 dark:bg-black/70 text-black dark:text-white rounded-full p-2 shadow-md hover:scale-105 focus:outline-none"
        onClick={toggleAudio}
        aria-pressed={!muted}
        aria-label={muted ? "Enable audio" : "Disable audio"}
      >
        {muted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 4.5v11l-5-4.5H1V9h3L9 4.5z" />
            <path d="M14.5 5.5l.71.71L12.92 9l2.29 2.79-.71.71L12.2 9.71 9.91 12l-.71-.71L11.5 9 9.2 6.71l.71-.71L12.2 8.29 14.5 5.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 4.5v11l-5-4.5H1V9h3L9 4.5z" />
            <path d="M12 7.5c.69.39 1.25.96 1.63 1.63.38.67.58 1.41.58 2.37s-.2 1.7-.58 2.37A4.5 4.5 0 0112 16.5" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Home;
