import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Target, Award, Users, Quote, Layers, Shield, Zap } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Lều Tiến Dũng',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in enterprise IT architecture. Passionate about leveraging technology to drive business transformation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Lê Hải Nam',
      role: 'Chief Technology Officer',
      bio: 'Former lead engineer at top tech firms. Expert in scalable cloud infrastructure and agile software development methodologies.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Võ Nguyễn Thanh Hiếu',
      role: 'Head of Network Solutions',
      bio: 'Certified network security specialist. Dedicated to building robust, zero-trust architectures for clients in Vietnam and globally.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Nguyễn Minh Danh',
      role: 'Lead Software Engineer',
      bio: 'Full-stack expert specializing in React and Node.js. Drives our commitment to clean code and exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <div className="bg-white">
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">NovaTech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future of digital infrastructure and software solutions.
          </motion.p>
        </div>
      </div>

      {/* Mission & USP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            {/* Mission Statement */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8 shrink-0">
                <div className="bg-indigo-100 p-3 rounded-2xl">
                  <Target className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="font-display text-4xl font-bold text-slate-900">Mission Statement</h2>
              </div>
              
              <div className="relative bg-indigo-50/50 rounded-3xl p-8 sm:p-10 border border-indigo-100/50 mt-2 flex-1 flex flex-col justify-center">
                <Quote className="absolute top-6 left-6 h-12 w-12 text-indigo-200/60 rotate-180" />
                <p className="relative z-10 text-2xl sm:text-3xl text-slate-800 leading-snug font-medium italic mb-8 pt-4">
                  "To empower enterprises in Vietnam and globally by delivering secure, scalable, and innovative IT solutions that bridge the gap between complex technology and business success."
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-indigo-200 flex-1"></div>
                  <p className="text-sm text-indigo-800/80 font-bold uppercase tracking-widest">Our Core Belief</p>
                  <div className="h-px bg-indigo-200 flex-1"></div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed text-center">
                  We believe that technology should be an enabler, not a hurdle. Our goal is to simplify the digital transformation journey for our clients.
                </p>
              </div>
            </motion.div>

            {/* Our Unique Edge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8 shrink-0">
                <div className="bg-fuchsia-100 p-3 rounded-2xl">
                  <Award className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h2 className="font-display text-4xl font-bold text-slate-900">Our Unique Edge</h2>
              </div>
              
              <div className="flex-1 flex flex-col gap-5 mt-2">
                {[
                  { 
                    title: 'Holistic Approach', 
                    desc: 'We integrate network, software, and data into a unified strategy.',
                    icon: Layers,
                    color: 'text-blue-600',
                    bg: 'bg-blue-50',
                    border: 'border-blue-100'
                  },
                  { 
                    title: 'Security First', 
                    desc: 'Security is built into our DNA, not added as an afterthought.',
                    icon: Shield,
                    color: 'text-emerald-600',
                    bg: 'bg-emerald-50',
                    border: 'border-emerald-100'
                  },
                  { 
                    title: 'Agile & Adaptive', 
                    desc: 'We pivot quickly to meet evolving market and technological demands.',
                    icon: Zap,
                    color: 'text-amber-600',
                    bg: 'bg-amber-50',
                    border: 'border-amber-100'
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-5 flex-1"
                  >
                    <div className={`${item.bg} ${item.border} border p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
    </div>
  );
}
