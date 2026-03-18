import { motion, type Variants,  type HTMLMotionProps } from 'framer-motion';

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

export default function Contact() {
  const brandRed = "#e51c23";
  const sectionPadding = "w-full px-6 md:px-12";

  return (
    <div className="w-full bg-white pt-10 md:pt-20 font-poppins">
      {/* --- HEADER SECTION --- */}
      <section className={`${sectionPadding} py-5 md:py-10 border-b border-gray-50`}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-4xl"
        >
          {/* <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Global Connectivity
            </span>
          </div> */}
          {/* <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter mb-8 leading-tight">
            Let's Start a <br /> 
            <span className="text-gray-300">Technical</span> <span style={{ color: brandRed }}>Dialogue.</span>
          </h1> */}

          <div className="flex items-center gap-4 mb-6">
            <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
              Connect With Us
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-black tracking-tighter leading-tight">
            Contact <span style={{ color: brandRed }}>Information.</span>
          </h1>
        </motion.div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className={`${sectionPadding} py-8 md:py-16`}>
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Address & Info */}
          <motion.div {...motionProps} className="space-y-10">
            <div>
              <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-10">
                Registered Office
              </h2>
              <div className="flex gap-6">
                <i className="fa-solid fa-location-dot mt-1 text-xl" style={{ color: brandRed }}></i>
                <p className="text-md md:text-xl font-bold text-gray-800 leading-relaxed">
                  13th, Main Road, Anna Nagar West,<br />
                  Anna Nagar (chennai), Chennai,<br />
                  Egmore Nungambakkam, Tamil Nadu,<br />
                  India, 600040.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40">Email</h3>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope" style={{ color: brandRed }}></i>
                  <a href="mailto:ramstechcircle@gmail.com" className="text-md md:text-lg font-bold hover:opacity-70 transition-opacity">
                    ramstechcircle@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40">Phone</h3>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-phone" style={{ color: brandRed }}></i>
                  <a href="tel:+919363993814" className="text-md md:text-lg font-bold hover:opacity-70 transition-opacity">
                    +91 93639 93814
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Minimalist Shape-based Illustration */}
         {/* Right Side: Contact Summary Card */}
<motion.div {...motionProps} className="flex flex-col justify-center">
  <div className="bg-gray-50 p-8 md:p-12 border border-gray-100 rounded-sm relative overflow-hidden">
    {/* Subtle Background Accent */}
    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] -mr-16 -mt-16 rounded-full" style={{ backgroundColor: brandRed }}></div>
    
    <h3 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-8">
      Quick Connection
    </h3>

    <div className="space-y-8">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Direct Mail</p>
        <a href="mailto:ramstechcircle@gmail.com" className="text-xl md:text-2xl font-bold block hover:text-[#e51c23] transition-colors">
          ramstechcircle@gmail.com
        </a>
      </div>

      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Primary Line</p>
        <a href="tel:+919363993814" className="text-xl md:text-2xl font-bold block hover:text-[#e51c23] transition-colors">
          +91 93639 93814
        </a>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400 font-medium">
          Available for consultations Monday through Friday, <br className="hidden md:block" /> 
          09:00 AM — 06:00 PM (IST).
        </p>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </section>

      {/* --- CORPORATE FOOTNOTE --- */}
      <section className={`${sectionPadding} py-20 border-t border-gray-50 text-center`}>
        <motion.div {...motionProps}>
          <p className="text-gray-300 text-sm font-bold tracking-[0.6em] uppercase mb-4">Ramstechcircleopc Pvt Ltd</p>
          <div className="w-12 h-[1px] mx-auto" style={{ backgroundColor: brandRed }}></div>
        </motion.div>
      </section>
    </div>
  );
}