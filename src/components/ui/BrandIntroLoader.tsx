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
          }, 1800); // Amount of time logo stays popped before leaving
        }, 1200); // Wait 1 second patiently at 100%
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
       className="fixed inset-0 z-[9999] bg-brand-red flex flex-col items-center justify-center overflow-hidden select-none"
       initial={{ y: 0 }}
       exit={{ y: "-100vh" }} // Curtain drawing effect
       transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Code design borders / Tech abstract framing */}
      <div className="absolute inset-x-4 inset-y-4 md:inset-x-8 md:inset-y-8 pointer-events-none select-none border border-white/20 md:border-none">
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-white/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-white/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-white/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-white/40"></div>
        
        {/* Top Code snippets */}
        <div className="hidden sm:flex justify-between items-start pt-2 px-2">
           <div className="text-[10px] text-white/70 font-mono tracking-[0.2em] uppercase">
             <div>&gt; _INITIALIZING_ACQUISITION_ENGINE_</div>
             <div className="text-white opacity-90 mt-1">compile_funnels() --optimized</div>
           </div>
           <div className="text-[10px] text-white/70 font-mono tracking-[0.2em] uppercase text-right">
             <div>ENGINE: OMEGA_DRIVE</div>
             <div className="mt-1 text-white">STATUS_LINK: STABLE</div>
           </div>
        </div>
        {/* Mid grid faint overlay fade */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 flex items-center justify-center h-full">
        <motion.div
           animate={
             phase === 'pop' 
             ? { scale: 1.15, y: -20, filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.2))" } 
             : { scale: 1, y: 0, filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))" }
           }
           transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }} // spring-like pop
           className="relative flex items-center justify-center w-full max-w-[20rem] sm:max-w-[28rem] md:max-w-2xl"
        >
          {/* Logo */}
          <div className="relative group w-full flex justify-center z-20">
             <motion.div 
               animate={phase === 'pop' ? { opacity: 1, scale: 1.2 } : { opacity: 0.5, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="absolute inset-0 bg-white/20 blur-[60px] md:blur-[80px] rounded-full scale-y-50 pointer-events-none" 
             />
             <img 
               src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
               alt="Pexel Paradox high-performance media marketing and client acquisition brand asset" 
               title="Pexel Paradox Media Marketing Brand Asset"
               loading="eager"
               referrerPolicy="no-referrer"
               className="w-full h-auto object-contain brightness-0 invert relative z-10 isolate px-2 md:px-0 max-w-[20rem] sm:max-w-[28rem] md:max-w-[34rem] pointer-events-none"
             />
          </div>

          {/* Social Media Agency Aesthetic Floating Elements */}
          <AnimatePresence>
            {(phase === 'loading' || phase === 'ready') && (
              <>
                <motion.div 
                  key="element-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute -top-10 md:-top-16 left-0 md:left-8 lg:-left-12 bg-white/95 border border-white/20 rounded-xl p-2.5 md:p-3 flex items-center gap-2.5 md:gap-3 shadow-2xl backdrop-blur-sm z-30"
                >
                   <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                     <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-neutral-900 font-black text-sm md:text-base leading-none mb-1 text-left">4.5x ROAS</span>
                     <span className="text-neutral-500 text-[9px] md:text-[10px] font-bold font-mono leading-none tracking-widest uppercase">Campaign Active</span>
                   </div>
                </motion.div>

                <motion.div 
                  key="element-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="absolute -bottom-8 md:-bottom-12 right-0 md:right-8 lg:-right-8 bg-white/95 border border-white/20 rounded-xl p-2.5 md:p-3 flex items-center gap-2.5 md:gap-3 shadow-2xl backdrop-blur-sm z-30"
                >
                   <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
                     <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                   </div>
                   <div className="flex flex-col text-left">
                     <span className="text-neutral-900 font-black text-sm md:text-base leading-none mb-1">100+ Leads</span>
                     <span className="text-neutral-500 text-[9px] md:text-[10px] font-bold font-mono leading-none tracking-widest uppercase">Active Funnel</span>
                   </div>
                </motion.div>

                <motion.div 
                  key="element-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-16 lg:-left-36 bg-white/95 border border-white/20 rounded-xl p-2.5 md:p-3 flex items-center gap-3 shadow-2xl backdrop-blur-sm z-30 hidden md:flex"
                >
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-50/80 flex items-center justify-center shrink-0">
                     <BarChart className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                   </div>
                   <div className="flex flex-col text-left pr-2">
                     <span className="text-neutral-900 font-black text-sm md:text-base leading-none mb-1">Lower CAC</span>
                     <span className="text-neutral-500 text-[9px] md:text-[10px] font-bold font-mono leading-none tracking-widest uppercase">Cost Optimized</span>
                   </div>
                </motion.div>

                {/* Mouse pointer coming in */}
                <motion.div
                   key="element-cursor"
                   initial={{ opacity: 0, x: 80, y: 80 }}
                   animate={{ opacity: 1, x: 40, y: 30 }}
                   exit={{ opacity: 0, transition: { duration: 0.2 } }}
                   transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                   className="absolute right-1/2 top-1/2 z-40 hidden md:block"
                >
                   <MousePointer2 className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] transform -rotate-12" />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Loading bar floating at the bottom */}
      <AnimatePresence>
        {(phase === 'loading' || phase === 'ready') && (
          <motion.div 
            key="bottom-bar"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 left-6 right-6 md:bottom-20 md:left-12 md:right-12"
          >
            <div className="w-full max-w-2xl mx-auto flex justify-between items-center px-1 pb-3">
               <div className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-white/80 tracking-[0.2em] uppercase">
                 <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                 Calibrating Funnels
               </div>
               <span className="text-[10px] md:text-xs font-mono text-white font-bold tracking-widest">{percent}%</span>
            </div>
            <div className="w-full max-w-2xl mx-auto h-1.5 md:h-2 bg-white/20 rounded-full overflow-hidden shadow-2xl relative border border-white/10">
               <motion.div 
                 className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] relative rounded-full"
                 style={{ width: `${percent}%` }}
               >
                 {/* Glow effect at the tip of the bar */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 blur-[8px] rounded-full translate-x-1/2" />
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

