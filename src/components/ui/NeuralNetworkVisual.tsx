"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const CODE_SNIPPETS = [
  "model = LSTM(hidden=128)",
  "loss = CrossEntropyLoss()",
  "optimizer.zero_grad()",
  "y_pred = model(X_train)",
  "auc = roc_auc_score(y, pred)",
];

const NODES = [
  { x: 50, y: 20 },
  { x: 30, y: 50 },
  { x: 70, y: 50 },
  { x: 20, y: 80 },
  { x: 50, y: 80 },
  { x: 80, y: 80 },
];

const CONNECTIONS = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [2, 5],
  [3, 4],
  [4, 5],
];

export function NeuralNetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles.length = 0;
      const rect = canvas.getBoundingClientRect();
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[480px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full rounded-2xl"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="h-48 w-48 opacity-90 sm:h-56 sm:w-56"
          aria-hidden="true"
        >
          {CONNECTIONS.map(([from, to], i) => (
            <motion.line
              key={`conn-${i}`}
              x1={NODES[from].x}
              y1={NODES[from].y}
              x2={NODES[to].x}
              y2={NODES[to].y}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
          {NODES.map((node, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#38BDF8"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                default: { duration: 0.5, delay: 0.3 + i * 0.1 },
              }}
            />
          ))}
        </svg>
      </div>

      {CODE_SNIPPETS.map((snippet, i) => (
        <motion.div
          key={snippet}
          className="absolute rounded-lg border border-white/10 bg-card/90 px-3 py-1.5 font-mono text-[10px] text-primary backdrop-blur-sm sm:text-xs"
          style={{
            top: `${15 + i * 18}%`,
            left: i % 2 === 0 ? "5%" : "auto",
            right: i % 2 === 1 ? "5%" : "auto",
          }}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, delay: i * 0.5 },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            default: { duration: 0.6, delay: 0.8 + i * 0.15 },
          }}
        >
          {snippet}
        </motion.div>
      ))}

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
    </div>
  );
}
