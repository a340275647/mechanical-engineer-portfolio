"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { X, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "高精度数控机床主轴设计",
    description: "设计并优化了一款适用于五轴联动加工中心的高速电主轴，最高转速达 30,000 RPM，径向跳动控制在 1μm 以内。",
    tags: ["SolidWorks", "FEA", "精密设计"],
    detail: "该项目针对航空航天复杂曲面零件加工需求，完成了主轴整体结构设计、轴承选型与预紧力优化、冷却系统热平衡分析。通过有限元仿真验证，主轴在最高转速下的温升控制在 15°C 以内，满足了高精度加工要求。项目获得公司年度技术创新奖。",
  },
  {
    id: 2,
    title: "自动化装配生产线",
    description: "为汽车零部件企业设计了一条全自动装配线，包含 12 个工位，产能提升至每小时 300 件。",
    tags: ["自动化", "项目管理", "工艺设计"],
    detail: "负责整条产线的机械设计、工位布局规划、机器人集成方案制定。引入了视觉引导和力控装配技术，将产品不良率从 2.5% 降至 0.3%。项目周期 8 个月，预算控制在了 450 万元以内，提前 2 周交付。",
  },
  {
    id: 3,
    title: "轻量化铝合金底盘结构",
    description: "采用拓扑优化技术，将传统钢制底盘减重 40%，同时保持同等结构强度。",
    tags: ["拓扑优化", "材料工程", "轻量化"],
    detail: "运用 Altair OptiStruct 进行多工况拓扑优化，结合 3D 打印快速原型验证，迭代 5 轮后确定了最优结构方案。通过材料替换和结构优化，整车减重 85kg，续航里程提升约 8%。已申请 2 项发明专利。",
  },
  {
    id: 4,
    title: "协作机器人末端执行器",
    description: "设计了一款模块化自适应夹爪，可兼容 15 种不同形状工件的抓取，无需更换夹具。",
    tags: ["机器人", "模块化设计", "3D打印"],
    detail: "采用仿生学原理设计自适应手指结构，集成力矩传感器实现柔性抓取。夹爪主体使用 SLS 尼龙 3D 打印制造，单件成本降低 60%。已通过 100 万次疲劳测试，目前在 3 条产线上稳定运行。",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm text-accent tracking-widest mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            03 / PROJECTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            项目作品
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.1}>
              <div
                className="group cursor-pointer bg-white border border-border hover:border-accent/30 transition-all duration-300"
                onClick={() => setSelected(project)}
              >
                <div className="aspect-[16/10] bg-foreground/5 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-border/50 to-border/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-6xl text-border/60 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-surface text-muted border border-border"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {selected.title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1 hover:bg-surface transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-muted leading-relaxed mb-6">{selected.detail}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-surface text-muted border border-border"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
