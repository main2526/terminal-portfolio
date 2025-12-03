"use client";
import React, { useState, useRef, useEffect } from "react";

// --- Type definitions ---
type CommandReturn = React.ReactNode | null;

type Command = {
  description: string;
  usage?: string;
  execute: (args?: string[]) => CommandReturn;
};

type CommandsMap = Record<string, Command>;

type HistoryItem = {
  type: "command" | "output" | "error";
  content: React.ReactNode;
};

// The structure of the commands object is:
// { commandName: { description: string, execute: (args: string[]) => React.ReactNode } }
const commands: CommandsMap = {
  help: {
    description: "Display available commands",
    execute: () => (
      <div className="space-y-3">
        <div className="text-[#22d3ee] font-semibold">Available Commands:</div>
        <div className="grid grid-cols-1 gap-2 pl-4">
          {Object.entries(commands).map(([name, cmd]) => (
            <div key={name} className="flex gap-4">
              <span className="text-[#e33e3e] w-24">{name}</span>
              <span className="">{cmd.description}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  about: {
    description: "Learn more about me",
    execute: () => (
      <div className="space-y-3">
        <div className="underline text-xl font-semibold">About Me</div>
        <div className="space-y-2 text-[#e2e8f0]">
          <p>
            Hi👋! I&apos;m
            <span className="font-semibold text-[#22d3ee]">
              {" "}
              Johanny A. Rodriguez{" "}
            </span>
            <br />
            I&apos;m a passionate programmer by day and a movie buff by night.
            <br />
            Currently in my sophomore year, pursuing{" "}
            <span className="text-yellow-400">Full Stack Web Development</span>.
            <br />
            I&apos;m interested in{" "}
            <span className="text-[#10b981]">Full Stack Web Development</span>
            .
            <br />
            Currently developing with{" "}
            <span className="text-sky-500">React</span>,{" "}
            <span className="text-gray-600">Next.js</span>, and{" "}
            <span className="text-blue-800">TypeScript</span>.
          </p>
        </div>
      </div>
    ),
  },

  skills: {
    description: "View my technical skills",
    execute: () => (
      <div className="space-y-4">
        <div className="underline  text-red-300 text-xl font-semibold">
          Technical Skills
        </div>

        <div className="space-y-3">
          <div>
            <div className=" underline font-semibold mb-1">Languages</div>
            <div className="pl-4 text-[#e2e8f0]">
              JavaScript/TypeScript • SQL
            </div>
          </div>

          <div>
            <div className="underline font-semibold mb-1">Frontend</div>
            <div className="pl-4 text-[#e2e8f0]">
              React • Next.js • Tailwind CSS • Framer Motion
            </div>
          </div>

          <div>
            <div className="underline font-semibold mb-1">Backend</div>
            <div className="pl-4 text-[#e2e8f0]">
              Node.js • Express • PrismaORM • PostgreSQL • SupaBase
            </div>
          </div>

          <div>
            <div className="underline font-semibold mb-1">Tools</div>
            <div className="pl-4 text-[#e2e8f0]">Git • GitHub • Vercel</div>
          </div>
        </div>
      </div>
    ),
  },

  experience: {
    description: "View my work experience",
    execute: () => (
      <div className="space-y-4">
        <div className="underline text-xl font-semibold">Work Experience</div>

        <div className="space-y-4">
          <div className="border-l-2 border-[#22d3ee] pl-4">
            <div className="text-[#10b981] font-semibold">
              Full-Stack Developer
            </div>
            <div className="text-[#94a3b8] text-sm">
              Tech Company • 2025 - Present
            </div>
            <div className="mt-2 text-[#e2e8f0] space-y-1">
              <p>
                • Led development of microservices architecture serving 10k+
                users
              </p>
              <p>
                • Improved application performance by 60% through optimization
              </p>
              <p>• Mentored junior developers and conducted code reviews</p>
            </div>
          </div>

          <div className="border-l-2 border-[#22d3ee] pl-4">
            <div className="text-[#10b981] font-semibold">
              Frontend Mid Developer
            </div>
            <div className="text-[#94a3b8] text-sm">
              Startup Inc • 2024 - 2025
            </div>
            <div className="mt-2 text-[#e2e8f0] space-y-1">
              <p>• Built and deployed 10+ production applications</p>
              <p>
                • Implemented CI/CD pipelines reducing deployment time by 80%
              </p>
              <p>• Collaborated with design team to create pixel-perfect UIs</p>
            </div>
          </div>

          <div className="border-l-2 border-[#22d3ee] pl-4">
            <div className="text-[#10b981] font-semibold">Junior Developer</div>
            <div className="text-[#94a3b8] text-sm">
              Digital Agency • 2021 - 2022
            </div>
            <div className="mt-2 text-[#e2e8f0] space-y-1">
              <p>• Developed responsive websites for 20+ clients</p>
              <p>• Maintained and updated legacy codebases</p>
              <p>• Participated in agile development processes</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  projects: {
    description: "View my featured projects",
    execute: () => (
      <div className="space-y-4">
        <div className="text-xl underline font-semibold">
          Highlight Projects
        </div>

        <div className="space-y-4">
          <div className="border border-[#3a4556] rounded p-3">
            <div className="flex items-start justify-between">
              <div className="underline font-semibold">
                <a
                  href="https://swiftstake.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Swift Stake Platform
                </a>
              </div>
              <div className="text-[#94a3b8] text-sm">2024</div>
            </div>
            <div className="mt-2 text-[#e2e8f0]">
              Swift Stake is a fast and secure staking platform that enables
              users to participate in decentralized finance (DeFi) protocols.
              The project integrates real-time APIs to provide updated
              opportunities and rewards. With a focus on user experience and
              security, Swift Stake simplifies earning passive income through
              blockchain technology.
            </div>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                React
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                Next.js
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                Stripe
              </span>
            </div>
          </div>

          <div className="border border-[#3a4556] rounded p-3">
            <div className="flex items-start justify-between">
              <div className="underline font-semibold">
                <a
                  href="https://bootsportal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Landing Turtle
                </a>
              </div>
              <div className="text-[#94a3b8] text-sm">2023</div>
            </div>
            <div className="mt-2 text-[#e2e8f0]">
              Landing Turtle is an animated and visually engaging landing page
              created to showcase modern web design techniques. Utilizing
              Next.js, Tailwind CSS, and Framer Motion, the project demonstrates
              smooth animations, responsive layouts, and creative UI elements.
              It serves as a template for startups and personal portfolios
              seeking a memorable first impression.
            </div>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                React
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                Next js
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                PrismaORM
              </span>

              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                TypeScript
              </span>

              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                DeepSeek Api
              </span>
            </div>
          </div>

          <div className="border border-[#3a4556] rounded p-3">
            <div className="flex items-start justify-between">
              <div className="underline font-semibold">
                <a
                  href="https://bootsportal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Chatbot AI
                </a>
              </div>
              <div className="text-[#94a3b8] text-sm">2023</div>
            </div>
            <div className="mt-2 text-[#e2e8f0]">
              Chatbot AI is an intelligent conversational assistant powered by
              the DeepSeek API and Next.js. The chatbot can answer questions,
              provide recommendations, and automate tasks for users. With a
              focus on natural language understanding and a user-friendly
              interface, Chatbot AI brings the power of artificial intelligence
              to everyday interactions.
            </div>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                React
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                Next.js
              </span>
              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                TypeScript
              </span>

              <span className="px-2 py-1 bg-[#3a4556] text-[#22d3ee] rounded">
                Framer Motion
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  contact: {
    description: "Get in touch with me",
    execute: () => (
      <div className="space-y-4">
        <div className="underline text-xl font-semibold">
          Contact Information
        </div>

        <div className="space-y-3 text-[#e2e8f0]">
          <div className="flex items-center gap-3">
            <span className="text-[#10b981] w-24">Email:</span>
            <a
              href="mailto:johannyantoniorodriguezgmai@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              johannyantoniorodriguezgmai@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#10b981] w-24">GitHub:</span>
            <a
              href="https://github.com/main2526"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              https://github.com/main2526
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#10b981] w-24">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/bootsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              https://www.linkedin.com/in/bootsx/
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#10b981] w-24">Twitter:</span>
            <a
              href="https://x.com/BootsDevX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              https://x.com/BootsDevX
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#10b981] w-24">Website:</span>
            <a
              href="https://portfolioboots.vercel.app/en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              portfolio.dev
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#3a4556] text-[#94a3b8]">
          Feel free to reach out for collaborations, opportunities, or just to
          say hi!
        </div>
      </div>
    ),
  },

  resume: {
    description: "Download my resume",
    execute: () => (
      <div className="space-y-3">
        <div className="text-[#10b981]">✓ Resume download initiated...</div>
        <div className="text-[#94a3b8]">
          In a real implementation, this would download your resume PDF.
        </div>
        <div className="text-[#22d3ee] hover:underline cursor-pointer">
          <a href="/cv.pdf" download>
            → Click here to download resume.pdf
          </a>
        </div>
      </div>
    ),
  },

  clear: {
    description: "Clear the terminal screen",
    execute: () => null,
  },

  echo: {
    description: "Print a message to the terminal",
    usage: "echo [message]",
    execute: (args = []) => (
      <div className="text-[#e2e8f0]">{(args ?? []).join(" ") || ""}</div>
    ),
  },

  whoami: {
    description: "Display current user",
    execute: () => (
      <div className="text-[#e2e8f0]">
        Johanny A. Rodriguez (FullStack Developer)
      </div>
    ),
  },

  date: {
    description: "Display current date and time",
    execute: () => (
      <div className="text-[#e2e8f0]">{new Date().toString()}</div>
    ),
  },

  banner: {
    description: "Display welcome banner",
    execute: () => (
      <div className="text-[#22d3ee] font-mono space-y-2">
        <pre className="text-lg leading-relaxed font-bold">
          {`
> const developer = {
>   name: "JOHANNY A. RODRIGUEZ",
>   role: "FullStack Developer",
>   status: "Ready to Code 🚀",
    languages: ['Spanish','English']
> }
`}
        </pre>
        <div className="text-[#10b981] text-sm">
          {"// ═══════════════════════════════════════════════════════════════"}
        </div>
        <div className="mt-4 text-[#e2e8f0]  text-base">
          Welcome to my interactive terminal portfolio!
        </div>
        <div className="text-[#94a3b8] text-sm ">
          Type <span className="text-[#10b981] font-semibold">help</span> to
          explore all commands.
        </div>
      </div>
    ),
  },

  social: {
    description: "Display social media links",
    execute: () => (
      <div className="space-y-2">
        <div className="text-[#22d3ee] font-semibold">Social Links:</div>
        <div className="pl-4 space-y-1 text-[#e2e8f0]">
          <div>
            →{" "}
            <a
              href="https://github.com/main2526"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              GitHub
            </a>
          </div>
          <div>
            →{" "}
            <a
              href="https://www.linkedin.com/in/bootsx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div>
            →{" "}
            <a
              href="https://youtube.com/@bxdev-xs?si=cRarH01tprrh2bqT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22d3ee] hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    ),
  },
};

// --- COMPONENTE PRINCIPAL ---

export default function Terminal(): React.ReactElement {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  // Mensaje de bienvenida (Now uses the banner command)
  useEffect(() => {
    // Execute the banner command output directly for initial greeting
    setHistory([{ type: "output", content: commands.banner.execute() }]);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => inputRef.current?.focus();

  const executeCommand = (cmdStr: string) => {
    const trimmedCmd = cmdStr.trim();
    if (!trimmedCmd) {
      setHistory((prev) => [...prev, { type: "command", content: "" }]);
      return;
    }

    // Agregar al historial de comandos (flechas arriba/abajo)
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Agregar la línea visual del comando ejecutado
    const newHistoryItem: HistoryItem = {
      type: "command",
      content: trimmedCmd,
    };

    // Parsear
    const [cmdName, ...args] = trimmedCmd.split(" ");
    const commandObj = commands[cmdName.toLowerCase()];

    if (cmdName.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }

    if (commandObj) {
      const output = commandObj.execute(args);
      const outItem: HistoryItem = { type: "output", content: output };
      setHistory((prev) => [...prev, newHistoryItem, outItem]);
    } else {
      const errItem: HistoryItem = {
        type: "error",
        content: `Command not found: "${cmdName}". Type "help".`,
      };
      setHistory((prev) => [...prev, newHistoryItem, errItem]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Navegación historial (Arriba)
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
    // Navegación historial (Abajo)
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
    // Autocompletado (Tab)
    else if (e.key === "Tab") {
      e.preventDefault();
      const available = Object.keys(commands);
      const matches = available.filter((c) =>
        c.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
        setSuggestions([]);
      } else if (matches.length > 1) {
        setSuggestions(matches);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    if (val) {
      const matches = Object.keys(commands).filter((c) =>
        c.startsWith(val.toLowerCase())
      );
      setSuggestions(matches.length > 1 ? matches : []);
    } else {
      setSuggestions([]);
    }
  };

  // Funciones para arrastrar la terminal
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".bg-gray-800")) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="min-h-screen items-center flex  justify-center p-4 font-mono text-sm md:text-base"
      onClick={handleTerminalClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Modal Móvil (Estilizado oscuro) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm md:hidden animate-fadeIn px-4">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 text-center w-full max-w-sm">
            <div className="text-4xl mb-4">🖥️</div>
            <h2 className="text-xl font-bold text-red-400 mb-2">
              Resolution Not Supported
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              This terminal is optimized for larger screens.
              <br />
              Please use a desktop device.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-800 border border-green-500 text-green-400 rounded hover:bg-green-900/30 transition-colors w-full uppercase text-xs tracking-wider"
            >
              Close Warning
            </button>
          </div>
        </div>
      )}

      {/* Contenedor Terminal */}
      <div
        ref={terminalContainerRef}
        className="w-[900px] min-w-[900px] max-w-[900px] h-[600px] min-h-[600px] max-h-[600px] bg-black/40 border border-gray-700 rounded-lg overflow-hidden flex flex-col relative cursor-move"
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(0, 0)",
          transition: isDragging ? "none" : "all 0.3s ease-out",
        }}
      >
        {/* Barra de Título */}
        <div
          className="bg-gray-800 py-2 px-4 flex items-center justify-between border-b border-gray-700 select-none cursor-grab active:cursor-grabbing hover:bg-gray-700 transition-colors"
          onMouseDown={handleMouseDown}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
          </div>
          <div className="text-[#22d3ee] text-xs md:text-sm font-bold tracking-wide">
            ~/portfolio/terminal/app.exe
          </div>
          <div className="w-8"></div>
        </div>

        {/* Área de Contenido */}
        <div ref={terminalRef} className="flex-grow p-4 overflow-y-auto">
          {/* Historial */}
          <div className="space-y-1">
            {history.map((line, index) => (
              <div key={index}>
                {line.type === "command" && (
                  <div className="flex flex-wrap">
                    <span className="text-blue-400 shrink-0 select-none mr-2">
                      BootsDevX@BootsDev-X:~$
                    </span>
                    <span className="text-white break-all">{line.content}</span>
                  </div>
                )}
                {line.type === "output" && (
                  <div className="text-gray-300 ml-0 md:ml-2 mb-2 break-words">
                    {line.content}
                  </div>
                )}
                {line.type === "error" && (
                  <div className="text-red-400 ml-0 md:ml-2 mb-2">
                    {line.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sugerencias (Tab) */}
          {suggestions.length > 0 && (
            <div className="mt-2 text-gray-500 text-xs">
              Suggestions: {suggestions.join("  ")}
            </div>
          )}

          {/* Línea de Entrada Activa */}
          <form onSubmit={handleSubmit} className="flex mt-2">
            <span className="text-blue-400 shrink-0 mr-2 select-none">
              BootsDevX@BootsDev-X:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none caret-[#10b981] border-none p-0 m-0"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>

        {/* Footer con ayuda visual (Solo desktop) */}
        <div className="hidden md:block bg-gray-900 border-t border-gray-800 p-1 text-center">
          <p className="text-gray-600 text-xs">
            <span className="bg-gray-800 px-1 rounded mx-1">↑/↓</span> History
            <span className="text-gray-700 mx-2">•</span>
            <span className="bg-gray-800 px-1 rounded mx-1">Tab</span>{" "}
            Autocomplete
          </p>
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        /* Custom Scrollbar Styles */
        div[ref*="terminalRef"]::-webkit-scrollbar {
          width: 6px;
        }
        div[ref*="terminalRef"]::-webkit-scrollbar-track {
          background: transparent;
        }
        div[ref*="terminalRef"]::-webkit-scrollbar-thumb {
          background-color: #10b981;
          border-radius: 3px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        div[ref*="terminalRef"]::-webkit-scrollbar-thumb:hover {
          background-color: #059669;
          background-clip: content-box;
        }
      `}</style>
    </div>
  );
}
