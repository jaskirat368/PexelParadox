import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  start: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ start, end, duration = 1.5, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentCount = start + (end - start) * progress;
      setCount(Math.round(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, start, end, duration]);

  return (
    <span ref={ref} className="font-black tracking-tight tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { start: 0, end: 87, prefix: "", suffix: "%", label: "DIGITAL ACQUISITION" },
  { start: 0, end: 3, prefix: "", suffix: "×", label: "AVG LEAD GROWTH" },
  { start: 0, end: 100, prefix: "", suffix: "%", label: "GYMS ONLY" },
  { start: 9900, end: 0, prefix: "₹", suffix: "", label: "WASTED AD SPEND" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-brand-border/50">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 group"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 transition-transform group-hover:scale-105 duration-300">
              <AnimatedCounter 
                start={stat.start} 
                end={stat.end} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
              />
            </div>
            <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider text-brand-red">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
