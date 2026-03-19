// src/pages/AppPrivacy.tsx
import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

const smoothFadeUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
  }
};

const motionProps: HTMLMotionProps<"div"> = {
  variants: smoothFadeUp,
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true }
};

const AppPrivacy: React.FC = () => {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  return (
    <div className="w-full bg-white pt-12 md:pt-24 font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <section className={`${sectionPadding} py-10 border-b border-slate-50`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          {/* <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Developer Compliance</span>
          </div> */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
            App Privacy & <br /> <span style={{ color: brandRed }}>Data Safety.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            This declaration provides transparency regarding data handling for all applications under the RAMSTECHCIRCLEOPC legal entity, including the Vertical Living ecosystem.
          </p>
        </motion.div>
      </section>

      {/* --- DATA SAFETY GRID --- */}
      <section className={`${sectionPadding} py-12 md:py-24`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Data Collection & Purpose */}
          <motion.div {...motionProps} className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40">Data Collection & Purpose</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">Why We Collect Data</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                For our internal management systems and the **Vertical Living app**, we collect user-identifiable information to maintain an audit trail of changes.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 rounded-r-2xl" style={{ borderColor: brandRed }}>
                <p className="text-sm font-bold text-slate-900 leading-relaxed italic">
                  "Data is primarily collected to track 'who made the changes' and for critical internal operational processing. This ensures accountability and system integrity."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Sharing Policy */}
          <motion.div {...motionProps} className="space-y-8">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40">Privacy Guarantee</h2>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight uppercase">No Third-Party Sharing</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We maintain a strict zero-sharing policy. No personal or operational data collected through the **Vertical Living App** is shared with external third parties or marketing agencies.
              </p>
              <div className="flex items-center gap-4 text-green-600">
                <i className="fa-solid fa-shield-check text-xl"></i>
                <span className="text-xs font-bold uppercase tracking-widest">End-to-End Encryption Applied</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- RELEVANT APPS SECTION --- */}
      {/* <section className={`${sectionPadding} py-20 bg-slate-50`}>
        <motion.div {...motionProps} className="max-w-7xl mx-auto">
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase opacity-40 mb-12 text-center">Protected Ecosystem</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {['School App', 'CRM System', 'Employee App', 'Customer Portal'].map((app) => (
              <div key={app} className="bg-white p-8 rounded-3xl border border-slate-100 text-center shadow-sm">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{app}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* --- SECURITY FOOTER --- */}
      <section className={`${sectionPadding} py-16 bg-slate-900 text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-red-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Ramstechcircleopc Pvt Ltd</p>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
          <p className="text-sm opacity-60 italic max-w-xl mx-auto leading-loose font-medium">
            For specific queries regarding App Data Safety or to report a privacy concern, 
            please contact our security lead at: <br />
            <a href="mailto:ramstechcircle@gmail.com" className="not-italic font-bold text-white hover:text-red-500 transition-colors">ramstechcircle@gmail.com</a>
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default AppPrivacy;