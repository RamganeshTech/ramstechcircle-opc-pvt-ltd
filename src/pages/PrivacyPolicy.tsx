// import React from 'react';
// import { Link } from 'react-router-dom';

// const PrivacyPolicy: React.FC = () => {
//     const brandRed = "#e51c23";

//     return (
//         <div className="min-h-screen bg-white font-sans text-[#444] leading-relaxed pt-20">
//             {/* Main Content Container */}
//             <main className="w-full px-6 md:px-12 py-16 md:py-24">
                
//                 {/* Main Heading */}
//                 <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-12 tracking-tighter">
//                     Privacy Policy
//                 </h1>

//                 {/* Introduction Text */}
//                 <div className="space-y-6 text-[17px] md:text-[19px] mb-16 max-w-5xl">
//                     <p>
//                         <strong className="text-[#1a1a1a]">Vertical Living</strong> ("we", "our", "us"), a specialized division of <strong style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</strong>, is an interior design and technical infrastructure firm operating in India. We are committed to protecting the privacy and personal data of our clients, website visitors, and leads.
//                     </p>
//                     <p>
//                         This Privacy Policy explains how we collect, use, and protect personal information in compliance with the <strong className="text-[#1a1a1a]">Information Technology Act, 2000</strong> and the <strong className="text-[#1a1a1a]">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
//                     </p>
//                     <p className="font-bold text-[#1a1a1a] uppercase text-sm tracking-widest">
//                         Published by RAMSTECHCIRCLEOPC PVT LTD
//                     </p>
//                     <p>
//                         This policy applies to our digital presence and our website <Link to={'/'} style={{ color: brandRed }} className="font-bold hover:underline">ramstechcircleopc.com</Link>.
//                     </p>
//                 </div>

//                 {/* Policy Points */}
//                 <div className="space-y-16 max-w-5xl">
                    
//                     {/* 1. Scope */}
//                     <section>
//                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Scope of This Policy</h2>
//                         <ul className="list-disc pl-6 space-y-2" style={{ listStyleType: 'disc' }}>
//                             <li className="pl-2">Corporate Website and Portfolios</li>
//                             <li className="pl-2">Lead forms and Customer communications (WhatsApp, Email)</li>
//                             <li className="pl-2">Offline data collected during Chennai site visits or consultations</li>
//                         </ul>
//                     </section>

//                     {/* 2. Information We Collect */}
//                     <section>
//                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">2. Information We Collect</h2>
//                         <div className="space-y-8 pl-6 border-l-2 border-gray-100">
//                             <div>
//                                 <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-xs">a) Identification Information</h3>
//                                 <p className="text-sm">Name, Phone number, Email address, and Location within Tamil Nadu.</p>
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-[#1a1a1a] mb-3 uppercase tracking-wider text-xs">b) Project-Related Information</h3>
//                                 <p className="text-sm">Property dimensions for 3D Layouts and Cutlist generation preferences.</p>
//                             </div>
//                         </div>
//                     </section>

//                     {/* 3. Purpose */}
//                     <section>
//                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">3. Purpose of Data Collection</h2>
//                         <ul className="list-disc pl-6 space-y-2">
//                             <li className="pl-2">To provide luxury interior quotations and 3D consultations.</li>
//                             <li className="pl-2">To manage technical service delivery for Ramstechcircleopc clients.</li>
//                             <li className="pl-2">To comply with legal and regulatory obligations for DUNS verification.</li>
//                         </ul>
//                     </section>

//                     {/* 9. User Rights */}
//                     <section>
//                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">4. Your Rights (DPDP Act, 2023)</h2>
//                         <p className="mb-4">You have the right to access, correct, or request the deletion of your personal data. Requests are processed within 7 working days.</p>
//                     </section>

//                     {/* 13. Account Deletion */}
//                     <section className="p-8 border border-gray-100 rounded-sm">
//                         <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">5. Data Deletion Request</h2>
//                         <div className="space-y-4">
//                             <p>To request deletion of your associated personal data, users must send an email to:</p>
//                             <a href="mailto:ramstechcircle@gmail.com" style={{ color: brandRed }} className="font-bold text-xl block hover:underline">
//                                 rasmtechcircle@gmail.com
//                             </a>
//                             <p className="text-sm text-gray-400">Please include your registered name and phone number for verification.</p>
//                         </div>
//                     </section>

//                     {/* 14. Contact Info */}
//                     <section className="bg-black text-white p-10 md:p-16 rounded-sm">
//                         <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
//                         <div className="space-y-4 not-italic opacity-80">
//                             <p className="font-bold text-xl" style={{ color: brandRed }}>Ramstechcircleopc Pvt Ltd</p>
//                             <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
//                             <p>Chennai, Tamil Nadu, India, 600040.</p>
//                             <div className="pt-6 space-y-2">
//                                 <p><span className="font-bold opacity-50">Email:</span> rasmtechcircle@gmail.com</p>
//                                 <p><span className="font-bold opacity-50">Phone:</span> +91 93639 93814</p>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default PrivacyPolicy;



import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    const brandRed = "#e51c23";
    const lastUpdated = "March 18, 2026";

    return (
        <div className="min-h-screen bg-white font-poppins text-[#444] leading-relaxed pt-20">
            <main className="w-full px-6 md:px-12 py-16 md:py-24">
                
                {/* Header & Meta Info */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tighter">
                        Privacy Policy
                    </h1>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Effective Date: {lastUpdated}
                    </p>
                </div>

                <div className="space-y-6 text-[17px] md:text-[19px] mb-16 max-w-5xl">
                    <p>
                        This Privacy Policy describes how <strong className="text-[#1a1a1a]">Vertical Living</strong> and <strong className="text-[#1a1a1a]">Build My Business</strong>, a specialized division owned and operated by <strong style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</strong> ("Legal Business Name"), collects, uses, and protects your information. 
                    </p>
                    <p>
                        We operate in compliance with the <strong className="text-[#1a1a1a]">Digital Personal Data Protection Act, 2023</strong> and the <strong className="text-[#1a1a1a]">IT Act, 2000</strong>. This policy applies to our website <Link to={'/'} style={{ color: brandRed }} className="font-bold hover:underline">ramstechcircleopc.com</Link> and all related service interactions.
                    </p>
                </div>

                <div className="space-y-16 max-w-5xl">
                    
                    {/* 1. Website Owner Identity */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Business Identity</h2>
                        <p>The website is owned and managed by <strong className="text-[#1a1a1a]">RAMSTECHCIRCLEOPC PVT LTD</strong>. We are a registered entity in Tamil Nadu, India, providing technical infrastructure and premium interior design services.</p>
                    </section>

                    {/* 2. Personal Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">2. Data We Collect</h2>
                        <div className="space-y-6 pl-6 border-l-2 border-gray-100 font-medium">
                            <p>We only collect data that you voluntarily provide through our lead forms, emails, or direct consultations:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and Contact Number</li>
                                <li>Email Address</li>
                                <li>Service requirements (Interior measurements/Technical specs)</li>
                                {/* <li>Location/Address for site visits</li> */}
                            </ul>
                        </div>
                    </section>

                    {/* 3. Use of Data & Third Parties */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">3. Use of Information & Third-Party Sharing</h2>
                        <p className="mb-4">We use your data strictly to provide quotations, manage consultations, and deliver services. </p>
                        <div className="bg-red-50 p-6 border-l-4" style={{ borderColor: brandRed }}>
                            <p className="font-bold text-black uppercase text-xs tracking-widest mb-2">Strict Privacy Guarantee:</p>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li>• We <strong className="text-black">DO NOT sell</strong> your personal data to any third parties.</li>
                                <li>• We <strong className="text-black">DO NOT share</strong> your data with external marketing agencies.</li>
                                <li>• Your data is only disclosed if required by Indian Law or for DUNS verification purposes.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 4. Cookies & Analytics */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. Cookies & Tracking</h2>
                        <p>Our website is built on a high-performance static architecture. Currently, we <strong className="text-black">DO NOT use cookies</strong>, Meta Pixels, or Google Analytics tracking on this platform. We prioritize your anonymity while browsing.</p>
                    </section>

                    {/* 5. Retention Period */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Data Retention</h2>
                        <p>We retain your information only as long as the service inquiry is active or as required for legal/accounting records. Once the purpose is fulfilled, and upon your request, we securely purge all identifying data from our local systems.</p>
                    </section>

                    {/* 6. User Rights & Deletion */}
                    <section className="p-8 border border-gray-100 rounded-sm bg-gray-50">
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">6. Your Rights & Deletion Process</h2>
                        <p className="mb-6 font-medium">Under the DPDP Act 2023, you have the right to withdraw consent and request data erasure.</p>
                        <div className="space-y-4">
                            <p className="font-bold text-xs uppercase tracking-widest opacity-60">To request deletion, contact our Privacy Officer:</p>
                            <a href="mailto:rasmtechcircle@gmail.com" style={{ color: brandRed }} className="font-bold text-xl block hover:underline">
                                rasmtechcircle@gmail.com
                            </a>
                            <p className="text-sm">Please provide your registered mobile number for verification. Requests are finalized within <strong className="text-black">7 working days</strong>.</p>
                        </div>
                    </section>

                    {/* 7. Contact Information */}
                    <section className="bg-black text-white p-10 md:p-16 rounded-sm">
                        <h2 className="text-2xl font-bold mb-8">Official Contact</h2>
                        <div className="space-y-4 not-italic opacity-80">
                            <p className="font-bold text-xl" style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</p>
                            <p>13th, Main Road, Anna Nagar West, Anna Nagar (chennai),</p>
                            <p>Chennai, Tamil Nadu, India, 600040.</p>
                            <div className="pt-6 border-t border-white/10 space-y-2">
                                <p><span className="font-bold opacity-50 uppercase text-xs tracking-widest">Privacy Email:</span> rasmtechcircle@gmail.com</p>
                                <p><span className="font-bold opacity-50 uppercase text-xs tracking-widest">Phone:</span> +91 93639 93814</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;