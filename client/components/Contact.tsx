import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
              Partner with us
            </h2>
            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              If you're looking to bring a space to life, share a few details to help me reach out to you so we can discuss how to bring your vision to life.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  Your email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal-700 mb-2">
                  A little bit about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal-900 text-white px-8 py-4 rounded-lg hover:bg-gold-600 transition-colors font-semibold text-lg"
              >
                Submit
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              )}
            </form>
          </div>

          {/* Contact Image */}
          <div className="relative h-[500px] lg:h-full rounded-lg overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
              alt="Contact"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-charcoal-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about-section" className="text-charcoal-600 hover:text-gold-600 transition-colors">About</a></li>
                <li><a href="#services-section" className="text-charcoal-600 hover:text-gold-600 transition-colors">Services</a></li>
                <li><a href="#projects-section" className="text-charcoal-600 hover:text-gold-600 transition-colors">Projects</a></li>
                <li><a href="#gallery-section" className="text-charcoal-600 hover:text-gold-600 transition-colors">Gallery</a></li>
                <li><a href="#reviews-section" className="text-charcoal-600 hover:text-gold-600 transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-charcoal-600 hover:text-gold-600 transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-charcoal-600 hover:text-gold-600 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-charcoal-600 hover:text-gold-600 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:contact@portfolio.com" className="text-charcoal-600 hover:text-gold-600 transition-colors">contact@portfolio.com</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-gold-600 transition-colors">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-600 hover:text-gold-600 transition-colors">LinkedIn</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-4">Newsletter</h3>
              <p className="text-sm text-charcoal-600 mb-4">Stay updated with our latest projects and insights.</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-charcoal-900 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors text-sm font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-charcoal-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-600">
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-600 transition-colors">Terms of Service</a>
            </div>
            <div>
              <p>&copy; {new Date().getFullYear()} Architecture Portfolio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
