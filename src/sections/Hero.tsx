import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CyberMatrix from '@/components/CyberMatrix';
import { personalData, statsData } from '@/config';

function AnimatedCounter({ value, suffix = '', delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(36px,6vw,64px)] font-bold leading-none tracking-[-0.02em] gradient-text">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* WebGL Background */}
      <CyberMatrix />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        {/* Name */}
        <h1 className="text-[clamp(48px,8vw,96px)] font-bold leading-[0.9] tracking-[-0.03em] mb-4">
          <span className="gradient-text" style={{ textShadow: '0 0 40px rgba(0,195,255,0.3)' }}>
            {personalData.name}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-[13px] tracking-[0.08em] text-[rgba(0,195,255,0.4)] uppercase mb-6">
          {personalData.subtitle}
        </p>

        {/* Summary */}
        <p className="text-[16px] leading-[1.7] text-[#5B7B9C] max-w-[600px] mx-auto mb-8">
          {personalData.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-[#020B13] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,195,255,0.4)]"
            style={{
              background: 'linear-gradient(90deg, #00FFE0, #00C3FF)',
            }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-lg text-sm font-medium text-[#00C3FF] border border-[rgba(0,195,255,0.3)] hover:bg-[rgba(0,195,255,0.1)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <div key={stat.label}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={i * 200} />
              <p className="text-[11px] font-mono tracking-[0.08em] text-[#5B7B9C] uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[11px] font-mono text-[#5B7B9C]">Scroll to explore</span>
        <ChevronDown size={20} className="text-[#5B7B9C] bounce" />
      </div>
    </section>
  );
}
