import { useEffect, useRef, useState } from 'react';
import Starfield from '@/components/Starfield';
import { personalData } from '@/config';

export default function About() {
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
      id="about"
      ref={ref}
      className="relative py-[120px] md:py-[120px] overflow-hidden"
      style={{ background: '#020B13' }}
    >
      <Starfield opacity={0.15} speed={0.8} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column - Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#E6F1FF] mb-2">
              About Me
            </h2>
            <div
              className="w-[120px] h-[3px] mb-8"
              style={{
                background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)',
              }}
            />

            {personalData.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-[16px] leading-[1.7] text-[#5B7B9C] mb-4"
                style={{
                  transitionDelay: `${(i + 1) * 150}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {personalData.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="tag-glow px-4 py-1.5 rounded-md text-[12px] font-mono tracking-[0.08em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div
            className={`flex justify-center transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px]">
              {/* Hexagonal mask container with actual photo */}
              <div className="absolute inset-0 hexagon-clip glow-pulse">
                <img
                  src="/images/profile.png"
                  alt="Rohit Chaudhary"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(1.05) contrast(1.05)',
                  }}
                />
              </div>

              {/* Border glow overlay */}
              <div
                className="absolute inset-0 hexagon-clip pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px rgba(0, 195, 255, 0.2)',
                }}
              />

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00C3FF] opacity-60" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00C3FF] opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00C3FF] opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00C3FF] opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
