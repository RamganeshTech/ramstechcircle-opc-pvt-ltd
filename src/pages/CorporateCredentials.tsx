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

export default function CorporateCredentials() {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  return (
    <div className="w-full bg-white pt-20 font-poppins text-[#444]">
      {/* --- HEADER --- */}
      <section className={`${sectionPadding} py-20 border-b border-gray-50`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Trust & Transparency</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-black tracking-tight leading-tight mb-6">
            Corporate <span style={{ color: brandRed }}>Credentials.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl">
            Official registration data and organizational identity for RAMSTECHCIRCLEOPC PVT LTD. 
            This page serves as a verified source for D-U-N-S, and Google enrollment.
          </p>
        </motion.div>
      </section>

      {/* --- CREDENTIALS GRID --- */}
      <section className={`${sectionPadding} py-24`}>
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Legal Identity */}
          <motion.div {...motionProps} className="space-y-12">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-6">Legal Entity Name</h2>
              <p className="text-2xl md:text-3xl font-bold text-gray-800">RAMSTECHCIRCLEOPC PVT LTD</p>
            </div>

            {/* <div>
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-6">Registration Details</h2>
              <div className="space-y-4">
                <p className="text-lg font-bold">CIN: <span className="text-gray-500 font-medium">[Enter your CIN Number here]</span></p>
                <p className="text-lg font-bold">D-U-N-S: <span className="text-gray-500 font-medium">Pending Verification</span></p>
              </div>
            </div> */}

            <div>
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-6">Nature of Business</h2>
              <p className="text-gray-600 leading-relaxed italic">
                A multidisciplinary firm specializing in high-performance technical infrastructure 
                architectures and luxury interior design through its Vertical Living division and Build My Business.
              </p>
            </div>
          </motion.div>

          {/* Contact Verification */}
          <motion.div {...motionProps} className="space-y-12 bg-gray-50 p-8 md:p-12 border border-gray-100 rounded-sm">
            <div>
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-6">Registered Office</h2>
              <p className="text-lg font-bold text-gray-800 leading-relaxed">
                13th, Main Road, Anna Nagar West,<br />
                Anna Nagar (chennai), Chennai,<br />
                Egmore Nungambakkam, Tamil Nadu,<br />
                India, 600040.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 pt-8 border-t border-gray-200">
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-2">Official Domain Email</h3>
                <a href="mailto:rasmtechcircle@gmail.com" className="text-lg font-bold hover:text-[#e51c23] transition-colors">
                  rasmtechcircle@gmail.com
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-2">Business Phone</h3>
                <a href="tel:+919363993814" className="text-lg font-bold hover:text-[#e51c23] transition-colors">
                  +91 93639 93814
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- VERIFICATION FOOTNOTE --- */}
      <section className={`${sectionPadding} py-32 border-t border-gray-50 text-center`}>
        <motion.div {...motionProps} className="max-w-3xl mx-auto">
          {/* <p className="text-gray-300 text-[10px] font-bold tracking-[0.6em] uppercase mb-6">Verification Document</p> */}
          <p className="text-xs text-gray-400">
            All data presented on this page is pulled from official corporate filings. For further 
            verification requests, please contact our administrative department via the official email provided above.
          </p>
        </motion.div>
      </section>
    </div>
  );
}