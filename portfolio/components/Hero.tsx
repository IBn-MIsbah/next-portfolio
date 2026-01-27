import {
  Github,
  Twitter,
  Linkedin,
  MousePointer2,
  ArrowDown,
  Send,
} from "lucide-react";
import Link from "next/link";

const HeroSection = ({
  innerRef,
}: {
  innerRef: (node?: Element | null) => void;
}) => {
  return (
    <section
      ref={innerRef}
      id="home"
      className="relative min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col justify-center px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
              ibn_misbah — Backend Focus
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-none tracking-tighter">
            KAWNULLAH <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
            >
              MISBAHUDIN
            </span>
          </h1>

          <p className="max-w-lg text-gray-400 text-lg md:text-xl leading-relaxed">
            Fullstack Engineer specializing in the{" "}
            <span className="text-white">PERN stack</span>. I build scalable
            architectures where{" "}
            <span className="text-white">robust backend logic</span> meets
            seamless user experiences.
          </p>

          <div className="flex gap-4 text-gray-500">
            <Link href={"https://github.com/ibn-misbah"}>
              <Github
                className="hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </Link>
            <Link href={"https://x.com/Ibn_Misbah"}>
              <Twitter
                className="hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/kawnullah-misbahudin-32711a338/"
              }
            >
              <Linkedin
                className="hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </Link>
            <Link href={"https://t.me/IBn_Misbaah"}>
              <Send
                className="hover:text-white cursor-pointer transition-colors"
                size={20}
              />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
          <div className="relative w-80 h-112.5 border border-gray-800 rounded-2xl p-4 bg-[#111] rotate-3 hover:rotate-0 transition-transform duration-700 ease-out group">
            <div className="absolute -top-6 -right-6 bg-blue-600 p-4 rounded-full shadow-2xl animate-bounce">
              <MousePointer2 size={24} />
            </div>

            <div className="w-full h-full bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 flex flex-col">
              <div className="p-3 border-b border-gray-800 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="p-6 space-y-4 font-mono text-[10px] text-gray-500">
                <div className="text-blue-400">const developer = {"{"}</div>
                <div className="pl-4">name: &quot;Kawnullah&quot;,</div>
                <div className="pl-4">focus: &quot;Backend&quot;,</div>
                <div className="pl-4 text-green-400">
                  stack: [&quot;Postgres&quot;, &quot;Prisma&quot;],
                </div>
                <div className="text-blue-400">{"}"}</div>
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-800/50 rounded-lg border border-white/5 flex items-center justify-center text-[8px]">
                    API
                  </div>
                  <div className="aspect-square bg-gray-800/50 rounded-lg border border-white/5 flex items-center justify-center text-[8px]">
                    DB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-light">
          Scroll
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
