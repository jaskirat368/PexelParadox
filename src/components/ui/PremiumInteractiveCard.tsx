import React, { useId, useRef, useState } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'motion/react';

// Light weight utility for joining classNames
function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export interface PremiumInteractiveCardProps extends Omit<HTMLMotionProps<'div'>, 'style'> {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string; // e.g. '2.5rem' or '1.5rem'
  style?: React.CSSProperties;
  glowColor?: 'white' | 'red';
}

export default function PremiumInteractiveCard({
  children,
  className = '',
  borderRadius = '2.5rem',
  style = {},
  glowColor,
  ...motionProps
}: PremiumInteractiveCardProps) {
  const uniqueId = useId().replace(/:/g, '');
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values to keep track of mouse coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Tilt settings - keeping the effect ultra-smooth, premium, and subtle
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 150, damping: 25 });

  // Elastic pointer positioning for the dynamic glow highlighting overlay
  const glowX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 150, damping: 25 });
  const glowY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 150, damping: 25 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized cursor coordinates: from 0 to 1
    const mouseX = (event.clientX - rect.left) / width;
    const mouseY = (event.clientY - rect.top) / height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset toward centered position
    x.set(0.5);
    y.set(0.5);
  };

  // Extract a numeric border radius for the path curves
  const getNumericRadius = (radiusStr: string) => {
    const val = parseFloat(radiusStr);
    if (isNaN(val)) return 24;
    if (radiusStr.includes('rem')) return val * 16;
    return val;
  };

  const rx = getNumericRadius(borderRadius);

  // Auto-detect color theme from class names to match instructions precisely:
  // "Use white color flow effect for black cards , red color effect for white cards and again white color effect for red cards !"
  const isWhiteBg = className.includes('bg-white') || className.includes('bg-brand-light') || className.includes('bg-gray-50') || className.includes('bg-neutral-50');
  const isRedBg = className.includes('bg-brand-red') || className.includes('bg-red-');
  
  const finalGlowColor = glowColor || (isWhiteBg ? 'red' : 'white');
  const isWhiteGlow = finalGlowColor === 'white';

  const strokeColor = isWhiteGlow ? '#FFFFFF' : '#DC3535';

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative transition-colors duration-300",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
        borderRadius: borderRadius,
        ...style,
      }}
      {...motionProps}
    >
      {/* Dynamic Keyframes injected right here to be fully self-contained and accurate */}
      <style>{`
        @keyframes electric-flow-single-${uniqueId} {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Electric Border Glow SVG Overlay */}
      <svg 
        className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] pointer-events-none z-40 overflow-visible"
        style={{
          borderRadius: borderRadius,
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id={`electric-glow-blur-${uniqueId}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.0" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Single high-intensity glowing trail that loops on the border */}
        <rect
          x="1"
          y="1"
          rx={rx}
          ry={rx}
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          filter={`url(#electric-glow-blur-${uniqueId})`}
          pathLength="100"
          strokeLinecap="round"
          className={cn(
            "transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-60"
          )}
          style={{
            width: 'calc(100% - 2px)',
            height: 'calc(100% - 2px)',
            strokeDasharray: '22 78', // Medium trail length
            animation: `electric-flow-single-${uniqueId} ${isHovered ? '3.5s' : '5.4s'} linear infinite`, // Medium speed
          }}
        />
      </svg>

      {/* Floating Pointer Shadow Flare (Follows the mouse location dynamically inside the hover state) */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 rounded-[inherit] overflow-hidden"
          style={{
            background: isWhiteGlow
              ? `radial-gradient(400px circle at ${glowX.get()}% ${glowY.get()}%, rgba(255, 255, 255, 0.08), transparent 85%)`
              : `radial-gradient(400px circle at ${glowX.get()}% ${glowY.get()}%, rgba(220, 53, 53, 0.08), transparent 85%)`,
          }}
        />
      )}

      {/* Depth separation container (3D float effect for all children content) */}
      <div 
        className="h-full w-full"
        style={{
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
