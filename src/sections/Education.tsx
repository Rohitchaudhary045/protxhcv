import { useEffect, useRef, useState } from 'react';
import { educationData } from '@/config';
import { GraduationCap, School } from 'lucide-react';

const icons = [GraduationCap, School];

export default function Education() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#020B13' }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#E6F1FF] mb-4">
            Education
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, transparent)' }}
          />
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {educationData.map((edu, i) => {
            const Icon = icons[i];
            return (
              <div
                key={edu.degree}
                className={`glass-card p-6 relative overflow-hidden transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Left accent border */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[4px] rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #00C3FF, #9D4EDD)',
                  }}
                />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,195,255,0.08)] flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[#00C3FF]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#E6F1FF] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[14px] text-[#5B7B9C] leading-[1.5]">
                      {edu.field}
                    </p>
                    {edu.institution && (
                      <p className="text-[12px] font-mono text-[#00C3FF] mt-2 tracking-[0.06em]">
                        {edu.institution}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
