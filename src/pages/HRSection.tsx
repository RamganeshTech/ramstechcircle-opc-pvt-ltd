import { motion } from 'framer-motion';

const HRSection = () => {
    const brandRed = "#e51c23";

    const policies = [
        {
            title: "Hiring Policy Summary",
            desc: "Our selection is based strictly on technical merit and organizational alignment. We maintain a transparent process where every candidate receives objective feedback based on their performance.",
            icon: "fa-user-tie"
        },
        {
            title: "Selection Process",
            desc: "Our evaluation involves comprehensive technical assessments and general interaction rounds tailored specifically to the requirements of each individual role.",
            icon: "fa-comments"
        },
        {
            title: "Workplace Standards",
            desc: "We prioritize deep work, technical ownership, and a results-oriented environment. Our team members are expected to lead with initiative and professional integrity.",
            icon: "fa-laptop-code"
        },
        {
            title: "Code of Conduct",
            desc: "Professional Excellence and mutual respect are our core pillars. We foster a workplace where technical curiosity is encouraged and high ethical standards are mandatory.",
            icon: "fa-scale-balanced"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 pt-16 pb-20 font-poppins">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section - Matches Corporate Credentials Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    {/* <div className="flex items-center gap-4 mb-6">
            <div className={`w-8 h-[2px] bg-[${brandRed}]`} style={{ backgroundColor: brandRed }}></div>
            <span className="text-slate-400 uppercase tracking-[0.4em] text-[10px] font-bold">Trust & Transparency</span>
          </div> */}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-none mb-8 uppercase">
                        HR <span style={{ color: brandRed }}>Section.</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl text-md md:text-xl leading-relaxed">
                        Official hiring directives, organizational standards, and professional guidelines for RAMSTECHCIRCLEOPC PVT LTD.
                    </p>
                </motion.div>

                {/* Policy Grid - Clean White Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {policies.map((item, index) => (
                        <div key={index} className="bg-white p-5 md:p-10 border border-slate-100 rounded-xl hover:shadow-xl hover:shadow-slate-100 transition-all group">
                            <div style={{ color: brandRed }} className="text-2xl mb-6">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4 text-slate-800">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Secondary Info Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Security Advisory - Now matches the slate/white style exactly */}
                    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-6 text-slate-400">
                            <i className="fa-solid fa-shield-halved"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Security Advisory</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                            "Rams Tech Circle never requests payment for interviews or job offers. Official
                            communications only originate from @ramstechcircle.com."
                        </p>
                    </div>

                    {/* Verification Notice */}
                    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-6 text-slate-400">
                            <i className="fa-solid fa-circle-check"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Employee Verification</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Third-party background check agencies requiring employment verification can reach
                            our compliance desk via official correspondence.
                        </p>
                    </div>

                    {/* Workplace Note */}
                    <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50/30">
                        <div className="flex items-center gap-3 mb-6 text-slate-400">
                            <i className="fa-solid fa-heart-pulse"></i>
                            <h4 className="font-bold uppercase tracking-widest text-[10px]">Workplace Culture</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            We operate on a 'Radical Candor' philosophy. We prioritize technical ownership
                            and high-performance collaboration over traditional bureaucracy.
                        </p>
                    </div>

                </div>

                {/* Contact CTA */}
                {/* <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-center md:text-left">
             <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-slate-900">Have specific HR inquiries?</h4>
             <p className="text-xs text-slate-400 tracking-tight">Direct your emails to our recruitment and policy desk.</p>
           </div>
           <a 
             href="mailto:ramstechcircle@gmail.com"
             className="px-12 py-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#e51c23] transition-all shadow-lg shadow-slate-200"
           >
             Contact HR Desk
           </a>
        </div> */}

            </div>
        </div>
    );
};

export default HRSection;