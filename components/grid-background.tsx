"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();
    window.addEventListener("resize", resize);

    function spawnParticle() {
      if (!canvas) return;
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        life: 0,
        maxLife: 300 + Math.random() * 400,
        size: 1 + Math.random() * 1.5,
      });
    }

    for (let i = 0; i < 50; i++) spawnParticle();

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Cyan particles and connections
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha =
          progress < 0.3
            ? progress / 0.3
            : progress > 0.7
              ? (1 - progress) / 0.3
              : 1;

        // Cyan particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 0.7})`;
        ctx.fill();

        // Connection lines in cyan
        for (let j = i - 1; j >= 0; j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * alpha * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 210, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        if (
          p.life >= p.maxLife ||
          p.x < -10 ||
          p.x > w + 10 ||
          p.y < -10 ||
          p.y > h + 10
        ) {
          particles.splice(i, 1);
          spawnParticle();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Subtle Mountains */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] opacity-20 transition-opacity duration-1000">
        <svg
          viewBox="0 0 1440 320"
          className="h-full w-full fill-none"
          preserveAspectRatio="none"
        >
          {/* Back range */}
          <path
            d="M0,320 L240,120 L480,240 L720,100 L960,280 L1200,160 L1440,320 Z"
            fill="hsl(var(--primary) / 0.05)"
            stroke="hsl(var(--primary) / 0.1)"
            strokeWidth="1"
          />
          {/* Mid range */}
          <path
            d="M-200,320 L150,180 L400,280 L700,150 L1000,300 L1300,200 L1600,320 Z"
            fill="hsl(var(--primary) / 0.08)"
            stroke="hsl(var(--primary) / 0.2)"
            strokeWidth="1"
          />
          {/* Front range (more subtle) */}
          <path
            d="M0,320 L300,220 L600,300 L900,200 L1200,320 Z"
            fill="hsl(var(--primary) / 0.12)"
            stroke="hsl(var(--primary) / 0.4)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
