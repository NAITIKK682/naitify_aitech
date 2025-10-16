import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import EnhancedContactForm from '../components/contact/EnhancedContactForm';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions about our AI solutions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <AnimatedSection className="container mx-auto px-4" direction="up">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          {user ? (
            <EnhancedContactForm />
          ) : (
            <Card className="p-6 md:p-8" variant="elevated">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </Card>
          )}

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8" variant="glass">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 8948866980</p>
                    <p className="text-gray-600 dark:text-gray-300">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">naitify.aitech@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@naitify.aitech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Vasai East - 401208</p>
                    <p className="text-gray-600 dark:text-gray-300">Palghar, Maharashtra</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8" variant="default">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="container mx-auto px-4" direction="fade">
        <Card className="p-0 overflow-hidden" variant="default">
          <div className="h-64 md:h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="w-full">
              <div className="text-center p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our office location (interactive). You can replace the src with your Google Maps share URL.
                </p>
              </div>
              {/* Responsive iframe container */}
              <div className="w-full">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    title="Naitify_AiTech location"
                     src="https://www.google.com/maps?q=Mumbai&output=embed"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="container mx-auto px-4 max-w-4xl" direction="up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "What industries do you specialize in?",
              answer: "We specialize in providing AI solutions for healthcare, finance, manufacturing, retail, and government sectors. Our team has extensive experience in developing custom AI applications tailored to the specific needs of these industries."
            },
            {
              question: "Do you offer custom AI solutions?",
              answer: "Yes, we offer fully customized AI solutions designed to address your specific business challenges. Our team works closely with you to understand your requirements and develop tailored solutions that integrate seamlessly with your existing systems."
            },
            {
              question: "How long does it take to implement an AI solution?",
              answer: "The implementation timeline varies depending on the complexity of the solution and your specific requirements. Typically, our projects range from 1-2 Week's for smaller implementations to 5-6 Week's for enterprise-scale solutions. We provide detailed timelines during our initial consultation."
            },
            {
              question: "What kind of support do you offer after implementation?",
              answer: "We offer comprehensive post-implementation support including maintenance, monitoring, updates, and training. Our support packages can be customized based on your needs, ranging from basic technical support to full managed services."
            }
          ].map((faq, index) => (
            <Card key={index} className="p-6" variant="outlined">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-300 mt-3 group-open:animate-fadeIn">
                  {faq.answer}
                </p>
              </details>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our experts to discuss your AI needs and discover how we can help you achieve your goals.
          </p>
          <Button
            variant="outline"
            size="xl"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Schedule a Consultation
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
