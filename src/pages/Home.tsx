import { Link } from 'react-router-dom';
import { ArrowRight, Server, Code, Database, ShieldCheck, Target, Users, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const team = [
    {
      name: 'Lều Tiến Dũng',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in enterprise IT architecture. Passionate about leveraging technology to drive business transformation.',
    },
    {
      name: 'Lê Hải Nam',
      role: 'Chief Technology Officer',
      bio: 'Former lead engineer at top tech firms. Expert in scalable cloud infrastructure and agile software development methodologies.',
    },
    {
      name: 'Võ Nguyễn Thanh Hiếu',
      role: 'Head of Network Solutions',
      bio: 'Certified network security specialist. Dedicated to building robust, zero-trust architectures for clients in Vietnam and globally.',
    },
    {
      name: 'Nguyễn Minh Danh',
      role: 'Lead Software Engineer',
      bio: 'Full-stack expert specializing in React and Node.js. Drives our commitment to clean code and exceptional user experiences.',
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle grid pattern & Gradient Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-10 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-fuchsia-500 opacity-10 blur-[120px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Digital Reality</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              We are a premier IT consulting firm specializing in cutting-edge network solutions, custom software development, and secure data communication for enterprises in Vietnam and globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-slate-800 active:scale-95 transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 active:scale-95 transition-all shadow-sm hover:shadow-md"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Target className="h-12 w-12 text-indigo-600 mx-auto mb-8" />
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-2xl text-slate-600 leading-relaxed font-medium">
              "To empower enterprises in Vietnam and globally by delivering secure, scalable, and innovative IT solutions that bridge the gap between complex technology and business success."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Our Core Expertise</h2>
            <p className="text-lg text-slate-600">
              Delivering comprehensive IT solutions to modernize your infrastructure and accelerate business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Network Solutions',
                description: 'Robust, scalable, and secure network infrastructure design and maintenance.',
                icon: Server,
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                span: 'md:col-span-2 lg:col-span-2',
              },
              {
                title: 'Software Development',
                description: 'Custom web and mobile applications engineered for performance and reliability.',
                icon: Code,
                color: 'text-indigo-600',
                bg: 'bg-indigo-50',
                span: 'md:col-span-1 lg:col-span-1',
              },
              {
                title: 'Data Communication',
                description: 'Secure database management and high-speed data transmission protocols.',
                icon: Database,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50',
                span: 'md:col-span-2 lg:col-span-3',
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 flex flex-col ${service.span}`}
              >
                <div className={`${service.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className={`h-7 w-7 ${service.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center mt-auto">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                Why Partner With NovaTech?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't just provide services; we build strategic partnerships. Our team of experts brings years of industry experience to solve your most complex technical challenges.
              </p>
              
              <ul className="space-y-4">
                {[
                  'National presence with localized support',
                  'Agile methodologies for rapid delivery',
                  'Enterprise-grade security standards',
                  '24/7 dedicated technical assistance'
                ].map((item, i) => (
                  <li key={i} className="flex items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex-shrink-0 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                      <ShieldCheck className="h-5 w-5 text-indigo-600" />
                    </div>
                    <p className="ml-4 text-base text-slate-700 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-200/60">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/60 hidden sm:block">
                <div className="flex items-center gap-5">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className="font-display text-indigo-600 font-bold text-2xl">10+</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Years Experience</p>
                    <p className="text-sm text-slate-500">In IT Consulting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Executive Team */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-slate-900">Executive Team</h2>
            <p className="mt-4 text-lg text-slate-600">The minds behind NovaTech's success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 flex flex-col group"
              >
                <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mb-5 sm:mb-6 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=e0e7ff&color=4f46e5&size=128&font-size=0.33`}
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="min-h-[6rem] flex flex-col items-center justify-start w-full mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-tight mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-semibold text-xs sm:text-sm uppercase tracking-wide">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{member.bio}</p>
                  <div className="flex gap-4 mt-auto pt-4 border-t border-slate-100 w-full justify-center">
                    <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors p-2 hover:bg-slate-50 rounded-full">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-50 rounded-full">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-slate-50 rounded-full">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white border-t border-slate-200/60 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Ready to transform your IT infrastructure? Contact our team of experts today to discuss your next big project.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg">Headquarters</h4>
                    <p className="text-slate-600 mt-1">806 Le Quang Dao<br />Trung My Tay, District 12, Ho Chi Minh City</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shrink-0">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg">Email Us</h4>
                    <p className="text-slate-600 mt-1">contact@huflit.edu.vn<br />support@huflit.edu.vn</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl shrink-0">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 text-lg">Call Us</h4>
                    <p className="text-slate-600 mt-1">(+84 28) 3863 2052<br />Mon-Fri, 7:30am-5:00pm (GMT+7)</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all shadow-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all shadow-sm" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-black hover:bg-slate-800 active:scale-[0.98] text-white font-medium py-4 px-4 rounded-full transition-all flex justify-center items-center gap-2 shadow-sm hover:shadow-md">
                  Send Message <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
