import React from 'react';
import { motion } from 'framer-motion';
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

          {/* WhatsApp Message */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://wa.me/918948866980?text=Hello!%20I%E2%80%99m%20interested%20in%20your%20AI%20tools%20and%20website%20services.%20Can%20we%20connect%3F%0A%0AMy%20Contact%20Details%3A%0AName%3A%20%0APhone%20Number%3A%20%0AEmail%20ID%3A%20%0ACity%20%2F%20State%3A%20%0ACompany%20%2F%20Organization%3A%20%0AWebsite%20(if%20any)%3A%20%0AMessage%20%2F%20Query%3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700"
              style={{
                textShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="animate-pulse"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              ⚠️ Facing any issue or server error? Contact us directly on WhatsApp!
            </a>
          </motion.div>

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
  );
};

export default Contact;
