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
        description="NaitifyAi - Building smarter web and AI solutions for the future. AI websites, chatbots, and automation tools for students, startups, and businesses."
        keywords="AI technology, web development, chatbots, automation, machine learning, digital transformation, tech solutions, NaitifyAi"
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
                  At NaitifyAi, we create smart AI-powered websites,
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
