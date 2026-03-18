import React from 'react';

const CookiePolicy: React.FC = () => {
    const brandRed = "#e51c23";
    const lastUpdated = "March 18, 2026";

    return (
        <div className="min-h-screen bg-white font-poppins text-[#444] leading-relaxed pt-20">
            <main className="w-full px-6 md:px-12 py-16 md:py-24">
                
                {/* Header Section */}
                <div className="mb-12 border-b border-gray-50 pb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tighter">
                        Cookie Policy
                    </h1>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                <div className="space-y-16 max-w-5xl">
                    
                    {/* 1. Direct Disclosure */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">1. Disclosure on Cookies</h2>
                        <p className="text-lg mb-6">
                            At <strong style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</strong>, we believe in a transparent and "privacy-first" digital experience. 
                        </p>
                        <div className="bg-gray-50 p-8 border-l-4" style={{ borderColor: brandRed }}>
                            <p className="font-bold text-black mb-2 uppercase text-xs tracking-[0.2em]">Current Usage Status:</p>
                            <p className="text-gray-700 font-medium">
                                Our website is built using a high-performance static architecture. Currently, we <strong className="text-black">DO NOT use cookies</strong>, local storage, or session-based tracking to identify you or monitor your behavior on this site.
                            </p>
                        </div>
                    </section>

                    {/* 2. Meta Pixel & Analytics Disclosure */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Meta Pixel & Ad Tracking</h2>
                        <p className="mb-4">
                            In compliance with Meta’s Business Tools terms, we disclose the following:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span style={{ color: brandRed }} className="font-bold">/</span>
                                <p><strong>Meta Pixel:</strong> We do not currently have the Meta Pixel installed on this website.</p>
                            </li>
                            <li className="flex gap-4">
                                <span style={{ color: brandRed }} className="font-bold">/</span>
                                <p><strong>Google Analytics:</strong> We do not use Google Analytics or other automated ad-tracking tools on this platform.</p>
                            </li>
                        </ul>
                    </section>

                    {/* 3. Consent Language */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Consent</h2>
                        <p>
                            Since we do not deploy tracking technologies, a "Cookie Consent Banner" is not currently required for browsing our site. Should we implement such tools in the future for lead generation or improved user experience, this policy will be updated, and explicit consent will be requested from all visitors.
                        </p>
                    </section>

                    {/* 4. How to Manage Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. Managing Your Privacy</h2>
                        <p className="mb-4">
                            While we do not track you, you can still manage your global browser settings to block all cookies. For information on how to do this, visit:
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-widest opacity-60">
                            <a href="https://www.aboutcookies.org/" target="_blank" rel="noreferrer" className="hover:text-[#e51c23] transition-colors">AboutCookies.org</a>
                            <span>|</span>
                            <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer" className="hover:text-[#e51c23] transition-colors">AllAboutCookies.org</a>
                        </div>
                    </section>

                    {/* 5. Contact Information */}
                    <section className="bg-black text-white p-10 md:p-16 rounded-sm">
                        <h2 className="text-2xl font-bold mb-8">Privacy Support</h2>
                        <div className="space-y-4 not-italic opacity-80">
                            <p className="font-bold text-xl" style={{ color: brandRed }}>RAMSTECHCIRCLEOPC PVT LTD</p>
                            <p>13th, Main Road, Anna Nagar West, Chennai, Tamil Nadu, 600040.</p>
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

export default CookiePolicy;