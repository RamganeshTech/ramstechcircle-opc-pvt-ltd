// // import React from 'react';

// // const TermsOfUse: React.FC = () => {
// //     const brandRed = "#e51c23";
// //     const lastUpdated = "March 18, 2026";

// //     return (
// //         <div className="min-h-screen bg-white font-poppins text-[#444] leading-relaxed pt-20">
// //             <main className="w-full px-6 md:px-12 py-16 md:py-24">
                
// //                 {/* Header */}
// //                 <div className="mb-12">
// //                     <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tighter">
// //                         Terms of Use
// //                     </h1>
// //                     <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
// //                         Last Updated: {lastUpdated}
// //                     </p>
// //                 </div>

// //                 <div className="space-y-16 max-w-5xl">
                    
// //                     {/* 1. Acceptance of Terms */}
// //                     <section>
// //                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-[0.1em] opacity-50">1. Site Usage Terms</h2>
// //                         <p className="text-lg">
// //                             By accessing <strong style={{ color: brandRed }}>ramstechcircleopc.com</strong>, you agree to comply with and be bound by these Terms of Use. If you do not agree, please discontinue use of our site and services immediately.
// //                         </p>
// //                     </section>

// //                     {/* 2. Intellectual Property */}
// //                     <section>
// //                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 uppercase tracking-[0.1em] opacity-50">2. Intellectual Property</h2>
// //                         <p className="mb-4">
// //                             All content on this website, including but not limited to the **Vertical Living** portfolio, 3D layouts, cutlist protocols, infrastructure designs, text, and logos, is the exclusive property of <strong className="text-black">RAMSTECHCIRCLEOPC PVT LTD</strong>.
// //                         </p>
// //                         <p className="p-4 bg-gray-50 border-l-2" style={{ borderColor: brandRed }}>
// //                             Unauthorized reproduction, modification, or distribution of our proprietary design methods and technical documentation is strictly prohibited and protected under Indian Copyright Laws.
// //                         </p>
// //                     </section>

// //                     {/* 3. No Misuse / False Submissions */}
// //                     <section>
// //                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4  uppercase tracking-[0.1em] opacity-50">3. User Conduct</h2>
// //                         <p className="mb-4 text-black font-bold">You agree NOT to:</p>
// //                         <ul className="list-disc pl-6 space-y-2">
// //                             <li>Provide false information or impersonate others through our lead forms.</li>
// //                             <li>Attempt to breach the technical security of our static infrastructure.</li>
// //                             <li>Use our contact details for unsolicited marketing or spam.</li>
// //                         </ul>
// //                     </section>

// //                     {/* 4. Service Limitations & Disclaimers */}
// //                     <section>
// //                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4  uppercase tracking-[0.1em] opacity-50">4. Service Limitations & Disclaimers</h2>
// //                         <div className="space-y-4">
// //                             <p>
// //                                 **Interior Design:** 3D layouts and visual renders are conceptual representations. Final execution may vary based on material availability and site conditions.
// //                             </p>
// //                             <p>
// //                                 **Website Accuracy:** While we strive for precision, we provide this site "as is" without any express warranties regarding the absolute accuracy of technical documentation or project timelines.
// //                             </p>
// //                         </div>
// //                     </section>

// //                     {/* 5. Jurisdiction / Governing Law */}
// //                     <section>
// //                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4  uppercase tracking-[0.1em] opacity-50">5. Governing Law</h2>
// //                         <p>
// //                             These terms are governed by the laws of <strong className="text-black">India</strong>. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts in <strong className="text-black">Chennai, Tamil Nadu</strong>.
// //                         </p>
// //                     </section>

// //                     {/* 6. Business Contact Details */}
// //                     <section className="bg-black text-white p-10 md:p-16 rounded-sm">
// //                         <h2 className="text-2xl font-bold mb-8">Official Correspondence</h2>
// //                         <div className="space-y-4 not-italic opacity-80">
// //                             <p className="font-bold text-xl" style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</p>
// //                             <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
// //                             <p>Chennai, Tamil Nadu, India, 600040.</p>
// //                             <div className="pt-6 border-t border-white/10">
// //                                 <p className="text-sm tracking-widest uppercase">Email: rasmtechcircle@gmail.com</p>
// //                             </div>
// //                         </div>
// //                     </section>
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // };

// // export default TermsOfUse;



// import React from 'react';

// const TermsOfUse: React.FC = () => {
//     const brandRed = "#e51c23";
//     const lastUpdated = "March 18, 2026";

//     return (
//         <div className="min-h-screen bg-white font-poppins text-[#444] leading-relaxed pt-5 md:pt-10">
//             <main className="w-full px-6 md:px-12 py-8 md:py-12">
                
//                 {/* Header */}
//                 <div className="mb-20">
//                     <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
//                         Terms of Use
//                     </h1>
//                     <div className="flex items-center gap-3">
//                         <div style={{ backgroundColor: brandRed }} className="w-10 h-[2px]"></div>
//                         <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
//                             Last Updated: {lastUpdated}
//                         </p>
//                     </div>
//                 </div>

//                 <div className="space-y-20 max-w-5xl">
                    
//                     {/* 1. Acceptance of Terms */}
//                     <section>
//                         <div className="flex items-center gap-4 mb-6">
//                             <span className="text-sm font-bold opacity-20 tracking-tighter text-black">01</span>
//                             <h2 className="text-xl font-bold text-black uppercase tracking-widest">Site Usage Terms</h2>
//                         </div>
//                         <p className="text-lg leading-relaxed">
//                             By accessing <strong style={{ color: brandRed }}>ramstechcircleopc.com</strong>, you agree to comply with and be bound by these Terms of Use. These terms apply to all visitors, users, and clients of <strong className="text-black">RAMSTECHCIRCLEOPC PVT LTD</strong> and its subsidiaries.
//                         </p>
//                     </section>

//                     {/* 2. Intellectual Property */}
//                     <section>
//                         <div className="flex items-center gap-4 mb-6">
//                             <span className="text-sm font-bold opacity-20 tracking-tighter text-black">02</span>
//                             <h2 className="text-xl font-bold text-black uppercase tracking-widest">Intellectual Property</h2>
//                         </div>
//                         <p className="mb-6">
//                             All content on this website, including but not limited to the <strong className="text-black">Vertical Living</strong> design portfolios, <strong className="text-black">Build My Business</strong> consulting frameworks, 3D layouts, technical infrastructure designs, and proprietary code, is the exclusive property of <strong className="text-black">RAMSTECHCIRCLEOPC PVT LTD</strong>.
//                         </p>
//                         <div className="p-6 bg-gray-50 border-l-4 rounded-sm" style={{ borderColor: brandRed }}>
//                             <p className="text-sm font-medium italic text-gray-600">
//                                 Unauthorized reproduction, scraping, or distribution of our proprietary consulting methodologies or architectural documentation is strictly prohibited under Indian Copyright Laws.
//                             </p>
//                         </div>
//                     </section>

//                     {/* 3. User Conduct */}
//                     <section>
//                         <div className="flex items-center gap-4 mb-6">
//                             <span className="text-sm font-bold opacity-20 tracking-tighter text-black">03</span>
//                             <h2 className="text-xl font-bold text-black uppercase tracking-widest">User Conduct</h2>
//                         </div>
//                         <p className="mb-4 font-bold text-black">To maintain the integrity of our ecosystem, you agree NOT to:</p>
//                         <ul className="grid md:grid-cols-2 gap-4">
//                             {[
//                                 "Submit false data via Build My Business lead forms.",
//                                 "Attempt to breach our static security infrastructure.",
//                                 "Impersonate any RAMSTECHCIRCLEOPC representative.",
//                                 "Use our technical documentation for unauthorized commercial gain."
//                             ].map((text, i) => (
//                                 <li key={i} className="flex gap-3 text-sm">
//                                     <span style={{ color: brandRed }}>•</span> {text}
//                                 </li>
//                             ))}
//                         </ul>
//                     </section>

//                     {/* 4. Service Limitations */}
//                     <section>
//                         <div className="flex items-center gap-4 mb-6">
//                             <span className="text-sm font-bold opacity-20 tracking-tighter text-black">04</span>
//                             <h2 className="text-xl font-bold text-black uppercase tracking-widest">Service Limitations</h2>
//                         </div>
//                         <div className="space-y-6">
//                             <p>
//                                 <strong className="text-black">Vertical Living:</strong> Architectural renders and 3D walkthroughs are conceptual. Physical execution depends on site-specific engineering and material availability.
//                             </p>
//                             <p>
//                                 <strong className="text-black">Build My Business:</strong> Consulting advice, tax insights, and legal registration support are provided based on current Indian regulations. RAMSTECHCIRCLEOPC is not liable for changes in government policy post-consultation.
//                             </p>
//                         </div>
//                     </section>

//                     {/* 5. Governing Law */}
//                     <section>
//                         <div className="flex items-center gap-4 mb-6">
//                             <span className="text-sm font-bold opacity-20 tracking-tighter text-black">05</span>
//                             <h2 className="text-xl font-bold text-black uppercase tracking-widest">Governing Law</h2>
//                         </div>
//                         <p>
//                             Any disputes arising from the use of this website or the services of our divisions shall be subject to the exclusive jurisdiction of the courts in <strong className="text-black">Chennai, Tamil Nadu, India</strong>.
//                         </p>
//                     </section>

//                     {/* 6. Contact Box */}
//                     <section className="bg-black text-white p-10 md:p-16 rounded-sm">
//                         <h2 className="text-2xl font-bold mb-8">Official Correspondence</h2>
//                         <div className="space-y-4 not-italic opacity-80">
//                             <p className="font-bold text-xl" style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</p>
//                             <p className="text-sm md:text-base">13th, Main Road, Anna Nagar West, Anna Nagar (Chennai), Tamil Nadu, 600040.</p>
//                             <div className="pt-6 border-t border-white/10">
//                                 <p className="text-xs tracking-[0.3em] uppercase">Email: rasmtechcircle@gmail.com</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default TermsOfUse;


import React from 'react';

const TermsOfUse: React.FC = () => {
    const brandRed = "#e51c23";
    const lastUpdated = "March 18, 2026";

    return (
        <div className="min-h-screen bg-white font-poppins text-[#444] leading-relaxed pt-20">
            <main className="w-full px-6 md:px-12 py-16 md:py-24">
                
                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-12 tracking-tighter">
                    Terms of Use
                </h1>

                {/* Last Updated Date */}
                <div className="mb-12">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                <div className="space-y-16 max-w-5xl">
                    
                    {/* 1. Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Site Usage Terms</h2>
                        <p className="text-lg">
                            By accessing <strong style={{ color: brandRed }}>ramstechcircleopc.com</strong>, you agree to comply with and be bound by these Terms of Use. These terms apply to all visitors, users, and clients of <strong className="text-[#1a1a1a]">RAMSTECHCIRCLEOPC PVT LTD</strong> and its subsidiaries, including <strong className="text-[#1a1a1a]">Build My Business</strong> and <strong className="text-[#1a1a1a]">Vertical Living</strong>.
                        </p>
                    </section>

                    {/* 2. Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">2. Intellectual Property</h2>
                        <div className="space-y-4">
                            <p>
                                All content on this website, including but not limited to the <strong className="text-[#1a1a1a]">Vertical Living</strong> design portfolios, <strong className="text-[#1a1a1a]">Build My Business</strong> consulting frameworks, 3D layouts, technical infrastructure designs, text, and logos, is the exclusive property of <strong className="text-[#1a1a1a]">RAMSTECHCIRCLEOPC PVT LTD</strong>.
                            </p>
                            <p className="p-6 bg-gray-50 border-l-4 rounded-sm" style={{ borderColor: brandRed }}>
                                Unauthorized reproduction, modification, or distribution of our proprietary design methods, technical documentation, or consulting methodologies is strictly prohibited and protected under Indian Copyright Laws.
                            </p>
                        </div>
                    </section>

                    {/* 3. User Conduct */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">3. User Conduct</h2>
                        <p className="mb-4">To maintain the security of our platforms, you agree NOT to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-gray-300">
                            <li>Provide false information or impersonate others through our lead forms.</li>
                            <li>Attempt to breach the technical security of our static infrastructure.</li>
                            <li>Use our contact details for unsolicited marketing or spam.</li>
                            <li>Misuse the business consulting tools provided by Build My Business.</li>
                        </ul>
                    </section>

                    {/* 4. Service Limitations & Disclaimers */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">4. Service Limitations & Disclaimers</h2>
                        <div className="space-y-6">
                            <div className="pl-6 border-l-2 border-gray-100 font-medium text-sm md:text-base">
                                <p className="mb-4">
                                    <strong className="text-[#1a1a1a]">Interior Design (Vertical Living):</strong> 3D layouts and visual renders are conceptual representations. Final execution may vary based on material availability and site-specific conditions.
                                </p>
                                <p>
                                    <strong className="text-[#1a1a1a]">Consulting (Build My Business):</strong> Business strategies, tax insights, and legal registration support are provided based on current regulations. We are not liable for changes in government policy post-consultation.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Jurisdiction / Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Governing Law</h2>
                        <p>
                            These terms are governed by the laws of <strong className="text-[#1a1a1a]">India</strong>. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts in <strong className="text-[#1a1a1a]">Chennai, Tamil Nadu</strong>.
                        </p>
                    </section>

                    {/* 6. Contact Info */}
                    <section className="bg-black text-white p-10 md:p-16 rounded-sm">
                        <h2 className="text-2xl font-bold mb-8">Official Correspondence</h2>
                        <div className="space-y-4 not-italic opacity-80">
                            <p className="font-bold text-xl" style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</p>
                            <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
                            <p>Chennai, Tamil Nadu, India, 600040.</p>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-sm tracking-widest uppercase">Email: rasmtechcircle@gmail.com</p>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default TermsOfUse;