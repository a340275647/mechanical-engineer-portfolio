"use client";

import ScrollReveal from "../components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm text-accent tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            05 / CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            联系方式
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <div className="space-y-8">
              <p className="text-muted leading-relaxed">
                如果您对我的工作感兴趣，或有合作意向，欢迎随时与我联系。我期待与志同道合的伙伴一起，创造更多有价值的工程解决方案。
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Mail size={18} className="text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">邮箱</p>
                    <p className="text-sm text-foreground">zhangwei.engineer@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Phone size={18} className="text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">电话</p>
                    <p className="text-sm text-foreground">+86 138 0000 0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <MapPin size={18} className="text-muted" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">地址</p>
                    <p className="text-sm text-foreground">北京市海淀区中关村</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                  aria-label="GitHub"
                >
                  GH
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                  aria-label="LinkedIn"
                >
                  IN
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs text-muted mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-2">留言</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="请输入您的留言..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-white text-sm font-medium hover:bg-accent transition-colors"
              >
                发送消息
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
