import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandIntroLoaderProps {
  onComplete: () => void;
}

export default function BrandIntroLoader({ onComplete }: BrandIntroLoaderProps) {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let start = Date.now();
    const duration = 2200; // Fast 2.2s loading
    let rAF: number;
    
    const animate = () => {
      const now = Date.now();
      const time = Math.min(1, (now - start) / duration);
      
      // Snappy ease out
      const easeOutExpo = time === 1 ? 1 : 1 - Math.pow(2, -10 * time);
      setPercent(Math.floor(easeOutExpo * 100));

      if (time > 0.8) setPhase(1); // Logo reveal phase
      
      if (time < 1) {
        rAF = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setComplete(true);
          setTimeout(() => {
            document.body.style.overflow = 'unset';
            onComplete();
          }, 800); // wait for exit animation
        }, 600); // hold at 100%
      }
    };
    
    rAF = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rAF);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
           id="brand-intro-screen"
           className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden select-none"
           exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
           transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Massive Abstract Background Word */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-5 pointer-events-none blur-[2px]">
            <span className="text-[25vw] font-black text-white whitespace-nowrap tracking-tighter">PARADOX</span>
          </div>
          
          <div className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center">
             <AnimatePresence mode="wait">
               {phase === 0 ? (
                 <motion.div
                   key="loading"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20, filter: "blur(5px)", scale: 0.9 }}
                   transition={{ duration: 0.4 }}
                   className="flex flex-col items-center w-full"
                 >
                   <div className="text-brand-red font-mono text-[10px] tracking-[0.3em] uppercase mb-4 animate-pulse">Initializing System</div>
                   <div className="text-7xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter tabular-nums leading-none mb-6">
                     {percent}
                   </div>
                   
                   {/* Cool tech progress bar */}
                   <div className="w-full h-[1px] bg-neutral-900 relative">
                     <motion.div 
                       className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-brand-red shadow-[0_0_10px_rgba(220,53,53,0.8)]"
                       style={{ width: `${percent}%` }}
                     />
                   </div>
                 </motion.div>
               ) : (
                 <motion.div
                   key="logo"
                   initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="flex flex-col items-center w-full"
                 >
                   <div className="relative group w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-xs flex justify-center">
                     <div className="absolute inset-0 bg-brand-red/30 blur-[40px] rounded-full scale-y-50" />
                     <img 
                       src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
                       alt="Pexel Paradox" 
                       className="w-full h-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(220,53,53,0.4)] relative z-10 isolate"
                     />
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
          
          <div className="absolute bottom-8 left-8 hidden sm:flex flex-col gap-1 tracking-[0.2em] font-mono text-[10px] text-neutral-600">
             <span>SYS.REQ.001</span>
             <span>PEXEL PARADOX CORE</span>
          </div>

          {/* Random fluctuating data lines */}
          <div className="absolute bottom-8 right-8 hidden sm:flex gap-1 items-end h-8">
            {[1,2,3,4,5].map((i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                transition={{ duration: 1.5 + (i*0.2), repeat: Infinity, ease: "linear" }}
                className="w-1 bg-brand-red"
              />
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
