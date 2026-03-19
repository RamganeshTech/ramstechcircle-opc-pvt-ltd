// src/pages/Disclaimer.tsx
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

const Disclaimer: React.FC = () => {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  const disclaimerPoints = [
    {
      title: "Service Accuracy",
      content: "While we strive to provide the most accurate and up-to-date information, the content provided by Ramstechopc Pvt Ltd and its divisions (Vertical Living, Build My Business) is for general informational purposes only. All technical and design specifications are subject to change."
    },
    {
      title: "Professional Advice",
      content: "The information on this platform does not constitute professional legal, financial, or tax advice. Users are encouraged to consult with our certified experts directly for specific business or architectural requirements."
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to external sites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, or completeness of any information on these external websites."
    },
    {
      title: "Limitation of Liability",
      content: "Ramstechopc Pvt Ltd shall not be held liable for any special, direct, indirect, or incidental damages arising out of the use of our services or the contents of this website."
    }
  ];

  return (
    <div className="w-full bg-white pt-12 font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <section className={`${sectionPadding} py-10 md:py-20 border-b border-slate-50`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          {/* <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Legal Notice</span>
          </div> */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
            <span style={{ color: brandRed }}>Disclaimer.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Please read this disclaimer carefully before using the services provided by RAMSTECHCIRCLEOPC PVT LTD. By accessing our platforms, you agree to the terms outlined below.
          </p>
        </motion.div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className={`${sectionPadding} py-12 md:py-24`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {disclaimerPoints.map((point, index) => (
              <motion.div 
                key={index} 
                {...motionProps}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold text-slate-200 group-hover:text-red-500 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed border-l border-slate-100 pl-6 group-hover:border-red-500 transition-all duration-700">
                  {point.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JURISDICTION NOTE --- */}
      <section className={`${sectionPadding} py-16 bg-slate-50 border-y border-slate-100`}>
        <motion.div {...motionProps} className="max-w-4xl mx-auto text-center">
          <i className="fa-solid fa-scale-balanced text-2xl mb-6" style={{ color: brandRed }}></i>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-4">Jurisdiction</h4>
          <p className="text-sm text-slate-500 font-medium leading-loose">
            Any disputes arising out of the use of this website or our services shall be governed by the laws of India and subject to the exclusive jurisdiction of the courts in **Chennai, Tamil Nadu**.
          </p>
        </motion.div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <section className={`${sectionPadding} py-32 bg-slate-900 text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-red-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Ramstechcircleopc Pvt Ltd</p>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
          <p className="text-xs opacity-50 italic max-w-lg mx-auto leading-loose font-medium">
            Last Updated: March 2026. This disclaimer is subject to periodic updates without prior notice to ensure compliance with changing regulatory standards.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default Disclaimer;