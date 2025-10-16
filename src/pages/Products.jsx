import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Products = () => {
  const products = [
    {
      name: "NaitifyVision",
      tagline: "Advanced Computer Vision Platform",
      description: "A comprehensive computer vision platform that enables businesses to extract insights from images and video with unprecedented accuracy.",
      features: [
        "Object detection and recognition",
        "Facial recognition with emotion analysis",
        "Activity and behavior recognition",
        "Anomaly detection in visual data",
        "Real-time video analytics"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Computer Vision"
    },
    {
      name: "NaitifyNLP",
      tagline: "Natural Language Understanding Suite",
      description: "Transform how your business handles text data with our state-of-the-art natural language processing solution.",
      features: [
        "Sentiment analysis and opinion mining",
        "Named entity recognition",
        "Text classification and categorization",
        "Language translation and summarization",
        "Conversational AI capabilities"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Natural Language Processing"
    },
    {
      name: "PredictAI",
      tagline: "Predictive Analytics Engine",
      description: "Harness the power of predictive modeling to forecast trends, behaviors, and outcomes with remarkable accuracy.",
      features: [
        "Time series forecasting",
        "Customer behavior prediction",
        "Risk assessment modeling",
        "Demand forecasting",
        "Anomaly detection and alerting"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Predictive Analytics"
    },
    {
      name: "AutomateAI",
      tagline: "Intelligent Process Automation",
      description: "Streamline operations and reduce costs with our AI-powered automation platform designed for enterprise workflows.",
      features: [
        "Document processing and data extraction",
        "Workflow optimization",
        "Decision automation",
        "Integration with existing systems",
        "Performance analytics dashboard"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Process Automation"
    },
    {
      name: "DataSenseAI",
      tagline: "Advanced Data Analytics Platform",
      description: "Turn your raw data into actionable insights with our comprehensive analytics solution powered by machine learning.",
      features: [
        "Automated data preparation",
        "Pattern recognition",
        "Interactive visualization",
        "Insight generation",
        "Recommendation engine"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Data Analytics"
    },
    {
      name: "NaitifyBot",
      tagline: "Enterprise Conversational AI",
      description: "Create intelligent chatbots and virtual assistants that understand context and deliver personalized experiences.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "Contextual awareness",
        "Integration with knowledge bases",
        "Continuous learning capabilities"
      ],
      image:"/src/assets/images/hero-image.jpg",
      category: "Conversational AI"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Cutting-edge AI solutions designed to solve real business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <AnimatedSection className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "Process Automation", "Data Analytics", "Conversational AI"].map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "primary" : "outline"}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedSection 
              key={index} 
              className="h-full" 
              delay={index * 0.1}
            >
              <Card className="h-full flex flex-col" variant="elevated">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary dark:bg-primary-light text-white dark:text-dark px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <CardBody className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-primary dark:text-primary-light font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex space-x-3">
                      <Button variant="primary" fullWidth>Learn More</Button>
                      <Button variant="outline" fullWidth>Request Demo</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Integration Section */}
      <AnimatedSection 
        className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 py-20"
        direction="fade"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our products are designed to work with your existing technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["AWS", "Azure", "Google Cloud", "Salesforce", "SAP", "Oracle", "Microsoft", "Slack", "Shopify", "Hubspot", "Zendesk", "Tableau"].map((partner, index) => (
              <div key={index} className="bg-white dark:bg-dark-light rounded-lg p-4 flex items-center justify-center h-24 shadow-md">
                <div className="text-xl font-bold text-gray-700 dark:text-gray-300">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="container mx-auto px-4" direction="up">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how our products have transformed businesses across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              company: "HealthTech Solutions",
              product: "NaitifyVision",
              result: "Reduced diagnostic time by 60% with AI-powered medical imaging analysis",
              industry: "Healthcare"
            },
            {
              company: "Global Retail Corp",
              product: "PredictAI",
              result: "Increased inventory forecasting accuracy by 35%, reducing stockouts by 42%",
              industry: "Retail"
            },
            {
              company: "FinServe International",
              product: "NaitifyNLP",
              result: "Automated 78% of customer service inquiries, improving response time by 90%",
              industry: "Finance"
            }
          ].map((case_study, index) => (
            <Card key={index} className="p-6" variant="elevated">
              <div className="text-sm font-medium text-primary dark:text-primary-light mb-2">{case_study.industry}</div>
              <h3 className="text-xl font-semibold mb-2">{case_study.company}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Using <span className="font-medium">{case_study.product}</span>
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <p className="font-medium">{case_study.result}</p>
              </div>
              <Button variant="ghost" className="mt-4">
                Read Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection className="container mx-auto px-4 max-w-5xl" direction="left">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Options</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the plan that works best for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$499",
              period: "per month",
              description: "Perfect for small businesses and startups",
              features: [
                "Access to 1 product",
                "Up to 5 users",
                "Basic support",
                "100K API calls/month",
                "Standard SLA"
              ]
            },
            {
              name: "Business",
              price: "$1,499",
              period: "per month",
              description: "Ideal for growing companies",
              features: [
                "Access to 3 products",
                "Up to 20 users",
                "Priority support",
                "500K API calls/month",
                "Enhanced SLA",
                "Custom integrations"
              ],
              highlighted: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "For large organizations with complex needs",
              features: [
                "Access to all products",
                "Unlimited users",
                "24/7 dedicated support",
                "Unlimited API calls",
                "Premium SLA",
                "Custom development",
                "On-premise deployment option"
              ]
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden ${plan.highlighted ? 'border-2 border-primary dark:border-primary-light transform scale-105' : ''}`}
              variant={plan.highlighted ? 'gradient' : 'elevated'}
            >
              {plan.highlighted && (
                <div className="bg-primary dark:bg-primary-light text-white py-2 text-center font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-4">
                  <span className="text-4xl font-bold text-primary dark:text-primary-light">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 dark:text-gray-400 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.highlighted ? 'primary' : 'outline'} 
                  size="lg"
                  fullWidth
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection 
        className="bg-gradient-to-r from-primary to-secondary text-white py-16 rounded-3xl mx-4"
        direction="scale"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Products?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo with our product specialists to see how our AI solutions can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Request Demo
            </Button>
            <Button 
              size="xl"
              className="bg-white text-primary hover:bg-gray-100"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Products;