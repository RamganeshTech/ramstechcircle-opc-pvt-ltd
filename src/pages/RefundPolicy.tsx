// src/pages/RefundPolicy.tsx
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

const RefundPolicy: React.FC = () => {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  return (
    <div className="w-full bg-white pt-12 font-sans text-slate-700">
      
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
            <span className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Financial Transparency</span>
          </div> */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-6 uppercase">
            Refund & <br /> <span style={{ color: brandRed }}>Cancellation.</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
            Our commitment to professional integrity includes clear financial guidelines. Please review our policy regarding service cancellations and refund eligibility.
          </p>
        </motion.div>
      </section>

      {/* --- POLICY DETAILS --- */}
      <section className={`${sectionPadding} py-12`}>
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* 1. Government Fees */}
          <motion.div {...motionProps} className="grid md:grid-cols-3 gap-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800">1. Statutory Fees</h3>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase">Non-Refundable Government Charges</h2>
              <p className="leading-relaxed font-medium text-slate-500">
                Any fees paid to government bodies, regulatory authorities, or for the procurement of stamp papers, GST filings, and MCA registrations are **100% non-refundable**. Once these funds are disbursed to the respective authorities, RAMSTECHCIRCLEOPC PVT LTD cannot recover or refund these amounts.
              </p>
            </div>
          </motion.div>

          {/* 2. Cancellation Policy */}
          <motion.div {...motionProps} className="grid md:grid-cols-3 gap-8 pt-2 md:pt-16 border-t border-slate-50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800">2. Cancellations</h3>
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase">Service Termination</h2>
              <div className="p-4 md:p-8 bg-red-50 border-l-4 rounded-r-2xl" style={{ borderColor: brandRed }}>
                <p className="text-md md:text-lg font-bold text-slate-900 leading-tight">
                  "Once the document processing has started, cancellation is not possible."
                </p>
              </div>
              <p className="leading-relaxed font-medium text-slate-500">
                Clients are advised that our operational workflows begin immediately upon receipt of required documentation. After this phase has commenced, the service is considered active and non-cancellable.
              </p>
            </div>
          </motion.div>

          {/* 3. Refund Process */}
          <motion.div {...motionProps} className="grid md:grid-cols-3 gap-8 pt-2 md:pt-16 border-t border-slate-50">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-800">3. The Process</h3>
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase">How to Request a Refund</h2>
              <p className="leading-relaxed font-medium text-slate-500">
                Eligible refund requests (for service fees where processing has not yet started) must be submitted in writing via our official communication channel:
              </p>
              <div className="space-y-2">
                <a href="mailto:ramstechcircle@gmail.com" style={{ color: brandRed }} className="text-xl font-bold hover:underline">
                  ramstechcircle@gmail.com
                </a>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Subject: Refund Request — [Client Name / Service Type]</p>
              </div>
              <p className="text-sm font-bold text-slate-900 bg-slate-50 p-4 inline-block rounded-lg">
                Processing Timeline: 7 to 10 Business Days
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- CORPORATE FOOTER --- */}
      <section className={`${sectionPadding} py-16 bg-slate-900 text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-red-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Ramstechcircleopc Pvt Ltd</p>
          <div className="w-12 h-[1px] bg-white/10 mx-auto mb-8"></div>
          <p className="text-xs opacity-60 italic max-w-xl mx-auto leading-loose font-medium px-4">
            This policy is strictly enforced to maintain the quality and speed of our professional services. 
            Final decisions regarding refund eligibility rests with the management of RAMSTECHCIRCLEOPC PVT LTD.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default RefundPolicy;