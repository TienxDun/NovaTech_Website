import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ChevronRight, Heart, Coffee, Laptop, ArrowRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      id: 'senior-react',
      title: 'Senior React Developer',
      department: 'Software Development',
      location: 'Remote / Ho Chi Minh City',
      type: 'Full-time',
      description: 'We are looking for an experienced React developer to lead frontend architecture for our enterprise clients. You will work closely with our design and backend teams to deliver high-performance web applications.',
      requirements: [
        '5+ years of experience with React and modern JavaScript (ES6+)',
        'Deep understanding of state management (Redux, Zustand, or Context)',
        'Experience with TypeScript and Tailwind CSS',
        'Strong understanding of web performance optimization'
      ]
    },
    {
      id: 'network-engineer',
      title: 'Network Security Engineer',
      department: 'Network Solutions',
      location: 'District 1, Ho Chi Minh City',
      type: 'Full-time',
      description: 'Join our network team to design and implement secure infrastructure for organizations in Vietnam and globally. You will be responsible for threat modeling, firewall configuration, and continuous monitoring.',
      requirements: [
        'CCNP Security or equivalent certification',
        '3+ years experience in enterprise network security',
        'Proficiency with Cisco, Palo Alto, or Fortinet systems',
        'Experience with zero-trust architecture implementation'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-900 overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-extrabold text-white sm:text-6xl tracking-tight mb-6"
          >
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Build the future of IT with passionate, innovative minds.
          </motion.p>
        </div>
      </div>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Life at NovaTech</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We foster a culture of continuous learning, collaboration, and work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Laptop, title: 'Flexible Work', desc: 'Remote-first options and flexible hours to suit your lifestyle.' },
              { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health coverage and mental wellness programs.' },
              { icon: Coffee, title: 'Continuous Growth', desc: 'Annual learning stipends and dedicated time for side projects.' }
            ].map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="mx-auto bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <perk.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
                <p className="text-slate-600">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Open Positions</h2>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    </div>
                    
                    <p className="text-slate-700 mb-6">{job.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-48 flex-shrink-0 mt-6 lg:mt-0">
                    <button className="group w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                      Apply Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-white mb-4"
            >
              Application Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Simple, transparent, and respectful of your time.
            </motion.p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {[
                { step: '01', title: 'Apply', desc: 'Submit your resume and portfolio via our online portal.' },
                { step: '02', title: 'Review', desc: 'Our team reviews your application within 48 hours.' },
                { step: '03', title: 'Interview', desc: 'Technical and cultural fit interviews with the team.' },
                { step: '04', title: 'Offer', desc: 'Welcome to NovaTech! We send an offer and plan onboarding.' }
              ].map((process, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="w-28 h-28 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mb-8 relative z-10 group-hover:border-indigo-500/50 group-hover:bg-slate-800 transition-all duration-500 shadow-xl backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="font-display text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 group-hover:from-indigo-400 group-hover:to-fuchsia-400 transition-all duration-500">
                      {process.step}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">{process.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
