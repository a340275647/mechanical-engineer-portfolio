"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-sm text-accent tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                01 / ABOUT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                关于我
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  我是一名拥有8年经验的机械工程师，专注于精密机械设计与制造工艺优化。毕业于清华大学机械工程系，曾在多家知名制造企业担任核心设计岗位。
                </p>
                <p>
                  我相信好的设计是功能与美学的完美平衡。每一个零件、每一道工序都承载着工程师对精度的执着追求。我擅长将复杂的工程问题拆解为可执行的解决方案，并在实践中不断迭代优化。
                </p>
                <p>
                  工作之余，我热衷于研究新型材料和智能制造技术，关注行业前沿动态，持续拓展专业边界。
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 border border-border rounded-sm" />
                <div className="absolute inset-3 bg-foreground/5 rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-border flex items-center justify-center">
                      <span className="text-4xl text-muted" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                        张
                      </span>
                    </div>
                    <p className="text-xs text-muted tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      ZHANG.WEI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
