// import { Link } from 'react-router-dom';

// export default function Footer() {
// //   const brandRed = "#e51c23";
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-black text-white pt-20 pb-10">
//       {/* Upper Footer: Main Content */}
//       <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
//         {/* Brand Column */}
//         <div className="md:col-span-5">
//           <Link to="/" className="flex items-center gap-3 mb-6 group">
//             <img 
//               src="/logo.png" 
//               alt="Ramstechcircleopc Logo" 
//               className="h-12 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
//             />
//             <span className="text-2xl font-bold tracking-tight uppercase">
//               Ramstechcircleopc
//             </span>
//           </Link>
//           <p className="text-gray-400 max-w-md text-lg leading-relaxed">
//             Building the next generation of secure, high-performance static 
//             infrastructure. We transform complex web requirements into 
//             seamless digital experiences.
//           </p>
          
//           {/* Social Icons (Font Awesome) */}
//           <div className="flex gap-5 mt-8">
//             {['linkedin', 'x-twitter', 'github', 'instagram'].map((icon) => (
//               <a 
//                 key={icon}
//                 href="#" 
//                 className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-[#e51c23] hover:text-[#e51c23] transition-all"
//               >
//                 <i className={`fa-brands fa-${icon}`}></i>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Links Column 1: Navigation */}
//         <div className="md:col-span-3">
//           <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-200">
//             Quick Links
//           </h4>
//           <ul className="space-y-4">
//             {['Home', 'About', 'Services', 'Contact'].map((item) => (
//               <li key={item}>
//                 <Link 
//                   to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
//                   className="text-gray-400 hover:text-[#e51c23] transition-colors font-medium"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Links Column 2: Support/Contact */}
//         <div className="md:col-span-4">
//           <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-200">
//             Get In Touch
//           </h4>
//           <div className="space-y-6">
//             <a 
//               href="mailto:rasmtechcircle@gmail.com" 
//               className="flex items-center gap-4 group p-4 border border-gray-900 rounded-sm hover:border-[#e51c23]/30 transition-all"
//             >
//               <div className="text-[#e51c23] text-xl">
//                 <i className="fa-solid fa-envelope"></i>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Email Us</p>
//                 <p className="text-gray-200 font-bold group-hover:text-[#e51c23] transition-colors">
//                   rasmtechcircle@gmail.com
//                 </p>
//               </div>
//             </a>
            
//             <div className="flex items-center gap-4 p-4 border border-gray-900 rounded-sm">
//               <div className="text-[#e51c23] text-xl">
//                 <i className="fa-solid fa-clock"></i>
//               </div>
//               <div>
//                 <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Working Hours</p>
//                 <p className="text-gray-200 font-bold">Mon - Fri: 9:00 AM - 6:00 PM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer: Copyright */}
//       <div className="w-full px-6 md:px-12 pt-8 border-t border-gray-900">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-gray-500 text-sm font-medium">
//             © {currentYear} <span className="text-gray-300">RAMSTECHCIRCLEOPC PVT LTD</span>. ALL RIGHTS RESERVED.
//           </p>
//           <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
//             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
//             <a href="#" className="hover:text-white transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from 'react-router-dom';

export default function Footer() {
  const brandRed = "#e51c23";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 font-poppins">
      {/* Upper Footer: Main Content */}
      <div className="w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <img 
              src="/logo.png" 
              alt="Ramstechcircleopc Logo" 
              className="h-12 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-bold tracking-tight uppercase">
              Ramstechcircleopc
            </span>
          </Link>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            Building the next generation of secure, high-performance static 
            infrastructure. We transform complex web requirements into 
            seamless digital experiences.
          </p>
          
          {/* Social Icons (Font Awesome) */}
          <div className="flex gap-5 mt-8">
            {['linkedin', 'x-twitter', 'github', 'instagram'].map((icon) => (
              <a 
                key={icon}
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-[#e51c23] hover:text-[#e51c23] transition-all"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-200">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
              { name: 'Support', path: '/support' },
              { name: 'Career', path: '/career' }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-gray-400 hover:text-[#e51c23] transition-colors font-medium text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2: Business & Support */}
        <div className="md:col-span-4">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-200">
            Support & Identity
          </h4>
          <div className="space-y-6">
            <ul className="space-y-4 mb-6">
               <li>
                 <Link to="/corporate-credentials" className="text-gray-400 hover:text-[#e51c23] transition-colors font-medium text-sm italic">
                   Corporate Credentials
                 </Link>
               </li>
               <li>
                 <Link to="/data-deletion" className="text-gray-400 hover:text-[#e51c23] transition-colors font-medium text-sm">
                   Data Deletion Request
                 </Link>
               </li>
            </ul>

            <a 
              href="mailto:rasmtechcircle@gmail.com" 
              className="flex items-center gap-4 group p-4 border border-gray-900 rounded-sm hover:border-[#e51c23]/30 transition-all"
            >
              <div style={{ color: brandRed }} className="text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Email Us</p>
                <p className="text-sm text-gray-200 font-bold group-hover:text-[#e51c23] transition-colors">
                  rasmtechcircle@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Legal Compliance Links */}
      <div className="w-full px-6 md:px-12 pt-8 border-t border-gray-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-500 text-xs font-medium">
            © {currentYear} <span className="text-gray-300">RAMSTECHCIRCLEOPC PVT LTD</span>. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}