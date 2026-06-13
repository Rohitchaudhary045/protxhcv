import { useEffect, useRef, useState } from 'react';
import { projectsData } from '@/config';
import { FolderGit2, ArrowRight } from 'lucide-react';

export default function Projects() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-[120px] overflow-hidden"
      style={{ background: '#020B13' }}
    >
      {/* Hexagonal grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2300C3FF' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.02em] gradient-text mb-4">
            Security Projects
          </h2>
          <div
            className="w-[80px] h-[3px] mx-auto"
            style={{ background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)' }}
          />
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden transition-all duration-700 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Top accent line */}
              <div
                className="h-[3px]"
                style={{
                  background: 'linear-gradient(90deg, #00C3FF, #9D4EDD)',
                }}
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FolderGit2 size={22} className="text-[#00C3FF]" />
                  <h3 className="text-[18px] font-semibold text-[#E6F1FF] leading-[1.3]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[14px] text-[#5B7B9C] leading-[1.7] mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-[0.06em] bg-[rgba(0,195,255,0.06)] text-[#5B7B9C] border border-[rgba(0,195,255,0.12)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="flex items-center gap-2 text-[13px] font-medium text-[#00C3FF] hover:text-[#00FFE0] transition-colors group/btn">
                  View Project
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
