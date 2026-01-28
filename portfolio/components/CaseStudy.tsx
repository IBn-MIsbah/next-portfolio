import { Zap, Cpu, ChevronRight, Activity } from "lucide-react";

const CaseStudySection = ({
  innerRef,
}: {
  innerRef: (node?: Element | null) => void;
}) => {
  const caseStudies = [
    {
      id: "01",
      tag: "PERN / Optimization",
      title: "Type-Safe Query Performance with Prisma",
      problem:
        "High latency in N+1 relational fetches affecting dashboard loading times.",
      solution:
        "Implemented batching strategies and optimized PostgreSQL indexing via Prisma migrations.",
      metrics: ["40% Faster Loads", "30% Lower CPU"],
    },
    {
      id: "02",
      tag: "Fastify / Redis",
      title: "Real-time Distributed Event Orchestration",
      problem:
        "Scaling Node.js event emitters across multiple containerized instances.",
      solution:
        "Leveraged Redis Pub/Sub and Fastify's efficient schema serialization to sync states.",
      metrics: ["10k Events/Sec", "Dockerized Ops"],
    },
  ];

  return (
    <section
      ref={innerRef}
      id="case-study"
      className="py-32 bg-[#0a0a0a] px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              System <span className="text-blue-500">Architectures</span>
            </h2>
            <p className="text-gray-400 text-lg">
              In-depth technical breakdowns of engineering challenges I&apos;ve
              solved.
            </p>
          </div>
          <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/5 flex gap-8 items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                Uptime Focus
              </span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-blue-500">
                <Zap size={24} />
              </span>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                Low Latency
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/2 border border-white/5 p-8 md:p-12 rounded-[2rem] hover:bg-white/4 transition-all duration-500"
            >
              <div className="lg:col-span-1 text-5xl font-bold text-white/10 group-hover:text-blue-500/20 transition-colors font-mono">
                {study.id}
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-mono uppercase rounded-full border border-blue-500/20">
                    {study.tag}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {study.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-[10px] uppercase font-mono text-gray-500 mb-2 tracking-widest flex items-center gap-2">
                      <Activity size={12} /> The Problem
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-mono text-gray-500 mb-2 tracking-widest flex items-center gap-2">
                      <Cpu size={12} /> The Solution
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center gap-4 bg-white/5 p-8 rounded-2xl border border-white/5">
                <h4 className="text-[10px] uppercase font-mono text-gray-500 mb-2 tracking-widest">
                  Key Metrics
                </h4>
                {study.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-3 text-white font-bold text-lg"
                  >
                    <div className="h-1 w-1 rounded-full bg-blue-500" />
                    {metric}
                  </div>
                ))}
                <button className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-white transition-colors group/btn">
                  VIEW FULL SCHEMA{" "}
                  <ChevronRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
