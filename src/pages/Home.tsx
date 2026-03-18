


// // import { motion } from 'framer-motion';
// import { motion, type HTMLMotionProps } from 'framer-motion';


// const smoothFadeUp: HTMLMotionProps<"div"> = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
// };

// export default function Home() {
//   const brandRed = "#e51c23";

//   return (
//     <div className="w-full bg-white selection:bg-red-100">
//       {/* --- HERO SECTION --- */}
//       <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 overflow-hidden">
//         <div className="w-full z-10">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }}
//             className="max-w-4xl"
//           >
//             <div className="flex items-center gap-4 mb-8">
//               <div className={`w-12 h-[1px] bg-[${brandRed}]`}></div>
//               <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
//                 Infrastructure & Design
//               </span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-bold text-black leading-[1.1] tracking-tighter mb-10">
//               The Art of <br />
//               <span className="text-gray-300">Digital</span> <span className={`text-[${brandRed}]`}>Precision.</span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-medium">
//               Ramstechcircleopc Pvt Ltd operates at the intersection of security and aesthetics, 
//               crafting digital environments that are as resilient as they are refined.
//             </p>
//           </motion.div>
//         </div>

//         {/* Abstract Background Shapes */}
//         <div className="absolute right-0 top-0 w-1/2 h-full -z-10 flex items-center justify-center opacity-10">
//           <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//             className={`w-[500px] h-[500px] border-[1px] border-[${brandRed}] rounded-full`}
//           />
//           <div className="absolute w-[300px] h-[300px] border-[1px] border-black rotate-45"></div>
//         </div>
//       </section>

//       {/* --- ILLUSTRATIVE PHILOSOPHY SECTION --- */}
//       <section className="w-full py-32 bg-gray-50 px-6 md:px-12">
//         <div className="grid lg:grid-cols-2 gap-24 items-center">
//           <motion.div {...smoothFadeUp} className="relative">
//             {/* Minimalist Illustration Placeholder using Shapes */}
//             <div className="aspect-square bg-white border border-gray-200 relative p-12 overflow-hidden shadow-sm">
//               <div className={`absolute top-0 right-0 w-32 h-32 bg-[${brandRed}] opacity-10 rounded-bl-full`}></div>
//               <div className="w-full h-full border border-gray-100 flex flex-col justify-between p-8">
//                 <div className="space-y-4">
//                   <div className="h-1 w-20 bg-black"></div>
//                   <div className="h-1 w-40 bg-gray-200"></div>
//                   <div className="h-1 w-32 bg-gray-200"></div>
//                 </div>
//                 <i className={`fa-solid fa-layer-group text-6xl text-[${brandRed}] opacity-20`}></i>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div {...smoothFadeUp}>
//             <h2 className="text-4xl font-bold mb-8 tracking-tight text-black">Structured Approach</h2>
//             <div className="space-y-12">
//               {[
//                 { title: 'Architectural Integrity', text: 'Every line of code is measured for maximum stability and performance.' },
//                 { title: 'Silent Security', text: 'Protection that exists at the core, requiring no external interventions.' }
//               ].map((item, i) => (
//                 <div key={i} className="group">
//                   <h4 className={`text-[${brandRed}] text-xs font-bold uppercase mb-2 tracking-widest`}>Phase 0{i+1}</h4>
//                   <p className="text-xl font-bold mb-3">{item.title}</p>
//                   <p className="text-gray-500 max-w-md">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- GRID DECORATION SECTION --- */}
//       <section className="w-full py-32 bg-white px-6 md:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
//           {[
//             { label: 'Security', icon: 'fa-shield-halved' },
//             { label: 'Performance', icon: 'fa-bolt-lightning' },
//             { label: 'Reliability', icon: 'fa-fingerprint' }
//           ].map((item, i) => (
//             <motion.div 
//               key={i} 
//               {...smoothFadeUp}
//               className="text-center"
//             >
//               <div className="mb-6 text-gray-200 text-4xl">
//                 <i className={`fa-solid ${item.icon}`}></i>
//               </div>
//               <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">{item.label}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- SUBTLE FINAL SIGNATURE --- */}
//       <section className="w-full py-40 flex items-center justify-center text-center px-6">
//         <motion.div {...smoothFadeUp}>
//           <p className="text-gray-300 text-sm font-bold tracking-[0.5em] uppercase mb-4">Ramstechcircleopc Pvt Ltd</p>
//           <div className={`h-[1px] w-12 bg-[${brandRed}] mx-auto`}></div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


import { motion, type HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';
import Services from './Services';

const smoothFadeUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
};

export default function Home() {
    const brandRed = "#e51c23";
    const sectionPadding = "w-full px-6 md:px-12";

    return (
        <div className="w-full bg-white selection:bg-red-100 font-poppins">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden border-b border-gray-50">
                <div className="w-full z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="max-w-5xl"
                    >
                        {/* <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px]" style={{ backgroundColor: brandRed }}></div>
                            <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
                                Ramstechopc Pvt Ltd
                            </span>
                        </div> */}
                        {/* 
                        <h1 className="text-5xl md:text-8xl font-bold text-black leading-[1.1] tracking-tighter mb-10">
                            The Art of <br />
                            <span className="text-gray-300">Technical</span> <span style={{ color: brandRed }}>Precision.</span>
                        </h1> */}


                        <h1 className="text-3xl md:text-7xl font-bold text-black leading-[1.1] tracking-tighter mb-10 font-poppins">
                            Elevating <br />
                            <span className="text-gray-300">Spaces</span> & <span style={{ color: brandRed }}>Enterprises.</span>
                        </h1>
                        <p className="text-md md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium mb-12">
                            A diversified corporate ecosystem merging luxury interior architecture
                            with strategic business consulting and high-performance infrastructure.
                        </p>

                        <Link to="/contact"
                            className="inline-block px-5 md:px-10 py-4 text-white font-bold text-xs tracking-[0.3em] uppercase rounded-sm transition-transform hover:scale-105"
                            style={{ backgroundColor: brandRed }}
                        >
                            Inquire Now
                        </Link>
                    </motion.div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute right-[-10%] top-0 w-1/2 h-full -z-10 flex items-center justify-center opacity-[0.03]">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="w-[800px] h-[800px] border-[1px] border-black rounded-full"
                    />
                </div>
            </section>

            {/* --- BRIEF ABOUT SECTION (SUBSIDIARIES) --- */}
            <section className={`${sectionPadding} py-8 md:py-16 bg-white`}>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...smoothFadeUp}>
                        <h2 className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-6">Our Ecosystem</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-8">
                            Two Specialized Divisions. <br />One Standard.
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            We operate through two core pillars to provide niche expertise while maintaining
                            the structural integrity of a unified corporate holding.
                        </p>
                        <Link to="/about" className="text-xs font-bold uppercase tracking-widest border-b-2 pb-2 hover:opacity-60 transition-opacity" style={{ borderColor: brandRed }}>
                            Discover Our Story
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div {...smoothFadeUp} className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                            <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-xs" style={{ color: brandRed }}>Vertical Living</h4>
                            <p className="text-sm text-gray-500">Luxury interior design and 3D architectural modeling.</p>
                        </motion.div>
                        <motion.div {...smoothFadeUp} className="p-8 bg-gray-50 border border-gray-100 rounded-sm">
                            <h4 className="font-bold text-black mb-4 uppercase tracking-widest text-xs" style={{ color: brandRed }}>Build My Business</h4>
                            <p className="text-sm text-gray-500">Corporate tax consulting, IT services, and legal registration.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES PREVIEW SECTION --- */}
            <section className={`${sectionPadding} py-8 md:py-16 bg-black text-white overflow-hidden relative`}>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e51c23] opacity-[0.02] -skew-x-12"></div>

                <div className="relative z-10">
                    <motion.div {...smoothFadeUp} className="max-w-3xl mb-24">
                        <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#e51c23] uppercase mb-6 ">Core Services</h2>
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Strategic Execution.</h3>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: 'Architectural Modeling', desc: 'Precision 3D renders for luxury interior transformations.', icon: 'fa-vector-square' },
                            { title: 'Corporate Strategy', desc: 'Firm registration, auditing, and high-level tax consultation.', icon: 'fa-briefcase' },
                            { title: 'Technical Infrastructure', desc: 'Performance IT services and digital business transformation.', icon: 'fa-microchip' }
                        ].map((service, i) => (
                            <motion.div key={i} {...smoothFadeUp} className="group p-10 border border-white/10 hover:border-white/30 transition-all">
                                <i className={`fa-solid ${service.icon} text-2xl mb-8 opacity-20 group-hover:opacity-100 group-hover:text-[#e51c23] transition-all`}></i>
                                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                                <Link to="/services" className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all text-[#e51c23]">
                                    View Details
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- STRUCTURED PHILOSOPHY SECTION --- */}
            {/* --- CONDENSED PHILOSOPHY & LOCATION --- */}
            {/* --- BUSINESS VERTICALS SECTION --- */}
            <section className={`${sectionPadding} py-20 bg-white font-poppins`}>
                <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[300px]">

                    {/* Vertical Living Card */}
                    <motion.div
                        {...smoothFadeUp}
                        className="flex-1 group relative p-10 bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:bg-black"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.4em] text-[#e51c23] uppercase mb-2">Division 01</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-white transition-colors tracking-tighter">
                                    Vertical Living
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors leading-relaxed max-w-xs">
                                Premium interior architecture and 3D modeling for high-end residential spaces.
                            </p>
                            <a 
  href="https://theverticalliving.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest border-b border-gray-300 group-hover:border-white group-hover:text-white transition-all pb-1"
>
  Visit Website
</a>
                        </div>
                        {/* Background Icon Decor */}
                        <i className="fa-solid fa-couch absolute -right-8 -bottom-8 text-8xl opacity-[0.03] group-hover:opacity-10 group-hover:text-white transition-all"></i>
                    </motion.div>

                    {/* Build My Business Card */}
                    <motion.div
                        {...smoothFadeUp}
                        className="flex-1 group relative p-10 bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-500 hover:bg-[#e51c23]"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.4em] text-black group-hover:text-white uppercase mb-2">Division 02</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-white transition-colors tracking-tighter">
                                    Build My Business
                                </h3>
                            </div>
                            <p className="text-sm text-gray-400 group-hover:text-white/60 transition-colors leading-relaxed max-w-xs">
                                Strategic consulting, firm registration, and technical business infrastructure.
                            </p>
                            <a 
  href="https://www.buildmybusines.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-4 inline-block text-[10px] font-bold uppercase tracking-widest border-b border-black group-hover:border-white group-hover:text-white transition-all pb-1"
>
  Visit Website
</a>
                        </div>
                        {/* Background Icon Decor */}
                        <i className="fa-solid fa-briefcase absolute -right-8 -bottom-8 text-8xl opacity-[0.03] group-hover:opacity-10 group-hover:text-white transition-all"></i>
                    </motion.div>

                </div>
            </section>


            <Services />

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="w-full py-40 flex flex-col items-center justify-center text-center px-6 border-t border-gray-50">
                <motion.div {...smoothFadeUp}>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 tracking-tighter">Ready to Build?</h2>
                    <Link to="/contact" className="text-xs font-bold uppercase tracking-[0.4em] border-2 border-black px-12 py-5 hover:bg-black hover:text-white transition-all">
                        Get In Touch
                    </Link>
                    <p className="text-gray-300 text-[10px] font-bold tracking-[0.5em] uppercase mt-16">
                        Ramstechopc Pvt Ltd
                    </p>
                </motion.div>
            </section>
        </div>
    );
}