import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Users, MousePointer2, BarChart } from 'lucide-react';

interface BrandIntroLoaderProps {
  onComplete: () => void;
}

export default function BrandIntroLoader({ onComplete }: BrandIntroLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'ready' | 'pop'>('loading');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let start = Date.now();
    const duration = 2800; // Slower loading phase
    let rAF: number;
    
    const animate = () => {
      const now = Date.now();
      const time = Math.min(1, (now - start) / duration);
      
      // Snappy ease out
      const easeOutExpo = time === 1 ? 1 : 1 - Math.pow(2, -10 * time);
      setPercent(Math.floor(easeOutExpo * 100));

      if (time < 1) {
        rAF = requestAnimationFrame(animate);
      } else {
        setPercent(100);
        setPhase('ready');
        setTimeout(() => {
          setPhase('pop');
          setTimeout(() => {
            // Finish loader - App.tsx AnimatePresence takes over to run 'exit' animation
            document.body.style.overflow = 'unset';
            onComplete();
          }, 800); // Amount of time logo stays popped before leaving
        }, 1000); // Wait 1 second patiently at 100%
      }
    };
    
    rAF = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rAF);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
       id="brand-intro-screen"
       className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden select-none"
       initial={{ y: 0 }}
       exit={{ y: "-100vh" }} // Curtain drawing effect
       transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Code design borders / Tech abstract framing */}
      <div className="absolute inset-x-4 inset-y-4 md:inset-x-8 md:inset-y-8 pointer-events-none select-none border border-white/5 md:border-none">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-neutral-800"></div>
        <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-neutral-800"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-neutral-800"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-neutral-800"></div>
        
        {/* Top Code snippets */}
        <div className="hidden sm:flex justify-between items-start pt-2 px-2">
           <div className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase">
             <div>&gt; _INITIALIZING_ACQUISITION_ENGINE_</div>
             <div className="text-brand-red opacity-80 mt-1">compile_funnels() --optimized</div>
           </div>
           <div className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase text-right">
             <div>ENGINE: OMEGA_DRIVE</div>
             <div className="mt-1">STATUS_LINK: STABLE</div>
           </div>
        </div>
        {/* Mid grid faint overlay fade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex items-center justify-center h-full">
        <motion.div
           animate={
             phase === 'pop' 
             ? { scale: 1.15, y: -20, filter: "drop-shadow(0px 20px 40px rgba(220,53,53,0.3))" } 
             : { scale: 1, y: 0, filter: "drop-shadow(0px 0px 0px rgba(220,53,53,0))" }
           }
           transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }} // spring-like pop
           className="relative flex items-center justify-center w-full max-w-[20rem] sm:max-w-xl"
        >
          {/* Logo */}
          <div className="relative group w-full flex justify-center z-20">
             <motion.div 
               animate={phase === 'pop' ? { opacity: 1, scale: 1.2 } : { opacity: 0.5, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="absolute inset-0 bg-brand-red/30 blur-[50px] rounded-full scale-y-50" 
             />
             <img 
               src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
               alt="Pexel Paradox" 
               className="w-full h-auto object-contain brightness-0 invert relative z-10 isolate"
             />
          </div>

          {/* Social Media Agency Aesthetic Floating Elements */}
          <AnimatePresence>
            {(phase === 'loading' || phase === 'ready') && (
              <>
                <motion.div 
                  key="element-1"
                  initial={{ opacity: 0, x: -20, y: 30 }}
                  animate={{ opacity: 1, x: -100, y: 10 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 -ml-[10rem] md:-ml-[16rem] -mt-8 md:-mt-16 bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-xl backdrop-blur-sm z-10"
                >
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-red/20 flex items-center justify-center">
                     <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-brand-red" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white font-bold text-xs md:text-sm leading-tight text-left">+$42k MRR</span>
                     <span className="text-neutral-500 text-[8px] md:text-[10px] font-mono leading-tight">NEW REVENUE</span>
                   </div>
                </motion.div>

                <motion.div 
                  key="element-2"
                  initial={{ opacity: 0, x: 20, y: -30 }}
                  animate={{ opacity: 1, x: 90, y: -20 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="absolute right-1/2 top-1/2 -mr-[8rem] md:-mr-[15rem] -mt-16 md:-mt-24 bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-xl backdrop-blur-sm z-10"
                >
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                     <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-white font-bold text-xs md:text-sm leading-tight">98 BOOKED</span>
                     <span className="text-neutral-500 text-[8px] md:text-[10px] font-mono leading-tight">SECURED THIS WEEK</span>
                   </div>
                </motion.div>

                <motion.div 
                  key="element-3"
                  initial={{ opacity: 0, x: 50, y: 15 }}
                  animate={{ opacity: 1, x: 120, y: 40 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="absolute right-1/2 top-1/2 -mr-[12rem] md:-mr-[18rem] bg-neutral-900/80 border border-neutral-800 rounded-xl p-2 flex items-center gap-2 shadow-xl backdrop-blur-sm z-10 hidden md:flex"
                >
                   <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                     <BarChart className="w-3.5 h-3.5 text-emerald-500" />
                   </div>
                   <div className="flex flex-col text-left pr-2">
                     <span className="text-white font-bold text-sm leading-tight">-45% CPA</span>
                     <span className="text-emerald-500 text-[10px] font-mono leading-tight">COST OPTIMIZED</span>
                   </div>
                </motion.div>

                {/* Mouse pointer coming in */}
                <motion.div
                   key="element-cursor"
                   initial={{ opacity: 0, x: 100, y: 100 }}
                   animate={{ opacity: 1, x: 60, y: 40 }}
                   exit={{ opacity: 0, transition: { duration: 0.2 } }}
                   transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                   className="absolute right-1/2 top-1/2 z-30 hidden md:block"
                >
                   <MousePointer2 className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transform -rotate-12" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Loading bar at the bottom */}
      <AnimatePresence>
        {(phase === 'loading' || phase === 'ready') && (
          <motion.div 
            key="bottom-bar"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 md:right-12"
          >
            <div className="w-full max-w-4xl mx-auto flex justify-between items-center px-2 pb-3">
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-neutral-500 tracking-[0.2em] uppercase">
                 <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping"></span>
                 Calibrating Funnels
               </div>
               <span className="text-[10px] md:text-xs font-mono text-white tracking-widest">{percent}%</span>
            </div>
            <div className="w-full max-w-4xl mx-auto h-1.5 md:h-2 bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden shadow-2xl relative">
               <motion.div 
                 className="h-full bg-brand-red shadow-[0_0_10px_rgba(220,53,53,0.8)] relative rounded-full"
                 style={{ width: `${percent}%` }}
               >
                 {/* Glow effect at the tip of the bar */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white/50 blur-[4px] rounded-full translate-x-1/2" />
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

