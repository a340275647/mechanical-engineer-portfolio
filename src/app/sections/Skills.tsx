"use client";

import ScrollReveal from "../components/ScrollReveal";

const skillCategories = [
  {
    title: "CAD / CAM",
    skills: [
      { name: "SolidWorks", level: 95 },
      { name: "AutoCAD", level: 90 },
      { name: "CATIA", level: 85 },
      { name: "Mastercam", level: 80 },
    ],
  },
  {
    title: "机械设计",
    skills: [
      { name: "结构设计", level: 92 },
      { name: "公差分析", level: 88 },
      { name: "有限元分析 (FEA)", level: 82 },
      { name: "传动设计", level: 85 },
    ],
  },
  {
    title: "材料与工艺",
    skills: [
      { name: "金属材料", level: 90 },
      { name: "热处理工艺", level: 85 },
      { name: "数控加工 (CNC)", level: 88 },
      { name: "3D 打印", level: 78 },
    ],
  },
  {
    title: "工程管理",
    skills: [
      { name: "项目管理", level: 85 },
      { name: "成本控制", level: 82 },
      { name: "质量管理", level: 88 },
      { name: "团队协作", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm text-accent tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            02 / SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            技能专长
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.title} delay={idx * 0.1}>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
