import { motion } from 'motion/react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  PlayCircle, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Code, 
  Layout,
  CheckSquare,
  GitMerge
} from 'lucide-react';

export default function ProjectManagement() {
  const stages = [
    {
      id: 'planning',
      phase: 'Phase 1: Planning',
      status: 'Completed',
      icon: Calendar,
      color: 'text-indigo-600',
      iconBg: 'bg-indigo-100',
      dotColor: 'bg-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      activities: [
        'Requirements & scope definition',
        'Tech stack: React, Tailwind, Vite',
        'Task breakdown & estimation',
        'Role assignment & workflow'
      ]
    },
    {
      id: 'development',
      phase: 'Phase 2: Development',
      status: 'Completed',
      icon: Code,
      color: 'text-blue-600',
      iconBg: 'bg-blue-100',
      dotColor: 'bg-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      activities: [
        'UI/UX design implementation',
        'Frontend component creation',
        'Content integration (IT services)',
        'Responsive layout optimization'
      ]
    },
    {
      id: 'testing',
      phase: 'Phase 3: Testing',
      status: 'Completed',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      dotColor: 'bg-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      activities: [
        'Cross-browser compatibility',
        'Performance & accessibility',
        'Content & link validation',
        'User acceptance testing (UAT)'
      ]
    },
    {
      id: 'delivery',
      phase: 'Phase 4: Delivery',
      status: 'Completed',
      icon: CheckCircle2,
      color: 'text-fuchsia-600',
      iconBg: 'bg-fuchsia-100',
      dotColor: 'bg-fuchsia-600',
      bg: 'bg-fuchsia-50',
      border: 'border-fuchsia-200',
      activities: [
        'Final code review & optimization',
        'Production deployment to live URL',
        'Documentation & reflection',
        'Final project submission'
      ]
    }
  ];

  const responsibilities = [
    { role: 'Project Manager (PM)', name: 'Lều Tiến Dũng', duties: 'Timeline management, task delegation, unblocking team members, and final delivery coordination.', icon: Users },
    { role: 'Lead Developer', name: 'Lê Hải Nam', duties: 'Architecture decisions, core component development, code reviews, and performance optimization.', icon: GitMerge },
    { role: 'UI/UX Engineer', name: 'Nguyễn Minh Danh', duties: 'Translating designs into Tailwind CSS, ensuring responsive layouts, and implementing animations.', icon: Layout },
    { role: 'QA Specialist', name: 'Võ Nguyễn Thanh Hiếu', duties: 'Cross-browser testing, accessibility checks, content verification, and bug reporting.', icon: CheckSquare }
  ];

  const communication = [
    { type: 'Daily Standups', frequency: 'Daily (15 mins)', tool: 'Google Meet', purpose: 'Sync on progress, blockers, and goals.' },
    { type: 'Task Tracking', frequency: 'Continuous', tool: 'Jira', purpose: 'Manage backlog and track status.' },
    { type: 'Asynchronous Comm', frequency: 'As needed', tool: 'Discord', purpose: 'Quick Q&A and general updates.' },
    { type: 'Code Reviews', frequency: 'Per PR', tool: 'GitHub', purpose: 'Ensure quality and share knowledge.' }
  ];

  const qualityChecks = [
    'Automated Linting (ESLint & Prettier) on pre-commit.',
    'Lighthouse performance score > 90 for all pages.',
    'Mobile-first responsive testing across iOS and Android devices.',
    'Zero dead links and 100% semantic HTML validation.',
    'Peer code review required before merging to the main branch.'
  ];

  return (
    <div className="bg-white min-h-screen">
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
            PM Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Structure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            A transparent look into how our team plans, builds, tests, and delivers high-quality software.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* 1. Stages */}
        <section>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">1. Project Stages</h2>
            <p className="text-lg text-slate-600">Our structured approach from conception to deployment.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Timeline Line (Desktop only) */}
            <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0 border-t-2 border-dashed border-slate-300 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {stages.map((stage, index) => (
                <motion.div 
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${stage.bg} rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
                >
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className={`${stage.iconBg} p-3 rounded-2xl shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-300`}>
                      <stage.icon className={`h-6 w-6 ${stage.color}`} />
                    </div>
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${stage.status === 'Completed' ? 'bg-emerald-200/60 text-emerald-800' : stage.status === 'In Progress' ? 'bg-amber-200/60 text-amber-800' : 'bg-slate-200/80 text-slate-600'}`}>
                      {stage.status}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-6">{stage.phase}</h3>
                  <ul className="space-y-4">
                    {stage.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <span className={`mr-3 mt-2 w-1.5 h-1.5 rounded-full ${stage.dotColor} flex-shrink-0`}></span>
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Responsibilities */}
        <section>
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">2. Team Responsibilities</h2>
            <p className="text-lg text-slate-600">Clear ownership and accountability for every aspect of the project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsibilities.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex gap-6 items-start"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 shrink-0">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{item.role}</h3>
                  <p className="text-indigo-600 font-medium text-sm mb-4">{item.name}</p>
                  <p className="text-slate-600 leading-relaxed">{item.duties}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Communication Plan & 4. Quality Checks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Communication Plan */}
          <section className="flex flex-col h-full">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-fuchsia-100 p-3 rounded-xl">
                <MessageSquare className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900">3. Communication Plan</h2>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto shadow-sm flex-1">
              <table className="w-full text-left border-collapse min-w-[450px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-slate-500 whitespace-nowrap w-1/4">Method</th>
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-slate-500 whitespace-nowrap w-1/4">Frequency / Tool</th>
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-slate-500 w-1/2">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {communication.map((comm, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        <span className="font-bold text-slate-900 text-sm">{comm.type}</span>
                      </td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-sm text-slate-600">{comm.frequency}</span>
                          <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md w-fit">{comm.tool}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 align-top text-sm text-slate-600 leading-relaxed">
                        {comm.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quality Checks */}
          <section className="flex flex-col h-full">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900">4. Quality Checks</h2>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                {qualityChecks.map((check, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-500/20 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{check}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
