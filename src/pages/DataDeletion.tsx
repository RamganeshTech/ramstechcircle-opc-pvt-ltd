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

export default function DataDeletion() {
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
            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Privacy Choices</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tighter leading-tight mb-6">
            Data Deletion <span style={{ color: brandRed }}>Request.</span>
          </h1>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            We value your privacy. This page provides a clear process for users to request the permanent removal of their accounts and associated data from the Ramstechopc ecosystem and associated applications.
          </p>
        </motion.div>
      </section>

      {/* --- DELETION PROCESS --- */}
      <section className={`${sectionPadding} py-24`}>
        <div className="max-w-5xl">
          <motion.div {...motionProps} className="space-y-16">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="text-4xl md:text-6xl font-bold opacity-10 leading-none">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-tight">How to Request</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To initiate the deletion of your account and all associated personal data from our systems and mobile apps, please send an email from your registered email address to:
                </p>
                <a href="mailto:rasmtechcircle@gmail.com" style={{ color: brandRed }} className="text-xl md:text-2xl font-bold hover:underline">
                  rasmtechcircle@gmail.com
                </a>
                <p className="mt-4 text-sm font-medium text-gray-400 italic">
                  Subject Line: Account Deletion Request — [Your Full Name]
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-16 border-t border-gray-50">
              <div className="text-4xl md:text-6xl font-bold opacity-10 leading-none">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-tight">What Happens Next</h3>
                <div className="space-y-4 text-gray-600">
                  <p>Upon receiving your request, our privacy team will verify your identity to prevent unauthorized deletions.</p>
                  <p className="p-6 bg-red-50 border-l-4 font-bold text-black" style={{ borderColor: brandRed }}>
                    Once verified, your account and all non-legal associated data will be permanently deleted from our servers within 7 working days.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-16 border-t border-gray-50">
              <div className="text-4xl md:text-6xl font-bold opacity-10 leading-none">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-black uppercase tracking-tight">Legal Data Retention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Please note that while your user profile and app data are deleted, we may be legally required to retain certain information (such as tax invoices, project contracts, or transaction history) for a specific period to comply with Indian corporate and financial regulations.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- CORPORATE FOOTNOTE --- */}
      <section className={`${sectionPadding} py-32 bg-black text-white text-center`}>
        <motion.div {...motionProps}>
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-8">Ramstechcircleopc Pvt Ltd</p>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8"></div>
          <p className="text-sm opacity-60 italic max-w-xl mx-auto">
            This deletion policy applies to all platforms under the RAMSTECHCIRCLEOPC legal entity, 
            including the Vertical Living project applications.
          </p>
        </motion.div>
      </section>
    </div>
  );
}