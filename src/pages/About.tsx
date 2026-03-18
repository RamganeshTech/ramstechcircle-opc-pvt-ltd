// import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

// /**
//  * We define the variants using the Variants type from framer-motion.
//  * This solves the TS(2322) error by ensuring 'ease' is recognized correctly.
//  */
// const smoothFadeUp: Variants = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
//     }
// };

// // Common motion props to avoid repeating viewport settings
// const motionProps: HTMLMotionProps<"div"> = {
//     variants: smoothFadeUp,
//     initial: "initial",
//     whileInView: "whileInView",
//     viewport: { once: true }
// };

// export default function About() {
//     const brandRed = "#e51c23";

//     // Repeated Tailwind classes defined as constants to avoid 'yellow' warnings
//     const sectionPadding = "w-full px-6 md:px-12";

//     return (
//         <div className="w-full bg-white pt-20">
//             {/* --- HERO / HEADER --- */}
//             <section className={`${sectionPadding} py-24 border-b border-gray-50`}>
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.5 }}
//                     className="max-w-4xl"
//                 >
//                     <div className="flex items-center gap-4 mb-6">
//                         <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
//                         <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Corporate Identity</span>
//                     </div>
//                     <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter mb-8 leading-tight">
//                         Defined by <span className="text-gray-300">Integrity</span> <br />
//                         and Technical <span style={{ color: brandRed }}>Rigour.</span>
//                     </h1>
//                 </motion.div>
//             </section>

//             {/* --- VISION & MISSION SECTION --- */}
//             <section className={`${sectionPadding} py-32`}>
//                 <div className="grid lg:grid-cols-2 gap-20 items-start">
//                     <motion.div {...motionProps} className="space-y-8">
//                         {/* <h2 className="text-3xl font-bold tracking-tight text-black uppercase text-xs tracking-[0.4em] opacity-40">Our Mission</h2> */}
//                         <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] text-black uppercase opacity-40 mb-4">
//                             Our Mission
//                         </h2>
//                         <p className="text-2xl md:text-3xl font-bold leading-snug text-gray-800">
//                             To provide the bedrock for digital evolution through secure,
//                             uncompromising static infrastructure.
//                         </p>
//                         <p className="text-gray-500 leading-relaxed text-lg">
//                             At Ramstechcircleopc Pvt Ltd, we believe that the future of the web lies in
//                             simplicity and decentralization. By removing unnecessary complexity,
//                             we eliminate vulnerabilities before they can even be created.
//                         </p>
//                     </motion.div>

//                     {/* Geometric Illustration */}
//                     <motion.div {...motionProps} className="relative aspect-video bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100">
//                         <div style={{ backgroundColor: brandRed }} className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"></div>
//                         <motion.div
//                             animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
//                             transition={{ duration: 15, repeat: Infinity }}
//                             className="w-40 h-40 border border-black/10 rotate-45 flex items-center justify-center"
//                         >
//                             <div style={{ backgroundColor: brandRed }} className="w-20 h-20 opacity-20"></div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* --- CORE VALUES GRID --- */}
//             <section className="w-full py-32 bg-black text-white px-6 md:px-12">
//                 <div className="grid md:grid-cols-3 gap-16">
//                     {[
//                         {
//                             title: 'Security',
//                             desc: 'Every architecture we deploy is hardened by design, ensuring that data integrity remains uncompromised.'
//                         },
//                         {
//                             title: 'Transparency',
//                             desc: 'We operate with full corporate clarity, building trust through open communication and ethical practices.'
//                         },
//                         {
//                             title: 'Excellence',
//                             desc: 'Good enough is never the goal. We strive for precision in every project, regardless of scale.'
//                         }
//                     ].map((value, i) => (
//                         <motion.div
//                             key={i}
//                             {...motionProps}
//                             className="group"
//                         >
//                             <h3 style={{ color: brandRed }} className="text-xs font-bold uppercase tracking-[0.3em] mb-6">0{i + 1}</h3>
//                             <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
//                             <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* --- CORPORATE FOOTNOTE --- */}
//             <section className={`${sectionPadding} py-40 text-center`}>
//                 <motion.div {...motionProps} className="max-w-2xl mx-auto">
//                     <p className="text-gray-300 text-sm font-bold tracking-[0.6em] uppercase mb-8">Ramstechcircleopc Pvt Ltd</p>
//                     <p className="text-gray-400 italic text-sm">
//                         Incorporated with a vision to redefine digital security and structural efficiency.
//                     </p>
//                 </motion.div>
//             </section>
//         </div>
//     );
// }



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

export default function About() {
    const brandRed = "#e51c23";
    const sectionPadding = "w-full px-6 md:px-12";

    return (
        <div className="w-full bg-white pt-10 md:pt-20 font-poppins">
            {/* --- HERO SECTION --- */}
            <section className={`${sectionPadding} py-6 md:py-12 border-b border-gray-50`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl"
                >
                    {/* <div className="flex items-center gap-4 mb-6">
                        <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Corporate Ecosystem</span>
                    </div> */}
                    <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-8 leading-[1.1]">
                        {/* Diversified <span className="text-gray-300">Expertise.</span> <br />
                        Unified <span style={{ color: brandRed }}>Excellence.</span> */}
                        About <span style={{ color: brandRed, marginLeft:"15px" }}>Us</span>
                    </h1>
                </motion.div>
            </section>

            {/* --- CORE HOLDING COMPANY MISSION --- */}
            <section className={`${sectionPadding} py-8 md:py-16`}>
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <motion.div {...motionProps} className="space-y-8">
                        <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-black uppercase opacity-40 mb-4">
                            Parent Organization
                        </h2>
                        <p className="text-2xl md:text-3xl font-bold leading-snug text-gray-800">
                            Ramstech Circle OPC Pvt Ltd serves as the strategic umbrella for specialized industry leaders.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            We believe in decentralizing complexity. By fostering specialized firms under one parent 
                            organization, we ensure that every client receives niche expertise backed by the 
                            structural stability of a global corporation.
                        </p>
                    </motion.div>

                   <motion.div {...motionProps} className="flex flex-col justify-center space-y-12 pl-0 lg:pl-12">
    {[
        { 
            label: "Architectural Precision", 
            detail: "Advanced 3D modeling and cutlist engineering through Vertical Living." 
        },
        { 
            label: "Enterprise Growth", 
            detail: "Legal, tax, and IT consulting handled by Build My Business." 
        },
        { 
            label: "Unified Compliance", 
            detail: "Strict adherence to corporate auditing and Indian regulatory standards." 
        }
    ].map((item, i) => (
        <div key={i} className="group relative">
            {/* Minimalist side-line accent */}
            <div 
                className="absolute -left-6 top-0 bottom-0 w-[1px] opacity-20 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundColor: brandRed }}
            ></div>
            
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-black">
                {item.label}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed font-medium">
                {item.detail}
            </p>
        </div>
    ))}
</motion.div>
                </div>
            </section>

            {/* --- THE SUBSIDIARIES (Vertical Living & Build My Business) --- */}
            <section className={`${sectionPadding} py-32 bg-gray-50/50`}>
                <div className="grid lg:grid-cols-2 gap-12">
                    
                    {/* Brand 1: Vertical Living */}
                    <motion.div {...motionProps} className="bg-white p-10 md:p-16 border border-gray-100 shadow-sm">
                        <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#e51c23] uppercase mb-6">Interior Division</h3>
                        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-black">Vertical Living</h4>
                        <p className="text-gray-500 mb-8 leading-relaxed text-xs md:text-[16px]">
                            Luxury interior design and precision construction based in Chennai. We specialize in 
                            creating 3D architectural layouts and high-end residential transformations across Tamil Nadu.
                        </p>
                        <ul className=" list-disc text-xs font-semibold md:font-bold text-gray-400 space-y-3 uppercase tracking-widest">
                            <li> 3D Layout Generation</li>
                            <li> Cutlist Engineering</li>
                            <li> Turnkey Interiors</li>
                        </ul>
                    </motion.div>

                    {/* Brand 2: Build My Business */}
                    <motion.div {...motionProps} className="bg-white  p-10 md:p-16 border border-gray-100 shadow-sm">
                        <h3 className="text-[10px] font-bold tracking-[0.4em] text-[#e51c23] uppercase mb-6">Consulting Division</h3>
                        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-black">Build My Business</h4>
                        <p className="text-gray-500 mb-8 leading-relaxed text-xs md:text-[16px]">
                            A comprehensive business consulting firm empowering enterprises through innovation. 
                            From legal registration to digital transformation, we bridge the gap between 
                            expertise and remarkable success.
                        </p>
                        <ul className=" list-disc  text-xs font-semibold md:font-bold text-gray-400 space-y-3 uppercase tracking-widest">
                            <li> Tax & Firm Auditing</li>
                            <li> IT & Digital Marketing</li>
                            <li> Legal & Registration</li>
                        </ul>
                    </motion.div>

                </div>
            </section>

            {/* --- VALUE PROPOSITION GRID --- */}
            <section className="w-full py-8 md:py-16 bg-black text-white px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-16">
                    {[
                        {
                            title: 'Strategic Consulting',
                            desc: 'Empowering businesses of all sizes with diverse skillsets and comprehensive industry insights.'
                        },
                        {
                            title: 'Operational Support',
                            desc: 'Always available 24/7 technical and administrative support to foster enduring partnerships.'
                        },
                        {
                            title: 'Competitive Value',
                            desc: 'Unmatched quality at unbeatable prices, merging expertise with creative innovation.'
                        }
                    ].map((value, i) => (
                        <motion.div key={i} {...motionProps} className="group">
                            <h3 style={{ color: brandRed }} className="text-xs font-bold uppercase tracking-[0.3em] mb-6 text-[#e51c23]">Core Pillar 0{i + 1}</h3>
                            <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- CORPORATE FOOTNOTE --- */}
            <section className={`${sectionPadding} py-10 md:py-20 text-center`}>
                <motion.div {...motionProps} className="max-w-2xl mx-auto">
                    <p className="text-gray-300 text-sm font-bold tracking-[0.6em] uppercase mb-4 leading-loose text-center">
                        Ramstechcircleopc Pvt Ltd
                    </p>
                    <div className="w-12 h-[1px] bg-gray-100 mx-auto mb-10"></div>
                    <p className="text-gray-400 italic text-sm">
                        Merging expertise with creativity to set new standards in digital security, interior architecture, and corporate consulting.
                    </p>
                </motion.div>
            </section>
        </div>
    );
}