import { Box, Database, Layers, Server } from "lucide-react";

const ToolsSection = ({
  innerRef,
}: {
  innerRef: (node?: Element | null) => void;
}) => {
  const categories = [
    {
      title: "Core Stack (PERN)",
      skills: ["PostgreSQL", "Express", "React", "Node.js", "Prisma"],
      icon: <Layers size={20} />,
    },
    {
      title: "Backend & Systems",
      skills: ["FastAPI", "Fastify", "Python", "Redis", "Docker"],
      icon: <Server size={20} />,
    },
    {
      title: "Database & ORM",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
      icon: <Database size={20} />,
    },
    {
      title: "Web & DevOps",
      skills: ["Next.js", "TypeScript", "JavaScript", "Git", "HTML/CSS"],
      icon: <Box size={20} />,
    },
  ];

  return (
    <section
      ref={innerRef}
      id="tools"
      className="py-32 bg-[#0d0d0d] px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technical Arsenal
          </h2>
          <p className="text-gray-500 text-lg">
            My primary toolset for building modern distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-all"
            >
              <div className="text-blue-500 mb-6">{cat.icon}</div>
              <h4 className="text-lg font-bold text-white mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white/5 rounded text-[11px] font-mono text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
