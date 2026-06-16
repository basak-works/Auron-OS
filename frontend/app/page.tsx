"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuronOS() {
  const [isBooting, setIsBooting] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [activeTab, setActiveTab] = useState("AI CORE");

  // Boot Sequence Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleExecute = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Processing query through Neural Engine... Backend API connection pending." }
      ]);
    }, 1000);
  };

  // 1. LANDING SCREEN (Blueprint 1)
  if (isBooting) {
    return (
      <main className="h-screen w-screen bg-[#050505] text-cyan-400 flex flex-col items-center justify-center font-mono relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          <h1 className="text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8">
            AURON OS
          </h1>
        </motion.div>
        <p className="tracking-[0.3em] mb-8 text-sm">INITIALIZING NEURAL CORE...</p>
        <div className="w-64 h-1 bg-gray-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
          />
        </div>
        <div className="mt-8 text-xs text-gray-500 space-y-2 text-left w-64">
          <p>Neural Core <span className="text-green-400 float-right">100%</span></p>
          <p>Security Layer <span className="text-green-400 float-right">ONLINE</span></p>
          <p>Memory System <span className="text-green-400 float-right">ACTIVE</span></p>
        </div>
      </main>
    );
  }

  // 2. MAIN DASHBOARD (Blueprint 2 & 3)
  return (
    <main className="h-screen w-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden selection:bg-purple-500/30">
      {/* TOP HEADER */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800 bg-[#0a0a0a]">
        <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          AURON OS
        </div>
        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="text-gray-400 hover:text-cyan-400 cursor-pointer transition">Profile ⚙</span>
        </div>
      </header>

      {/* NAVIGATION TABS */}
      <nav className="flex justify-center gap-4 md:gap-12 p-3 border-b border-gray-800/50 bg-[#080808] text-xs md:text-sm font-mono font-bold tracking-widest">
        {["AI CORE", "MEMORY", "SECURITY", "AUTOMATION"].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition px-2 py-1 ${activeTab === tab ? "text-cyan-400 border-b-2 border-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "text-gray-500 hover:text-cyan-200"}`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* AI CORE CHAT INTERFACE */}
        <div className="flex-1 flex flex-col p-4 md:p-8 relative z-10">
          <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-widest text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]"></span>
            NEURAL ENGINE ACTIVE
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide pb-20">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full opacity-60">
                <h2 className="text-4xl font-semibold mb-2">AI COMMAND CENTER</h2>
                <p className="text-gray-400 font-mono text-sm">"How can Auron assist you today, Rajesh?"</p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-xl border ${msg.role === "user" ? "bg-gray-800/50 border-gray-700 text-white" : "bg-[#0a1520] border-cyan-900/50 text-cyan-50 font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.1)]"}`}>
                    {msg.role === "ai" && <div className="text-cyan-500 text-xs mb-2">AURON_RESPONSE //</div>}
                    {msg.content}
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* INPUT BAR WITH SEND BUTTON */}
          <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-700 p-2 rounded-xl flex items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleExecute()}
                placeholder="[ Enter command or ask a question... ]"
                className="flex-1 bg-transparent p-3 outline-none text-white font-mono text-sm placeholder-gray-600"
              />
              <button 
                onClick={handleExecute}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-bold tracking-widest text-xs transition shadow-[0_0_15px_rgba(147,51,234,0.3)] flex items-center gap-2"
              >
                EXECUTE <span>▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* SYSTEM STATUS SIDEBAR (Blueprint 2) */}
        <aside className="w-64 border-l border-gray-800 p-6 hidden lg:flex flex-col bg-[#080808]/50 z-10">
          <h3 className="text-gray-500 font-mono text-xs tracking-[0.2em] mb-6 border-b border-gray-800 pb-2">SYSTEM STATUS</h3>
          
          <div className="space-y-6 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1 text-gray-400"><span>CPU</span> <span className="text-[#00ff00]">32%</span></div>
              <div className="w-full bg-gray-900 h-1 rounded"><div className="bg-[#00ff00] h-1 rounded w-[32%]"></div></div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1 text-gray-400"><span>MEMORY</span> <span className="text-yellow-400">76%</span></div>
              <div className="w-full bg-gray-900 h-1 rounded"><div className="bg-yellow-400 h-1 rounded w-[76%]"></div></div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-400 mb-2">SECURITY: <span className="text-[#00ff00] drop-shadow-[0_0_5px_#00ff00]">SAFE</span></p>
              <p className="text-gray-400">AGENTS: <span className="text-cyan-400 drop-shadow-[0_0_5px_#06b6d4]">5 ACTIVE</span></p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

