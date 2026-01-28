import { Mail, Phone, Send } from "lucide-react";

const ContactSection = ({
  innerRef,
}: {
  innerRef: (node?: Element | null) => void;
}) => {
  return (
    <section
      ref={innerRef}
      id="contact"
      className="py-32 bg-[#0a0a0a] px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let&apos;s Build <br /> Something.
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Currently open to backend-focused roles and high-impact fullstack
              projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                    Email Me
                  </p>
                  <a
                    href="mailto:kawnuma@gmail.com"
                    className="text-xl text-white font-medium hover:text-blue-500 transition-colors"
                  >
                    kawnuma@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                    Call Me
                  </p>
                  <p className="text-xl text-white font-medium">
                    +251 910 004 718
                  </p>
                  <p className="text-sm text-gray-500 font-medium">
                    +251 937 898 504
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-gray-500 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono text-gray-500 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-mono text-gray-500 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Let's talk about your next project..."
                />
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                SEND MESSAGE
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
