import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const brandRed = "#e51c23";

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-6 md:px-12 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="text-center max-w-2xl"
      >
        {/* Abstract 404 Visual */}
        <div className="relative inline-block mb-12">
          <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-gray-100">
            404
          </h1>
          <div 
            className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-black tracking-tight"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
          >
            Page <span style={{ color: brandRed }} className="ml-3">Lost.</span>
          </div>
        </div>

        <p className="text-gray-500 text-lg md:text-xl mb-12 leading-relaxed">
          The infrastructure path you are looking for does not exist or has been 
          relocated within the Ramstechcircleopc ecosystem.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate('/')}
            style={{ backgroundColor: brandRed }}
            className="w-full md:w-auto text-white px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-lg shadow-red-500/10"
          >
            RETURN HOME
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-sm font-bold text-sm tracking-widest hover:bg-gray-800 transition-all"
          >
            GO BACK
          </button>
        </div>

        {/* Decorative Signature */}
        <div className="mt-20 flex items-center justify-center gap-4 opacity-20">
            <div className="w-8 h-[1px] bg-black"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Ramstechcircleopc Pvt Ltd</span>
            <div className="w-8 h-[1px] bg-black"></div>
        </div>
      </motion.div>
    </div>
  );
}