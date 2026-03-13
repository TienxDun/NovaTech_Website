import { motion } from 'motion/react';
import { Server, Code, Database, HeadphonesIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'network',
      title: 'Network Solutions',
      icon: Server,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      description: 'Comprehensive network solutions focused on security, resilient infrastructure, and proactive maintenance.',
      features: [
        'Enterprise Network Infrastructure Design',
        'Firewall Setup & Advanced Cybersecurity',
        'Proactive Network Monitoring & Maintenance',
        'Secure Cloud Infrastructure Migration'
      ]
    },
    {
      id: 'development',
      title: 'Software Development',
      icon: Code,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      description: 'Custom software engineering providing scalable web applications, mobile solutions, and rigorous QA testing.',
      features: [
        'Custom Web Application Development',
        'Cross-platform & Native Mobile Solutions',
        'Quality Assurance (QA) & Automated Testing',
        'API Integration & Microservices'
      ]
    },
    {
      id: 'data',
      title: 'Data Communication',
      icon: Database,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      description: 'Robust data communication services ensuring secure data transmission and optimal database management.',
      features: [
        'Database Architecture & Optimization',
        'Secure Data Transmission Protocols (VPN/IPsec)',
        'Data Backup & Disaster Recovery',
        'High-speed Data Pipelines'
      ]
    },
    {
      id: 'support',
      title: 'User Support',
      icon: HeadphonesIcon,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      description: 'Dedicated user support providing reliable helpdesk services, rapid troubleshooting, and high service standards.',
      features: [
        '24/7 IT Helpdesk Services',
        'Remote & On-site Troubleshooting',
        'Strict Service Level Agreements (SLA)',
        'IT Training & Documentation Standards'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden border-b border-slate-200/60 py-24 lg:py-32">
        {/* Subtle grid pattern & Gradient Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-10 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-fuchsia-500 opacity-10 blur-[120px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Our Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive, enterprise-grade IT solutions designed to scale with your business and accelerate digital transformation.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 flex flex-col"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className={`${service.bg} p-4 rounded-2xl`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-slate-900">{service.title}</h2>
                </div>
                
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Technical Services</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-indigo-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact our engineering team to discuss your specific requirements and receive a tailored technical proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-slate-800 active:scale-95 transition-all shadow-sm hover:shadow-md"
              >
                Request a Quote
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 active:scale-95 transition-all shadow-sm hover:shadow-md"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
