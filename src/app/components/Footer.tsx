"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} ZHANG.WEI. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="p-2 hover:bg-surface rounded-full transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="text-muted" />
        </button>
      </div>
    </footer>
  );
}
