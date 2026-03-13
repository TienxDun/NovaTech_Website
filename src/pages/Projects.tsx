import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'fintech-migration',
      client: 'VietFin Bank',
      context: 'A leading national financial institution in Vietnam processing millions of transactions daily.',
      title: 'Enterprise Cloud Migration & Security Overhaul',
      category: 'Network Solutions',
      icon: Shield,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      challenge: 'Legacy on-premise servers were causing significant downtime during peak trading hours, and their security protocols were outdated, risking compliance violations.',
      implementation: [
        'Conducted a comprehensive infrastructure audit and risk assessment.',
        'Designed a zero-downtime migration strategy to a hybrid AWS cloud architecture.',
        'Implemented end-to-end encryption and a zero-trust network model.',
        'Deployed automated CI/CD pipelines for future updates.'
      ],
      results: 'Achieved 99.999% uptime. Reduced infrastructure costs by 35% and successfully passed all international financial compliance audits.',
      metrics: [
        { label: 'Uptime', value: '99.999%' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Migration Time', value: '3 Months' }
      ]
    },
    {
      id: 'ecommerce-platform',
      client: 'VinRetail Group',
      context: 'A major Vietnamese e-commerce retailer with over 10 million active users.',
      title: 'Scalable E-Commerce Platform Development',
      category: 'Software Development',
      icon: Zap,
      color: 'text-fuchsia-600',
      bg: 'bg-fuchsia-50',
      challenge: 'The client\'s monolithic e-commerce platform could not handle Black Friday traffic spikes, resulting in slow load times, frequent crashes, and lost sales.',
      implementation: [
        'Re-architected the platform using a microservices approach with React and Node.js.',
        'Containerized applications using Docker and orchestrated with Kubernetes.',
        'Implemented advanced Edge caching and global CDN load balancing.',
        'Integrated automated load testing into the deployment pipeline.'
      ],
      results: 'Platform successfully handled 500% more concurrent users without performance degradation. Conversion rates increased by 22% due to faster page loads.',
      metrics: [
        { label: 'Traffic Capacity', value: '+500%' },
        { label: 'Conversion Rate', value: '+22%' },
        { label: 'Page Load', value: '< 1s' }
      ]
    },
    {
      id: 'healthcare-data',
      client: 'VietHealth Network',
      context: 'A national healthcare provider network encompassing 45+ hospitals and clinics across Vietnam.',
      title: 'Secure Patient Data Communication System',
      category: 'Data Communication',
      icon: BarChart3,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      challenge: 'Hospitals within the network struggled to share patient records securely and quickly, leading to delays in critical care and potential HIPAA compliance risks.',
      implementation: [
        'Developed a custom, HIPAA-compliant data transmission protocol.',
        'Deployed a centralized, encrypted database accessible via a secure web portal.',
        'Implemented multi-factor authentication (MFA) and role-based access control (RBAC).',
        'Conducted extensive penetration testing and security audits.'
      ],
      results: 'Data retrieval times dropped from hours to seconds. Improved patient care coordination and achieved 100% compliance with healthcare data regulations.',
      metrics: [
        { label: 'Retrieval Time', value: '-98%' },
        { label: 'Compliance', value: '100%' },
        { label: 'Hospitals Connected', value: '45+' }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
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
            Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">Studies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Real-world challenges. Innovative solutions. Measurable results.
          </motion.p>
        </div>
      </div>

      {/* Projects List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Content Side */}
                <div className="lg:col-span-8 p-8 sm:p-12">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-900">
                      {project.client}
                    </span>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-10 leading-tight">{project.title}</h2>
                  
                  <div className="space-y-10">
                    {/* Context */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Client Context</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{project.context}</p>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">The Challenge</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{project.challenge}</p>
                    </div>
                    
                    {/* Implementation */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">The Implementation</h3>
                      <ul className="space-y-4">
                        {project.implementation.map((step, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold mt-0.5 mr-4">
                              {i + 1}
                            </span>
                            <span className="text-slate-600 text-lg leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Results & Outcomes</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{project.results}</p>
                    </div>
                  </div>
                </div>

                {/* Metrics Side */}
                <div className="lg:col-span-4 bg-slate-900 p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`${project.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-10`}>
                      <project.icon className={`h-8 w-8 ${project.color}`} />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-white mb-10">Key Metrics</h3>
                    
                    <div className="space-y-8">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="border-l-2 border-indigo-500/30 pl-5">
                          <p className="font-display text-4xl font-bold text-white mb-2">{metric.value}</p>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
