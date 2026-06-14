import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandIntroLoaderProps {
  onComplete: () => void;
}

const nicesSteps = [
  "ANALYZING LOCAL DEMOGRAPHICS",
  "IDENTIFYING HIGH-TICKET PROSPECTS",
  "DEPLOYING ACQUISITION SYSTEM",
  "SCALING GYM REVENUE"
];

const impactWords = [
  "DOMINATE",
  "YOUR",
  "LOCAL",
  "MARKET"
];

export default function BrandIntroLoader({ onComplete }: BrandIntroLoaderProps) {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 2800; // ms
    let start = Date.now();
    let rAF: number;
    
    const animate = () => {
        const now = Date.now();
        const time = Math.min(1, (now - start) / (duration - 500));
        
        // Easing function: slow start, fast middle, slow end (easeInOutCubic)
        const easedProgress = time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;
        setPercent(Math.floor(easedProgress * 100));

        // Niche steps updates
        if (time < 0.25) setStepIndex(0);
        else if (time < 0.5) setStepIndex(1);
        else if (time < 0.75) setStepIndex(2);
        else setStepIndex(3);

        // Flash large impact words sequence
        if (time < 0.2) setWordIndex(0);
        else if (time < 0.4) setWordIndex(1);
        else if (time < 0.6) setWordIndex(2);
        else if (time < 0.8) setWordIndex(3);
        else setWordIndex(4); // 4 = show logo/final state

        if (time < 1) {
            rAF = requestAnimationFrame(animate);
        } else {
            setTimeout(() => {
                setComplete(true);
                setTimeout(() => {
                    document.body.style.overflow = 'unset';
                    onComplete();
                }, 1000); // exit animation duration buffer
            }, 400);
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
           className="fixed inset-0 z-[9999] flex w-full h-full bg-[#050505] overflow-hidden select-none"
           exit={{ opacity: 0 }}
           transition={{ duration: 1 }}
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,53,53,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Top Panel Door - Exit Animation */}
          <motion.div
             exit={{ y: "-100vh" }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="absolute top-0 left-0 w-full h-[50vh] bg-[#050505] border-b border-white/5"
          />
          {/* Bottom Panel Door - Exit Animation */}
          <motion.div
             exit={{ y: "100vh" }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#050505] border-t border-white/5"
          />

          {/* Content Layer */}
          <motion.div 
             exit={{ opacity: 0, scale: 1.1 }} 
             transition={{ duration: 0.5, ease: "easeInOut" }}
             className="absolute inset-0 flex flex-col justify-between p-6 sm:p-12 text-white pointer-events-none"
          >
            {/* Header Data */}
            <div className="flex justify-between items-start w-full uppercase font-mono text-[10px] sm:text-xs tracking-[0.2em] text-neutral-500">
               <div className="overflow-hidden">
                 <motion.span 
                   initial={{ y: 20, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }} 
                   className="text-white block mb-1"
                 >
                   PEXEL PARADOX
                 </motion.span>
                 <motion.span
                   initial={{ y: 20, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }} 
                   transition={{ delay: 0.1 }}
                 >
                   v2.5 // GYM_SYS
                 </motion.span>
               </div>
               <div className="text-right overflow-hidden">
                 <motion.span 
                   initial={{ y: 20, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }} 
                   className="block mb-1"
                 >
                   SECURE CONNECTION
                 </motion.span>
                 <motion.span
                   initial={{ y: 20, opacity: 0 }} 
                   animate={{ y: 0, opacity: 1 }} 
                   transition={{ delay: 0.1 }}
                   className="flex items-center justify-end gap-2 text-brand-red flex-row-reverse"
                 >
                   <span>ONLINE</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                 </motion.span>
               </div>
            </div>

            {/* Central Impact Words / Logo Reveal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full px-4">
              <AnimatePresence mode="wait">
                {wordIndex < 4 ? (
                  <motion.h1
                    key={`word-${wordIndex}`}
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white uppercase text-center"
                  >
                    {impactWords[wordIndex]}
                  </motion.h1>
                ) : (
                  <motion.div
                    key="final-logo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-64 sm:w-96 h-20 mb-6">
                      <div className="absolute inset-0 bg-brand-red/20 blur-[50px] rounded-full" />
                      <img 
                        src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
                        alt="Pexel Paradox" 
                        className="w-full h-full object-contain brightness-0 invert filter relative z-10"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Footer Data */}
            <div className="flex flex-col sm:flex-row justify-between items-end sm:items-end w-full gap-6">
              
              {/* Niche Diagnostic Feed */}
              <div className="w-full sm:w-1/2">
                <div className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 mb-2">CURRENT OPERATION:</div>
                <div className="h-6 sm:h-8 overflow-hidden relative w-full">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={stepIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-brand-red text-xs sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase absolute"
                    >
                      {nicesSteps[stepIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Advanced dual-progress bar */}
                <div className="flex flex-col gap-1 w-full max-w-sm mt-2">
                  <div className="h-[1px] w-full bg-neutral-900 border-x border-neutral-800">
                    <motion.div 
                      className="h-full bg-neutral-700"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="h-[2px] w-full bg-neutral-900 border-x border-neutral-800">
                    <motion.div 
                      className="h-full bg-brand-red shadow-[0_0_10px_rgba(220,53,53,0.8)]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Huge Numbers */}
              <div className="flex items-baseline justify-end gap-1 w-full sm:w-auto">
                <div className="overflow-hidden flex items-baseline h-[4rem] sm:h-[6rem]">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-none"
                  >
                    {percent.toString().padStart(3, '0')}
                  </motion.span>
                </div>
                <span className="text-xl sm:text-3xl font-bold text-brand-red">%</span>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
