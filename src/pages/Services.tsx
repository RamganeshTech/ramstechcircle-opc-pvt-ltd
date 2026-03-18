// import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

// const smoothFadeUp: Variants = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }
//   }
// };

// const motionProps: HTMLMotionProps<"div"> = {
//   variants: smoothFadeUp,
//   initial: "initial",
//   whileInView: "whileInView",
//   viewport: { once: true }
// };

// export default function Services() {
//   const brandRed = "#e51c23";
//   const sectionPadding = "w-full px-6 md:px-12";

//   return (
//     <div className="w-full bg-white pt-20">
//       {/* --- HERO SECTION --- */}
//       <section className={`${sectionPadding} py-24 border-b border-gray-50`}>
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="max-w-4xl"
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
//             <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Service Spectrum</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter mb-8 leading-tight">
//             Precision <span className="text-gray-300">Design</span> & <br /> 
//             Technical <span style={{ color: brandRed }}>Execution.</span>
//           </h1>
//         </motion.div>
//       </section>

//       {/* --- VERTICAL LIVING (INTERIOR DIVISION) --- */}
//       <section className={`${sectionPadding} py-32 bg-gray-50/50`}>
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div {...motionProps} className="space-y-8">
//             <h2 style={{ color: brandRed }} className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase">
//               Division: Vertical Living
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
//               Luxury Interiors <br /> Across Tamil Nadu.
//             </h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               Based in Chennai, **Vertical Living** is our premier interior design firm specializing in high-end residential and commercial transformations. We blend South Indian architectural heritage with modern global aesthetics to create "Quiet Luxury" spaces.
//             </p>

//             {/* Service List */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
//               {[
//                 { title: "Personalized Consultation", desc: "One-on-one lifestyle & space analysis." },
//                 { title: "3D Layout Generation", desc: "Photorealistic VR walkthroughs before execution." },
//                 { title: "Cutlist Generation", desc: "Precision engineering for zero-waste manufacturing." },
//                 { title: "Turnkey Execution", desc: "From empty shell to fully furnished luxury." }
//               ].map((item, i) => (
//                 <div key={i} className="border-l-2 pl-4 border-gray-200">
//                   <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
//                   <p className="text-xs text-gray-500">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Visual Showcase */}
//           <motion.div {...motionProps} className="relative group overflow-hidden border border-gray-200 shadow-2xl">
//             <img 
//               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80" 
//               alt="Luxury Interior Design" 
//               className="w-full h-[600px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
//             <div className="absolute bottom-8 left-8 text-white">
//                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Project: Anna Nagar Residency</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- CORE TECHNICAL SERVICES --- */}
//       <section className={`${sectionPadding} py-32 bg-black text-white`}>
//         <div className="text-center mb-24">
//           <h2 className="text-[10px] font-bold tracking-[0.6em] uppercase opacity-40 mb-4">Core Infrastructure</h2>
//           <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-12">
//           {[
//             { 
//               num: "01", 
//               title: "Digital Infrastructure", 
//               desc: "Deploying unhackable static architectures for corporate platforms and mobile application backends." 
//             },
//             { 
//               num: "02", 
//               title: "Space Engineering", 
//               desc: "Utilizing advanced CAD and Cutlist protocols to optimize material usage in large-scale interior projects." 
//             },
//             { 
//               num: "03", 
//               title: "Bespoke Consulting", 
//               desc: "Strategic technical roadmaps for turning physical business models into scalable digital products." 
//             }
//           ].map((service, i) => (
//             <motion.div key={i} {...motionProps} className="p-8 border border-white/10 hover:border-white/30 transition-colors">
//               <span style={{ color: brandRed }} className="text-xl font-bold mb-6 block">{service.num}</span>
//               <h4 className="text-xl font-bold mb-4">{service.title}</h4>
//               <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- CITIES WE COVER --- */}
//       {/* <section className={`${sectionPadding} py-24 text-center`}>
//         <motion.div {...motionProps}>
//           <p className="text-gray-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-8">Service Jurisdictions</p>
//           <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-gray-300">
//             <span>CHENNAI</span>
//             <span>MADURAI</span>
//             <span>COIMBATORE</span>
//             <span>TRICHY</span>
//             <span>SALEM</span>
//             <span>TIRUPPUR</span>
//           </div>
//         </motion.div>
//       </section> */}
//     </div>
//   );
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

export default function Services() {
    const brandRed = "#e51c23";
    const sectionPadding = "w-full px-6 md:px-12";

    return (
        <div className="w-full bg-white pt-5 md:pt-10 font-poppins  border-b border-[#1f1f1f]">
            {/* --- HERO SECTION --- */}
            <section className={`${sectionPadding} py-6 md:py-6 border-b border-gray-50`}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl"
                >
                    {/* <div className="flex items-center gap-4 mb-6">
                        <div style={{ backgroundColor: brandRed }} className="w-8 h-[2px]"></div>
                        <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">Service Spectrum</span>
                    </div> */}
                    <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
                        Our  
                        {/* <span className="text-gray-300">Services</span> & <br /> */}
                        {/* Strategic  */}
                        <span style={{ color: brandRed , marginLeft: "15px"}}>Services</span>
                    </h1>
                </motion.div>
            </section>

            {/* --- DIVISION 1: BUILD MY BUSINESS (CONSULTING) --- */}
            <section className={`${sectionPadding} py-8 md:py-16`}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...motionProps} className="space-y-8 lg:order-2">
                        <h2 style={{ color: brandRed }} className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                            Division: Build My Business
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
                            Enterprise Consulting <br /> & Corporate Strategy.
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Empowering startups and established enterprises with the legal and technical foundation required for modern success. From incorporation to digital scale, we are your growth partners.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
                            {[
                                { title: "Registration & Tax", desc: "Firm registration, GST, and expert tax consultation." },
                                { title: "IT Services", desc: "Technology solutions including network security, software development" },
                                { title: "Digital Marketing", desc: "Strategic IT services and result-driven marketing." },
                                { title: "Legal Services", desc: "Professional legal services for individuals and businesses.." }
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 pl-4 border-gray-100">
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">{item.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...motionProps} className="lg:order-1 relative group overflow-hidden border border-gray-100 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                            alt="Business Consulting"
                            className="w-full h-[550px] object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    </motion.div>
                </div>
            </section>

            {/* --- DIVISION 2: VERTICAL LIVING (INTERIOR) --- */}
            <section className={`${sectionPadding} py-8 md:py-16 bg-gray-50/50`}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...motionProps} className="space-y-8">
                        <h2 style={{ color: brandRed }} className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                            Division: Vertical Living
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
                            Luxury Interiors <br /> Across Tamil Nadu.
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Specializing in premium residential transformations in Chennai. We blend structural engineering with luxury aesthetics to redefine modern living spaces.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                {
                                    title: "3D Layout Design",
                                    desc: "High-fidelity software-generated renders for precise visual planning before execution."
                                },
                                { title: "Consultation", desc: "Bespoke lifestyle and interior space analysis." },
                                { title: "Cutlist Generation", desc: "Precision engineering for zero-waste manufacturing." },
                                { title: "Full Turnkey", desc: "From empty shell to fully furnished luxury." }
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 pl-4 border-gray-100">
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-black">{item.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div {...motionProps} className="relative group overflow-hidden border border-gray-200 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                            alt="Luxury Interior Design"
                            className="w-full h-[550px] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE TECHNICAL SERVICES --- */}
            <section className={`${sectionPadding} py-8 md:py-16 bg-black text-white text-center font-poppins`}>
                <div className="mb-24">
                    <h2 className="text-[10px] font-bold  uppercase opacity-40 mb-4 tracking-[0.4em]">Core Infrastructure</h2>
                    <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 text-left">
                    {[
                        {
                            num: "01",
                            title: "Architectural Modeling",
                            desc: "Developing detailed 3D digital models to ensure spatial accuracy and aesthetic alignment before physical construction."
                        },
                        {
                            num: "02",
                            title: "Corporate Strategy",
                            desc: "Building the legal and financial backbone of your firm through expert tax consultation, auditing, and registration services."
                        },
                        {
                            num: "03",
                            title: "Precision Engineering",
                            desc: "Merging CAD accuracy with Vertical Living's signature interior styles to ensure zero-waste and luxury execution."
                        }
                    ].map((service, i) => (
                        <motion.div key={i} {...motionProps} className="p-10 border border-white/5 hover:border-white/20 transition-all group">
                            <span style={{ color: brandRed }} className="text-2xl font-bold mb-6 block group-hover:scale-110 transition-transform origin-left">{service.num}</span>
                            <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}