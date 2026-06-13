import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export default function Starfield({ opacity = 0.3, speed = 2.5 }: { opacity?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;
    let running = true;
    let animId = 0;

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width;
      canvas!.height = height;
      cx = width / 2;
      cy = height / 2;
      const starCount = Math.floor((width * height) / 1200);
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * width * 2,
          y: (Math.random() - 0.5) * height * 2,
          z: Math.random() * width,
          pz: 0,
        });
      }
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
      if (!running) {
        animId = requestAnimationFrame(draw);
        return;
      }
      ctx!.fillStyle = `rgba(2, 11, 19, ${opacity})`;
      ctx!.fillRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= speed * 4;

        if (star.z <= 0) {
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
          star.z = width;
          star.pz = star.z;
        }

        const sx = (star.x / star.z) * (width / 2) + cx;
        const sy = (star.y / star.z) * (height / 2) + cy;
        const r = Math.max(0.5, (1 - star.z / width) * 2.5);

        if (star.pz > star.z) {
          const px = (star.x / star.pz) * (width / 2) + cx;
          const py = (star.y / star.pz) * (height / 2) + cy;
          const pr = Math.max(0.5, (1 - star.pz / width) * 2.5);
          const alpha = Math.min(1, (1 - star.z / width) * 1.5);
          ctx!.strokeStyle = `rgba(0, 195, 255, ${alpha})`;
          ctx!.lineWidth = pr;
          ctx!.beginPath();
          ctx!.moveTo(px, py);
          ctx!.lineTo(sx, sy);
          ctx!.stroke();
        }

        const alpha = Math.min(1, (1 - star.z / width) * 1.5);
        ctx!.beginPath();
        ctx!.arc(sx, sy, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(230, 241, 255, ${alpha})`;
        ctx!.fill();

        star.pz = star.z;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    cleanupRef.current = () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
