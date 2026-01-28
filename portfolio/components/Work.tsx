import { Database, ExternalLink } from "lucide-react";

const WorkSection = ({
  innerRef,
}: {
  innerRef: (node?: Element | null) => void;
}) => {
  const projects = [
    {
      title: "Scalable Data Pipeline",
      tech: "Fastify + Redis + Docker",
      description:
        "Implemented a high-throughput messaging system with Dockerized microservices.",
      link: "#",
    },
    {
      title: "E-Commerce Engine",
      tech: "Next.js + Prisma + Postgres",
      description:
        "A full-stack PERN application featuring type-safe queries and real-time inventory.",
      link: "#",
    },
  ];

  return (
    <section
      ref={innerRef}
      id="work"
      className="py-32 bg-[#0a0a0a] px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Database size={24} />
                </div>
                <ExternalLink
                  className="text-gray-600 group-hover:text-white"
                  size={20}
                />
              </div>
              <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">
                {project.tech}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="h-px w-0 group-hover:w-full bg-blue-500 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
