import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Seo from './Seo';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
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
      <footer className="bg-white text-slate-600 py-10 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-black p-1.5 rounded-lg">
                  <Terminal className="h-4 w-4 text-white" />
                </div>
                <span className="font-display font-bold text-lg text-slate-900">NovaTech</span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                Empowering enterprises through innovative IT solutions. We specialize in network infrastructure, software development, and data communication in Vietnam.
              </p>
            </div>
            
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm text-slate-500 hover:text-black transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-sm text-slate-500 hover:text-black transition-colors">Services</Link></li>
                <li><Link to="/projects" className="text-sm text-slate-500 hover:text-black transition-colors">Projects</Link></li>
                <li><Link to="/careers" className="text-sm text-slate-500 hover:text-black transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>806 Le Quang Dao, Trung My Tay, District 12, Ho Chi Minh City</li>
                <li><a href="mailto:contact@huflit.edu.vn" className="hover:text-black transition-colors">contact@huflit.edu.vn</a></li>
                <li><a href="tel:+842838632052" className="hover:text-black transition-colors">(+84 28) 3863 2052</a></li>
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
