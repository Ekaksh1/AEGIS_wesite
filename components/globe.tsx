"use client";

import { useRef, useEffect, useCallback } from "react";

// GeoJSON-style simplified continent outlines (lon, lat pairs)
const LAND_POINTS = generateLandPoints();

function generateLandPoints() {
  // Generate points that approximate continental outlines
  const points: [number, number][] = [];

  // North America
  for (let lat = 25; lat <= 70; lat += 3) {
    for (let lon = -130; lon <= -60; lon += 3) {
      if (isLand(lat, lon)) points.push([lon, lat]);
    }
  }
  // South America
  for (let lat = -55; lat <= 12; lat += 3) {
    for (let lon = -80; lon <= -35; lon += 3) {
      if (isLandSA(lat, lon)) points.push([lon, lat]);
    }
  }
  // Europe
  for (let lat = 36; lat <= 70; lat += 3) {
    for (let lon = -10; lon <= 40; lon += 3) {
      if (isLandEU(lat, lon)) points.push([lon, lat]);
    }
  }
  // Africa
  for (let lat = -35; lat <= 37; lat += 3) {
    for (let lon = -17; lon <= 51; lon += 3) {
      if (isLandAF(lat, lon)) points.push([lon, lat]);
    }
  }
  // Asia
  for (let lat = 10; lat <= 72; lat += 3) {
    for (let lon = 40; lon <= 145; lon += 3) {
      if (isLandAS(lat, lon)) points.push([lon, lat]);
    }
  }
  // Australia
  for (let lat = -40; lat <= -12; lat += 3) {
    for (let lon = 113; lon <= 155; lon += 3) {
      if (isLandAU(lat, lon)) points.push([lon, lat]);
    }
  }

  return points;
}

function isLand(lat: number, lon: number): boolean {
  // Rough North America shape
  if (lat > 48 && lon < -120) return lat < 60;
  if (lat > 60 && lon > -140 && lon < -60) return true;
  if (lat > 48 && lat < 60 && lon > -130 && lon < -60) return true;
  if (lat > 25 && lat < 50 && lon > -125 && lon < -65) {
    const eastBound = -65 - (lat - 25) * 0.5;
    const westBound = -125 + (50 - lat) * 0.8;
    return lon > westBound && lon < eastBound;
  }
  return false;
}

function isLandSA(lat: number, lon: number): boolean {
  if (lat > 0 && lon > -80 && lon < -50) return true;
  if (lat > -15 && lat <= 0 && lon > -78 && lon < -35) return true;
  if (lat > -25 && lat <= -15 && lon > -70 && lon < -38) return true;
  if (lat > -35 && lat <= -25 && lon > -68 && lon < -48) return true;
  if (lat > -55 && lat <= -35 && lon > -73 && lon < -63) return true;
  return false;
}

function isLandEU(lat: number, lon: number): boolean {
  if (lat > 55 && lon > -10 && lon < 30) return true;
  if (lat > 45 && lat <= 55 && lon > -8 && lon < 35) return true;
  if (lat > 36 && lat <= 45 && lon > -9 && lon < 28) return true;
  return false;
}

function isLandAF(lat: number, lon: number): boolean {
  if (lat > 20 && lon > -17 && lon < 35) return true;
  if (lat > 5 && lat <= 20 && lon > -15 && lon < 51) return true;
  if (lat > -5 && lat <= 5 && lon > 10 && lon < 42) return true;
  if (lat > -15 && lat <= -5 && lon > 12 && lon < 40) return true;
  if (lat > -25 && lat <= -15 && lon > 15 && lon < 38) return true;
  if (lat > -35 && lat <= -25 && lon > 17 && lon < 33) return true;
  return false;
}

function isLandAS(lat: number, lon: number): boolean {
  if (lat > 50 && lon > 40 && lon < 145) return true;
  if (lat > 35 && lat <= 50 && lon > 40 && lon < 140) return true;
  if (lat > 20 && lat <= 35 && lon > 50 && lon < 135) return true;
  if (lat > 10 && lat <= 20 && lon > 70 && lon < 110) return true;
  // Japan/Korea
  if (lat > 30 && lat <= 45 && lon > 128 && lon < 145) return true;
  // India
  if (lat > 8 && lat <= 28 && lon > 68 && lon < 90) return true;
  // SE Asia
  if (lat > -8 && lat <= 20 && lon > 95 && lon < 120) return true;
  return false;
}

function isLandAU(lat: number, lon: number): boolean {
  if (lat > -38 && lat < -12 && lon > 115 && lon < 153) {
    if (lat > -25 && lon < 120) return false;
    return true;
  }
  return false;
}

// City locations for glowing dots [lon, lat]
const CITIES: [number, number][] = [
  [-74, 40.7],   // New York
  [-0.1, 51.5],  // London
  [139.7, 35.7], // Tokyo
  [77.2, 28.6],  // Delhi
  [-46.6, -23.5],// Sao Paulo
  [151.2, -33.9],// Sydney
  [37.6, 55.8],  // Moscow
  [-122.4, 37.8],// San Francisco
  [103.8, 1.35], // Singapore
  [31.2, 30.0],  // Cairo
];

interface GlobeProps {
  size?: number;
  className?: string;
}

export function Globe({ size = 300, className = "" }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const animationRef = useRef<number>(0);

  const project = useCallback(
    (
      lon: number,
      lat: number,
      rotation: number,
      radius: number,
      cx: number,
      cy: number
    ): { x: number; y: number; visible: boolean } => {
      const lambda = ((lon + rotation) * Math.PI) / 180;
      const phi = (lat * Math.PI) / 180;
      const x = cx + radius * Math.cos(phi) * Math.sin(lambda);
      const y = cy - radius * Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lambda);
      return { x, y, visible: z > 0 };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.42;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      rotationRef.current += 0.15;

      // Globe sphere background
      const gradient = ctx.createRadialGradient(
        cx - radius * 0.2,
        cy - radius * 0.2,
        0,
        cx,
        cy,
        radius
      );
      gradient.addColorStop(0, "hsla(152, 38%, 18%, 0.4)");
      gradient.addColorStop(0.7, "hsla(152, 38%, 13%, 0.3)");
      gradient.addColorStop(1, "hsla(152, 42%, 8%, 0.15)");

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Subtle border
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "hsla(152, 25%, 30%, 0.3)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Grid lines (latitude)
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 2) {
          const p = project(lon, lat, rotationRef.current, radius, cx, cy);
          if (p.visible) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = "hsla(152, 25%, 25%, 0.15)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Grid lines (longitude)
      for (let lon = -180; lon < 180; lon += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 2) {
          const p = project(lon, lat, rotationRef.current, radius, cx, cy);
          if (p.visible) {
            if (!started) {
              ctx.moveTo(p.x, p.y);
              started = true;
            } else {
              ctx.lineTo(p.x, p.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = "hsla(152, 25%, 25%, 0.15)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw land mass dots
      for (const [lon, lat] of LAND_POINTS) {
        const p = project(lon, lat, rotationRef.current, radius, cx, cy);
        if (p.visible) {
          const z = Math.cos((lat * Math.PI) / 180) * Math.cos(((lon + rotationRef.current) * Math.PI) / 180);
          const alpha = 0.2 + z * 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(46, 65%, 52%, ${alpha})`;
          ctx.fill();
        }
      }

      // Draw city dots with glow
      const time = Date.now() / 1000;
      for (const [lon, lat] of CITIES) {
        const p = project(lon, lat, rotationRef.current, radius, cx, cy);
        if (p.visible) {
          const pulse = 0.5 + 0.5 * Math.sin(time * 2 + lon);
          // Glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4 + pulse * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(46, 65%, 52%, ${0.1 + pulse * 0.1})`;
          ctx.fill();
          // Core dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(46, 65%, 60%, ${0.7 + pulse * 0.3})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [size, project]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
      aria-label="Rotating 3D globe showing AEGIS global presence"
      role="img"
    />
  );
}
