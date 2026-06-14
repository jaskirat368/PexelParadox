import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandIntroLoaderProps {
  onComplete: () => void;
}

const sequences = [
  "ATTENTION GYM OWNERS.",
  "WE DON'T DO VANITY METRICS.",
  "WE DEPLOY SYSTEMS.",
  "THAT SCALE REVENUE."
];

export default function BrandIntroLoader({ onComplete }: BrandIntroLoaderProps) {
  const [complete, setComplete] = useState(false);
  const [seqIndex, setSeqIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Total sequence duration
    const runSequence = async () => {
      // 0: ATTENTION GYM OWNERS (0-600ms)
      await new Promise(r => setTimeout(r, 700));
      setSeqIndex(1);
      // 1: WE DON'T DO VANITY METRICS (700-1400ms)
      await new Promise(r => setTimeout(r, 800));
      setSeqIndex(2);
      // 2: WE DEPLOY SYSTEMS (1500-2200ms)
      await new Promise(r => setTimeout(r, 700));
      setSeqIndex(3);
      // 3: THAT SCALE REVENUE (2200-2900ms)
      await new Promise(r => setTimeout(r, 800));
      setSeqIndex(4); // 4 = Final Logo State

      await new Promise(r => setTimeout(r, 1200)); // Hold logo

      setComplete(true);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onComplete();
      }, 1200); // Wait for exit animations
    };

    runSequence();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
           id="brand-intro-screen"
           className="fixed inset-0 z-[9999] flex w-full h-full bg-[#030303] overflow-hidden select-none"
           exit={{ opacity: 0 }}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle Dynamic Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

          {/* Central Cinematic Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <AnimatePresence mode="wait">
              {seqIndex < 4 ? (
                <motion.h1
                  key={seqIndex}
                  initial={{ y: 50, opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ y: -50, opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-black text-white text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tighter leading-none"
                >
                  {sequences[seqIndex].split(' ').map((word, i) => (
                     <span 
                       key={i} 
                       className={word.includes('REVENUE') || word.includes('SYSTEMS') || word.includes('GYM') ? 'text-brand-red inline-block mx-2 md:mx-4' : 'inline-block mx-2 md:mx-4'}
                     >
                        {word}
                     </span>
                  ))}
                </motion.h1>
              ) : (
                <motion.div
                  key="final-logo"
                  initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-64 sm:w-96 mb-8 group">
                    <div className="absolute inset-0 bg-brand-red/30 blur-[60px] rounded-full scale-y-50 group-hover:bg-brand-red/40 transition-colors duration-700" />
                    <img 
                      src="https://i.ibb.co/JRMTckSp/file-0000000040047208885869e9a710d1ab.png" 
                      alt="Pexel Paradox" 
                      className="w-full h-auto object-contain brightness-0 invert relative z-10"
                    />
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="h-1 bg-brand-red max-w-[200px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Minimalist Framing elements */}
          <div className="absolute bottom-10 left-10 overflow-hidden hidden md:block">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-xs font-mono tracking-[0.2em] text-neutral-600 uppercase"
            >
              [ SYSTEM INITIALIZATION ]
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 right-10 flex gap-2">
            {[1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ 
                  duration: 0.5, 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  delay: i * 0.1 
                }}
                className="w-1.5 h-8 bg-brand-red origin-bottom"
              />
            ))}
          </div>

          {/* Dynamic exit curtains */}
          <motion.div
             exit={{ scaleY: 0 }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
             className="absolute top-0 left-0 w-full h-1/2 bg-[#030303] origin-top border-b border-white/10"
          />
          <motion.div
             exit={{ scaleY: 0 }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
             className="absolute bottom-0 left-0 w-full h-1/2 bg-[#030303] origin-bottom border-t border-white/10"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
