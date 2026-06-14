import React, { useId, useRef, useState, useEffect } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';

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
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Monitor visibility in viewport to pause off-screen animations and save frame-rate
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '120px', // Activate animations slightly before they scroll into view
        threshold: 0.01,
      }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  // Motion values to keep track of mouse coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Tilt settings - keeping the effect ultra-smooth, premium, and subtle
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), { stiffness: 120, damping: 22 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), { stiffness: 120, damping: 22 });

  // Elastic pointer positioning for the dynamic glow highlighting overlay
  const glowX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 120, damping: 22 });
  const glowY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 120, damping: 22 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    let rect = rectRef.current;
    if (!rect) {
      if (!cardRef.current) return;
      rect = cardRef.current.getBoundingClientRect();
      rectRef.current = rect;
    }
    const width = rect.width || 1;
    const height = rect.height || 1;
    
    // Normalized cursor coordinates: from 0 to 1
    const mouseX = (event.clientX - rect.left) / width;
    const mouseY = (event.clientY - rect.top) / height;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Dynamic caching of bounding rect once on enter to completely avoid layout thrashing on fast mouse moves
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null; // Clear cached rect when mouse leaves
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
  
  const finalGlowColor = glowColor || (isWhiteBg ? 'red' : 'white');
  const isWhiteGlow = finalGlowColor === 'white';

  const strokeColor = isWhiteGlow ? '#FFFFFF' : '#DC3535';

  // Accelerated motion template for seamless dynamic glow spotlight with 0 React rendering cycles
  const flareBackground = useMotionTemplate`radial-gradient(400px circle at ${glowX}% ${glowY}%, rgba(${
    isWhiteGlow ? '255, 255, 255' : '220, 53, 53'
  }, 0.08), transparent 85%)`;

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
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)',
        ...style,
      }}
      {...motionProps}
    >
      {/* Electric Border Glow SVG Overlay - Only rendered when in view to ensure absolute buttery high-speed performance */}
      {isInView && (
        <svg 
          className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] pointer-events-none z-40 overflow-visible"
          style={{
            borderRadius: borderRadius,
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
            // Applying high contrast composited drop-shadow for white glow on light backgrounds in a single GPU-cached pass
            filter: isWhiteGlow ? 'drop-shadow(0px 0px 1.5px rgba(0,0,0,0.85)) drop-shadow(0px 0px 4px rgba(0,0,0,0.3))' : undefined,
          }}
          aria-hidden="true"
        >
          <defs>
            <filter id={`electric-glow-blur-${uniqueId}`} x="-40%" y="-40%" width="180%" height="180%">
              {/* Soft outer glow and intense core glow blended in a single native filter */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.0" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* High-Performance Unified Glowing Trail Layer */}
          <rect
            x="1"
            y="1"
            rx={rx}
            ry={rx}
            fill="none"
            stroke={strokeColor}
            strokeWidth={isHovered ? "4.5" : "3.0"}
            pathLength="100"
            strokeLinecap="round"
            className={cn(
              "transition-opacity duration-300 pointer-events-none",
              isHovered ? "opacity-100" : "opacity-80"
            )}
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              strokeDasharray: '10 90', // Short, high-intensity glowing pulse
              animation: `electric-flow-single ${isHovered ? '2.5s' : '3.8s'} linear infinite`, // Ultra fast and crisp loop
              filter: `url(#electric-glow-blur-${uniqueId})`,
              transform: 'translate3d(0,0,0)',
              backfaceVisibility: 'hidden',
              willChange: 'stroke-dashoffset',
            }}
          />
        </svg>
      )}

      {/* Floating Pointer Shadow Flare (Follows the mouse location dynamically inside the hover state) */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 rounded-[inherit] overflow-hidden"
          style={{
            background: flareBackground,
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
