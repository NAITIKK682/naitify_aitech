import React from "react";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card"; // ✅ Only once!
import Button from "../components/ui/Button";
import SEO from "../components/seo/SEO";

const About = () => {
  const teamMembers = [
    {
      name: "Mr. Naitik Kushwaha",
      role: "Founder, CEO & Full Stack AI Developer",
      bio: "AI Researcher & Full Stack Developer passionate about creating smart web solutions, chatbots, and automation tools using AI and modern technologies.",
      image: "/images/hero-image.jpg",
    },
    {
      name: "Team forming soon",
      role: "Frontend Development",
      bio: "React.js, UI/UX.",
      image: "/images/unknown.jpg", // ✅ removed leading space
    },
    {
      name: "Team forming soon",
      role: "Backend Development",
      bio: "Node.js, Flask, Django,  MongoDB",
      image: "/images/unknown.jpg", // ✅ removed leading space
    },
    {
      name: "Team forming soon",
      role: "Director of Operations",
      bio: "Project management & deployment.",
      image: "/images/unknown.jpg", // ✅ removed leading space
    },
  ];

  return (
    <>
      {/* SEO Optimization - Unique meta tags for About page */}
      <SEO
        title="About Us"
        description="Learn about NaitifyAi - Founded in 2025 by Naitik Kushwaha, we build AI-powered websites, chatbots, and automation tools for students, startups, and businesses."
        keywords="about NaitifyAi, AI company, web development, chatbots, automation, Naitik Kushwaha, founder, team"
        canonical="https://naitifyaitech.com/about"
        ogImage="/images/hero-image.jpg"
      />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About NaitifyAi
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Building smart, modern AI tools for students, startups, and small
                businesses — since 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <AnimatedSection className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <img
                  src="/images/hero-logo.jpeg"
                  alt="NaitifyAi Office"
                  className="relative rounded-xl w-full h-auto shadow-xl"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Founded in 2025 by Naitik Kushwaha, NaitifyAi began as a
                passion project during his BE AIML studies — focused on making AI
                practical, simple, and accessible for everyday users.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                What started as building chatbots for college projects has grown
                into a mission: helping students launch websites, startups
                automate workflows, and small businesses use lightweight AI —
                without needing a PhD or big budgets.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we’re a lean team of developers, designers, and
                problem-solvers — all working to turn complex tech into
                easy-to-use tools that actually deliver results.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                👤 "I started NaitifyAi because I saw how hard it was for
                students and small teams to build AI tools — even when they had
                great ideas. If I can help you ship faster, learn smarter, and
                save time… that’s success." — Naitik Kushwaha, Founder & Lead
                Developer
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection
          className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 py-20"
          direction="fade"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  To make AI simple, smart, and accessible for everyone by
                  creating real, useful tools that help students, startups, and
                  businesses save time and grow faster.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  To build a future where AI blends with creativity and
                  technology, making learning, work, and business management
                  easier and smarter for all.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">What We Believe In</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Innovation: Constantly creating new AI ideas that solve
                  problems.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Simplicity: Creating solutions that are easy to use, understand,
                  and implement.
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Trust: Building ethical and reliable AI tools that respect user
                  privacy and data.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-primary dark:text-primary-light text-4xl font-bold mb-2">
                    Innovation
                  </div>
                  <p>Pushing the boundaries of what's possible with AI</p>
                </div>
                <div className="text-center">
                  <div className="text-primary dark:text-primary-light text-4xl font-bold mb-2">
                    Ethics
                  </div>
                  <p>
                    Developing responsible AI that respects privacy and fairness
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary dark:text-primary-light text-4xl font-bold mb-2">
                    Impact
                  </div>
                  <p>
                    Creating solutions that deliver measurable business results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection className="container mx-auto px-4" direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experts in AI research, engineering, and business strategy working
              together to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden" variant="elevated">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary dark:text-primary-light mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="container mx-auto px-4" direction="left">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our evolution as an AI technology leader.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2025",
                  title: "The Beginning :",
                  description:
                    "NaitifyAi started as a small idea in Mumbai to bring AI-based automation and smart websites to students and startups.",
                },
                {
                  year: "2025",
                  title: "First Enterprise Client :",
                  description:
                    "Secured first major client in the healthcare sector, developing predictive models for patient outcomes.",
                },
                {
                  year: "2025",
                  title: "Building the Platform :",
                  description:
                    "Developed AI-powered websites, chatbots, and automation tools using modern technologies like React.js, Node.js, Flask, and Python.",
                },
                {
                  year: "2026",
                  title: "The Next Step :",
                  description:
                    "Expanding with live AI projects, student learning tools, and real-world automation apps for small businesses.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="relative flex items-center justify-center w-0">
                    <div className="h-8 w-8 rounded-full bg-primary dark:bg-primary-light z-10 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <Card
                    className={`w-1/2 p-6 ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                    variant="elevated"
                  >
                    <div className="text-primary dark:text-primary-light font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We’re growing fast and always open to collaboration. If you’re
              passionate about AI, innovation, or creative web development — let’s
              build the future together.
            </p>
            <Button
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Open Positions
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default About;
