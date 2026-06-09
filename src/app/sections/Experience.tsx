"use client";

import ScrollReveal from "../components/ScrollReveal";

const experiences = [
  {
    period: "2021 - 至今",
    company: "华创精密制造有限公司",
    title: "高级机械设计工程师",
    duties: [
      "主导高精度数控机床核心部件的设计与研发工作",
      "负责新产品从概念设计到量产的全流程技术管理",
      "带领 5 人设计团队，完成年度 12 个新品开发项目",
      "建立并优化设计标准库，提升团队设计效率 30%",
    ],
  },
  {
    period: "2018 - 2021",
    company: "鼎盛自动化科技有限公司",
    title: "机械设计工程师",
    duties: [
      "负责自动化装配设备的机械结构设计与方案制定",
      "参与多个汽车、电子行业自动化产线项目",
      "完成 20+ 套非标设备设计，项目交付率 100%",
      "主导引入 3D 打印快速原型技术，缩短验证周期",
    ],
  },
  {
    period: "2016 - 2018",
    company: "东方重工集团",
    title: "助理工程师",
    duties: [
      "协助完成大型工程机械的结构设计与图纸绘制",
      "参与产品试制跟踪，解决生产现场技术问题",
      "编制技术文档与工艺文件，建立产品 BOM 体系",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm text-accent tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            04 / EXPERIENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            工作经历
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 w-2 h-2 bg-accent rounded-full md:-translate-x-1/2" />

                  {/* Period */}
                  <div className="md:w-1/2 pl-6 md:pl-0 md:px-12">
                    <p className="text-sm text-accent mb-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted mt-1">{exp.title}</p>
                  </div>

                  {/* Duties */}
                  <div className="md:w-1/2 pl-6 md:pl-0 md:px-12">
                    <ul className="space-y-2">
                      {exp.duties.map((duty, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-sm text-muted leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-muted rounded-full mt-2 shrink-0" />
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
