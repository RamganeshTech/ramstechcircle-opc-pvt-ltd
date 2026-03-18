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

export default function Support() {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  const supportCategories = [
    { title: "Project Inquiry", icon: "fa-hard-hat" },
    { title: "Technical Support", icon: "fa-gears" },
    { title: "Interior Design Help", icon: "fa-couch" },
    { title: "Account & Billing", icon: "fa-file-invoice-dollar" }
  ];

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
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tighter leading-tight mb-6">
            Customer <span style={{ color: brandRed }}>Support.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Need assistance with your project or our digital platforms? 
            The RAMSTECHCIRCLEOPC team is here to provide high-performance solutions.
          </p>
        </motion.div>
      </section>

      {/* --- SUPPORT CHANNELS --- */}
      <section className={`${sectionPadding} py-24`}>
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Email Support */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-envelope text-3xl mb-8" style={{ color: brandRed }}></i>
            <h3 className="text-xl font-bold mb-4">Official Support</h3>
            <a href="mailto:rasmtechcircle@gmail.com" className="text-lg font-bold hover:underline break-all">
              rasmtechcircle@gmail.com
            </a>
            <p className="text-sm text-gray-500 mt-4 font-medium italic">Expected response: 24-48 Hours</p>
          </motion.div>

          {/* Phone / WhatsApp */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-phone text-3xl mb-8" style={{ color: brandRed }}></i>
            <h3 className="text-xl font-bold mb-4">Call / WhatsApp</h3>
            <a href="tel:+919363993814" className="text-lg font-bold hover:underline block mb-2">
              +91 93639 93814
            </a>
            <p className="text-sm text-gray-500 mt-4 font-medium">Instant messaging available during work hours.</p>
          </motion.div>

          {/* Timing & SLA */}
          <motion.div {...motionProps} className="p-10 border border-gray-100 bg-gray-50 rounded-sm">
            <i className="fa-solid fa-clock text-3xl mb-8" style={{ color: brandRed }}></i>
            <h3 className="text-xl font-bold mb-4">Support Hours</h3>
            <p className="text-lg font-bold text-gray-800 uppercase tracking-tight leading-snug">
              Mon — Fri <br />
              09:00 AM — 06:00 PM
            </p>
            <p className="text-xs text-gray-400 mt-4 font-bold tracking-widest uppercase">Timezone: IST (UTC +5:30)</p>
          </motion.div>
        </div>
      </section>

      {/* --- ISSUE CATEGORIES --- */}
      <section className={`${sectionPadding} py-24 bg-black text-white`}>
        <motion.div {...motionProps} className="max-w-4xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Issue Categories</h2>
          <p className="text-gray-400">Please mention your category in the subject line for faster processing.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {supportCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-white/10 group-hover:border-[#e51c23] transition-colors rounded-sm">
                <i className={`fa-solid ${cat.icon} text-xl opacity-40 group-hover:opacity-100 group-hover:text-[#e51c23]`}></i>
              </div>
              <p className="font-bold text-xs uppercase tracking-[0.2em]">{cat.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FAQ REDIRECT --- */}
      <section className={`${sectionPadding} py-32 text-center`}>
        <motion.div {...motionProps}>
            <p className="text-gray-300 text-[10px] font-bold tracking-[0.6em] uppercase mb-8 leading-relaxed">
              Ramstechopc App Ecosystem Support Links
            </p>
            <div className="h-[1px] w-20 bg-gray-100 mx-auto mb-8"></div>
            {/* <p className="text-sm text-gray-400 italic">
              Detailed FAQs and app-specific troubleshooting guides are currently in development.
            </p> */}
        </motion.div>
      </section>
    </div>
  );
}