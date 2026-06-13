import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  score: number;
}

interface RadarChartProps {
  skills: Skill[];
  size?: number;
}

export default function RadarChart({ skills, size = 400 }: RadarChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const center = { x: size / 2, y: size / 2 };
  const radius = (size / 2) * 0.75;
  const count = skills.length;

  function getAngle(i: number) {
    return (Math.PI * 2 * i) / count - Math.PI / 2;
  }

  function getPoint(i: number, score: number) {
    const angle = getAngle(i);
    const r = (score / 100) * radius;
    return {
      x: center.x + Math.cos(angle) * r,
      y: center.y + Math.sin(angle) * r,
    };
  }

  const gridLevels = [25, 50, 75, 100];

  const polygonPoints = skills.map((s, i) => {
    const p = getPoint(i, animated ? s.score : 0);
    return `${p.x},${p.y}`;
  }).join(' ');

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[400px]"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="cyan-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C3FF" />
          <stop offset="100%" stopColor="#9D4EDD" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 195, 255, 0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Grid rings */}
      {gridLevels.map((level) => {
        const points = Array.from({ length: count }, (_, i) => {
          const p = getPoint(i, level);
          return `${p.x},${p.y}`;
        }).join(' ');
        return (
          <polygon
            key={level}
            points={points}
            fill="none"
            stroke="#1a3a5c"
            strokeWidth={1}
            opacity={0.5}
          />
        );
      })}

      {/* Axis lines */}
      {skills.map((_, i) => {
        const p = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={center.x}
            y1={center.y}
            x2={p.x}
            y2={p.y}
            stroke="rgba(0, 195, 255, 0.1)"
            strokeWidth={1}
          />
        );
      })}

      {/* Center glow */}
      <circle cx={center.x} cy={center.y} r={radius * 0.3} fill="url(#centerGlow)" />

      {/* Score polygon */}
      <polygon
        points={polygonPoints}
        fill="rgba(0, 195, 255, 0.1)"
        stroke="url(#cyan-purple-gradient)"
        strokeWidth={2}
        strokeLinejoin="round"
        className={animated ? 'radar-polygon' : ''}
        style={{
          strokeDasharray: animated ? undefined : 1000,
          strokeDashoffset: animated ? undefined : 1000,
          opacity: animated ? 1 : 0,
          transition: 'all 1.2s ease-out',
        }}
      />

      {/* Data points */}
      {skills.map((skill, i) => {
        const p = getPoint(i, animated ? skill.score : 0);
        return (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={hoveredIndex === i ? 9 : 6}
              fill="#00FFE0"
              stroke="#020B13"
              strokeWidth={2}
              style={{
                cursor: 'pointer',
                filter: hoveredIndex === i ? 'drop-shadow(0 0 8px rgba(0, 255, 224, 0.6))' : 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </g>
        );
      })}

      {/* Axis labels */}
      {skills.map((skill, i) => {
        const angle = getAngle(i);
        const labelRadius = radius + 30;
        const x = center.x + Math.cos(angle) * labelRadius;
        const y = center.y + Math.sin(angle) * labelRadius;
        return (
          <text
            key={`label-${i}`}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#5B7B9C"
            fontSize={12}
            fontFamily="'JetBrains Mono', monospace"
          >
            {skill.name}
          </text>
        );
      })}

      {/* Tooltip */}
      {hoveredIndex !== null && (
        <g>
          <rect
            x={getPoint(hoveredIndex, skills[hoveredIndex].score).x + 15}
            y={getPoint(hoveredIndex, skills[hoveredIndex].score).y - 30}
            width={140}
            height={40}
            rx={8}
            fill="rgba(10, 25, 41, 0.9)"
            stroke="rgba(0, 195, 255, 0.3)"
            strokeWidth={1}
          />
          <text
            x={getPoint(hoveredIndex, skills[hoveredIndex].score).x + 85}
            y={getPoint(hoveredIndex, skills[hoveredIndex].score).y - 8}
            textAnchor="middle"
            fill="#00C3FF"
            fontSize={12}
            fontFamily="'JetBrains Mono', monospace"
          >
            {skills[hoveredIndex].name}: {skills[hoveredIndex].score}%
          </text>
        </g>
      )}
    </svg>
  );
}
