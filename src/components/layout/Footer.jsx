import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-white text-gray-900 dark:bg-dark dark:text-gray-100">
      <div className="container-custom">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 gradient-text">Naitify_AiTech</h3>
            <p className="text-gray-300 mb-4">
              Empowering small teams with lightweight, intelligent web solutions — built to work, not just impress. 
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Naitify_AiTech<br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-light transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-primary-light transition-colors">AI Products</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-primary-light transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-light transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#ai-development" className="text-gray-300 hover:text-primary-light transition-colors">Custom AI Model Development</Link></li>
              <li><Link to="/services#chatbots" className="text-gray-300 hover:text-primary-light transition-colors">Chatbot & Voice Assistant Integration</Link></li>
              <li><Link to="/services#analytics" className="text-gray-300 hover:text-primary-light transition-colors">Predictive Analytics</Link></li>
              <li><Link to="/services#automation" className="text-gray-300 hover:text-primary-light transition-colors">AI-Powered Automation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Vasai East (Palghar), Maharashtra, India</p>
              <p className="mb-2">
                <a href="mailto:naitify.aitech@gmail.com" className="hover:text-primary-light transition-colors">
                  naitify.aitech@gmail.com
                </a>
              </p>
              <div className="mt-4 w-full overflow-hidden rounded-md">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    title="footer-map"
                     src="https://www.google.com/maps?q=Mumbai&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com/in/naitikkushwaha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-light transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/naitikkushwaha" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-light transition-colors">
                  GitHub
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-dark-lighter dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>Designed & Developed by Naitik Kushwaha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;