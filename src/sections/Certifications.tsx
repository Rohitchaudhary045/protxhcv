import { useEffect, useRef, useState } from 'react';
import { certificationsData } from '@/config';
import { Award } from 'lucide-react';

export default function Certifications() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#0A1929' }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Certifications & Credentials
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Cert Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certificationsData.map((cert, i) => (
            <div
              key={cert.name}
              className={`glass-card p-5 text-center group transition-all duration-700 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${Math.floor(i / 4) * 100 + (i % 4) * 75}ms`,
              }}
            >
              {/* Top gradient border */}
              <div
                className="absolute top-0 left-4 right-4 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)',
                }}
              />

              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,195,255,0.08)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award size={18} className="text-[#00C3FF]" />
                </div>
              </div>

              <p className="text-[13px] font-medium text-[#E6F1FF] leading-[1.4] mb-1">
                {cert.name}
              </p>
              <p className="text-[10px] font-mono tracking-[0.06em] text-[#3A5A7A] uppercase">
                {cert.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
