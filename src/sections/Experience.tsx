import { useEffect, useRef, useState } from 'react';
import { experienceData } from '@/config';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
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
            Professional Journey
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, transparent)' }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #00C3FF, #9D4EDD, transparent)',
            }}
          />

          {/* Mobile line */}
          <div
            className="md:hidden absolute left-4 top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(180deg, #00C3FF, #9D4EDD, transparent)',
            }}
          />

          {experienceData.map((exp, i) => (
            <div
              key={i}
              className={`relative mb-10 last:mb-0 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#00C3FF] -translate-x-1/2 mt-2 shadow-[0_0_12px_rgba(0,195,255,0.6)] z-10" />

                {/* Content card */}
                <div
                  className={`pl-12 md:pl-0 w-full md:w-[calc(50%-30px)] ${
                    i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                >
                  <div className="glass-card p-5">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-[16px] font-semibold text-[#E6F1FF]">
                        {exp.position}
                      </h3>
                      {exp.type && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-[0.06em] bg-[rgba(0,195,255,0.08)] text-[#00C3FF] border border-[rgba(0,195,255,0.15)]">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="text-[14px] text-[#00C3FF] mb-3">
                      {exp.company}
                    </p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] font-mono text-[#5B7B9C]">
                      {exp.period && (
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                      )}
                      {exp.duration && (
                        <span className="text-[#3A5A7A]">({exp.duration})</span>
                      )}
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-[13px] text-[#5B7B9C] leading-[1.6] flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#00C3FF] mt-2 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono tracking-[0.06em] bg-[rgba(0,195,255,0.06)] text-[#5B7B9C] border border-[rgba(0,195,255,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-30px)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
