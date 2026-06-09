"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
      {/* Decorative SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
          <circle cx="200" cy="300" r="180" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="300" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="300" r="100" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="300" x2="380" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="200" y1="120" x2="200" y2="480" stroke="currentColor" strokeWidth="1" />
          <line x1="73" y1="173" x2="327" y2="427" stroke="currentColor" strokeWidth="1" />
          <line x1="327" y1="173" x2="73" y2="427" stroke="currentColor" strokeWidth="1" />
          <rect x="120" y="220" width="160" height="160" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="text-center z-10">
        <p className="text-sm text-muted tracking-widest mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          MECHANICAL ENGINEER
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          张伟
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-md mx-auto leading-relaxed">
          精密设计 · 匠心制造 · 持续创新
        </p>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          SCROLL
        </span>
        <ChevronDown size={20} className="animate-breathe" />
      </button>
    </section>
  );
}
