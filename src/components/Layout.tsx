import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, ArrowUp, ChevronDown, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Seo from './Seo';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll visibility for ScrollToTop button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Project Timeline', href: '/management' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Seo />

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="bg-black p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="h-5 w-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                  NovaTech
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:bg-slate-50 ${
                    isActive(item.href)
                      ? 'text-black font-semibold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black mx-3"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <div className="flex items-center ml-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:hidden bg-white border-b border-slate-200"
          >
            <div className="pt-2 pb-3 px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive(item.href)
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium bg-indigo-600 text-white shadow-md mt-4 text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-slate-600 py-10 lg:py-16 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <div className="bg-black p-1.5 rounded-lg">
                  <Terminal className="h-4 w-4 text-white" />
                </div>
                <span className="font-display font-bold text-lg text-slate-900">NovaTech</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed mb-6">
                Empowering enterprises through innovative IT solutions. We specialize in network infrastructure, software development, and data communication in Vietnam.
              </p>
              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 mb-2 md:mb-0">
                <a href="#" aria-label="Facebook" className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 rounded-full transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 rounded-full transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 rounded-full transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="GitHub" className="p-2.5 bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 rounded-full transition-all">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-slate-100 md:border-t-0 pt-6 md:pt-0">
              <button 
                onClick={() => setIsCompanyOpen(!isCompanyOpen)} 
                className="w-full flex justify-between items-center md:cursor-auto md:pointer-events-none group"
                aria-expanded={isCompanyOpen}
              >
                <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">Company</h3>
                <ChevronDown className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 md:mt-6 space-y-0 md:space-y-4 overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 ${isCompanyOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none'}`}>
                <li className="border-b border-slate-50 md:border-none"><Link to="/about" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">About Us</Link></li>
                <li className="border-b border-slate-50 md:border-none"><Link to="/services" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">Services</Link></li>
                <li className="border-b border-slate-50 md:border-none"><Link to="/projects" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">Projects</Link></li>
                <li className="md:border-none"><Link to="/careers" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div className="border-t border-slate-100 md:border-t-0 pt-6 md:pt-0">
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)} 
                className="w-full flex justify-between items-center md:cursor-auto md:pointer-events-none group"
                aria-expanded={isContactOpen}
              >
                <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">Contact</h3>
                <ChevronDown className={`w-4 h-4 text-slate-400 md:hidden transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`mt-2 md:mt-6 space-y-0 md:space-y-4 overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 ${isContactOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none'}`}>
                <li className="border-b border-slate-50 md:border-none py-3 md:py-0 text-sm text-slate-500 block">806 Le Quang Dao, District 12, HCMC</li>
                <li className="border-b border-slate-50 md:border-none"><a href="mailto:contact@huflit.edu.vn" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">contact@huflit.edu.vn</a></li>
                <li className="md:border-none"><a href="tel:+842838632052" className="block py-3 md:py-0 text-sm text-slate-500 hover:text-black transition-colors">(+84 28) 3863 2052</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} NovaTech Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-black text-white rounded-full shadow-2xl hover:bg-slate-800 active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
