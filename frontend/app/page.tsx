"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuronOS() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeTab, setActiveTab] = useState("HOME");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", content: "System initialized. Neural core active. Waiting for command..." }
  ]);

  // Boot Sequence
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
        { role: "ai", content: "Processing request through Auron Intelligence Core... [Backend Disconnected]" }
      ]);
    }, 1000);
  };

  // ==========================================
  // 1. SPLASH / BOOT SCREEN (Fixed Viewport)
  // ==========================================
  if (isBooting) {
    return (
      <main className="fixed inset-0 bg-[#020202] text-cyan-500 flex flex-col items-center justify-center font-mono z-50 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        <motion.div animate={{ scale: [0.9, 1.1, 1], opacity: [0, 1, 1] }} transition={{ duration: 1.5 }}>
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-cyan-500/30 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
            <div className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full bg-cyan-500 blur-xl opacity-50"></div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4"
        >
          AURON OS
        </motion.h1>

        <p className="tracking-widest text-xs md:text-sm text-cyan-400/80 mb-8 animate-pulse">INITIALIZING NEURAL CORE...</p>
        
        <div className="w-64 md:w-96 h-1 bg-gray-900 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]"
          />
        </div>
      </main>
    );
  }

  // ==========================================
  // 2. MAIN APPLICATION (Fixed Viewport - No White Gaps)
  // ==========================================
  return (
    <main className="fixed inset-0 bg-[#050505] text-white flex font-sans overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      {/* -------------------------------------- */}
      {/* DESKTOP SIDEBAR */}
      {/* -------------------------------------- */}
      <aside className="hidden lg:flex w-[260px] flex-col border-r border-gray-800 bg-[#080808]/80 backdrop-blur-xl z-20 h-full flex-shrink-0">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AURON</h1>
          <div className="flex items-center gap-2 mt-2 text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span> System Online
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 font-mono text-sm overflow-y-auto">
          {[
            { id: "HOME", icon: "◉", label: "Dashboard" },
            { id: "AI", icon: "🧠", label: "AI Core" },
            { id: "VAULT", icon: "📚", label: "Memory Vault" },
            { id: "AGENTS", icon: "🤖", label: "AI Agents" },
            { id: "SECURITY", icon: "🔐", label: "Security" },
            { id: "AUTO", icon: "⚡", label: "Automation" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === item.id 
                  ? "bg-gradient-to-r from-cyan-900/40 to-transparent border-l-2 border-cyan-400 text-cyan-300 shadow-[inset_20px_0_20px_-20px_rgba(6,182,212,0.3)]" 
                  : "text-gray-500 hover:text-cyan-100 hover:bg-gray-900/50"
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* -------------------------------------- */}
      {/* MAIN CONTENT AREA */}
      {/* -------------------------------------- */}
      <div className="flex-1 flex flex-col relative z-10 w-full h-full overflow-hidden">
        
        {/* TOP HEADER */}
        <header className="flex justify-between items-center p-4 lg:px-8 lg:py-5 border-b border-gray-800/50 bg-[#0a0a0a]/80 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-gray-400 text-xl">☰</button>
            <h1 className="text-lg font-black tracking-widest text-cyan-400">AURON OS</h1>
          </div>
          
          <div className="hidden lg:flex flex-1 max-w-md mx-auto items-center bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2">
            <span className="text-gray-500 mr-2">🔍</span>
            <input type="text" placeholder="Search knowledge base..." className="bg-transparent border-none outline-none text-sm w-full text-gray-300 placeholder-gray-600" />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-cyan-400 transition">🔔</button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-xs font-bold">R</div>
            </div>
          </div>
        </header>

        {/* DYNAMIC SCROLLABLE CONTAINER */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
          <AnimatePresence mode="wait">
            
            {/* VIEW: HOME / DASHBOARD */}
            {activeTab === "HOME" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="h-full flex flex-col gap-6">
                
                {/* Status Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-[#0f1115] border border-gray-800 p-4 md:p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-110 transition">⚡</div>
                    <p className="text-gray-500 font-mono text-xs mb-1">CPU LOAD</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-2">32<span className="text-sm text-gray-500">%</span></p>
                    <div className="w-full h-1 bg-gray-900 rounded"><div className="h-full bg-cyan-400 w-[32%] shadow-[0_0_8px_#06b6d4]"></div></div>
                  </div>
                  <div className="bg-[#0f1115] border border-gray-800 p-4 md:p-6 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-110 transition">🧠</div>
                    <p className="text-gray-500 font-mono text-xs mb-1">MEMORY</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-2">76<span className="text-sm text-gray-500">%</span></p>
                    <div className="w-full h-1 bg-gray-900 rounded"><div className="h-full bg-purple-500 w-[76%] shadow-[0_0_8px_#a855f7]"></div></div>
                  </div>
                  <div className="hidden lg:block bg-[#0f1115] border border-gray-800 p-4 md:p-6 rounded-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-110 transition">🤖</div>
                    <p className="text-gray-500 font-mono text-xs mb-1">ACTIVE AGENTS</p>
                    <p className="text-3xl font-bold text-white">05 <span className="text-sm text-green-500 font-normal">Online</span></p>
                  </div>
                </div>

                {/* Main Dashboard UI */}
                <div className="flex flex-col lg:flex-row gap-6 flex-1">
                  
                  {/* Left: AI Core Visualizer */}
                  <div className="flex-1 bg-gradient-to-b from-[#0a0c10] to-[#050505] border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[250px]">
                    <div className="w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                       <div className="w-24 h-24 border border-purple-500/30 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                       <div className="w-12 h-12 bg-cyan-400 rounded-full blur-md animate-pulse"></div>
                    </div>
                    <p className="mt-8 font-mono tracking-[0.2em] text-cyan-500 text-xs md:text-sm z-10">NEURAL CORE SYNCED</p>
                  </div>

                  {/* Right: Actions */}
                  <div className="lg:w-1/3 flex flex-col gap-4">
                    <div className="lg:hidden grid grid-cols-2 gap-4">
                      {['💬 Quick Chat', '📄 Files', '🕵️ Network Scan', '⚙️ Settings'].map(act => (
                        <button key={act} onClick={() => setActiveTab(act.includes('Chat') ? 'AI' : act.includes('Files') ? 'VAULT' : act.includes('Scan') ? 'SECURITY' : 'HOME')} className="bg-[#0f1115] border border-gray-800 p-4 rounded-2xl text-sm text-gray-300 hover:border-cyan-500 transition">
                          {act}
                        </button>
                      ))}
                    </div>
                    <div className="hidden lg:flex flex-col bg-[#0f1115] border border-gray-800 rounded-2xl p-6 flex-1">
                      <h3 className="font-mono text-sm text-gray-500 tracking-widest mb-4 border-b border-gray-800 pb-2">RECENT OPERATIONS</h3>
                      <ul className="space-y-4">
                        <li className="flex gap-3"><span className="text-green-500">✓</span> <div><p className="text-sm text-gray-200">Analyzed WBJEE Physics PDF</p><p className="text-xs text-gray-600">Saved to Vector DB</p></div></li>
                        <li className="flex gap-3"><span className="text-green-500">✓</span> <div><p className="text-sm text-gray-200">Network Scan Complete</p><p className="text-xs text-gray-600">No threats detected</p></div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW: AI CORE */}
            {activeTab === "AI" && (
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-6 pb-4 scrollbar-hide">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl ${msg.role === "user" ? "bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-800/50 text-white rounded-br-none" : "bg-[#0f1115] border border-gray-800 text-gray-300 font-mono text-sm rounded-tl-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]"}`}>
                        {msg.role === "ai" && <div className="text-cyan-500 text-xs mb-2 tracking-widest flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> AURON_RESPONSE</div>}
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-[#0f1115] border border-gray-700 rounded-2xl p-2 flex items-center gap-2 flex-shrink-0 mt-2">
                  <button className="p-3 text-gray-400 hidden md:block">📎</button>
                  <input
                    type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleExecute()}
                    placeholder="Command Auron or ask a question..."
                    className="flex-1 bg-transparent p-2 outline-none text-white font-mono text-sm"
                  />
                  <button onClick={handleExecute} className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl font-bold text-sm transition hover:bg-cyan-400 hover:text-black">SEND</button>
                </div>
              </motion.div>
            )}

            {/* VIEW: MEMORY VAULT (New Addition) */}
            {activeTab === "VAULT" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                <div className="bg-[#0f1115] border border-gray-800 rounded-3xl p-6 md:p-8">
                  <h2 className="text-xl font-mono text-gray-300 mb-6 border-b border-gray-800 pb-4">MEMORY VAULT</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Physics_Notes_Chapter4.pdf', 'WBJEE_Previous_Years.pdf', 'Termux_Security_Logs.txt', 'System_Config.json'].map((file, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl hover:border-purple-500/50 transition cursor-pointer bg-[#0a0c10]">
                        <span className="text-3xl">{file.includes('pdf') ? '📕' : file.includes('txt') ? '📄' : '⚙️'}</span>
                        <div>
                          <p className="text-sm text-gray-300">{file}</p>
                          <p className="text-xs text-gray-600 font-mono mt-1">Vectorized • Ready</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 w-full border border-dashed border-gray-700 p-8 rounded-2xl text-gray-500 font-mono text-sm hover:border-cyan-500 hover:text-cyan-500 transition">
                    + UPLOAD KNOWLEDGE TO NEURAL CORE
                  </button>
                </div>
              </motion.div>
            )}

            {/* VIEW: SECURITY CENTER */}
            {activeTab === "SECURITY" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full">
                 <div className="bg-[#0f1115] border border-gray-800 rounded-3xl p-6 md:p-8">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
                      <h2 className="text-xl font-mono text-gray-300">SECURITY MONITOR</h2>
                      <span className="px-4 py-1 bg-green-500/10 text-green-500 border border-green-500/30 rounded-full font-mono text-xs">STATUS: SAFE</span>
                    </div>
                    <div className="mb-8">
                      <p className="text-gray-500 font-mono text-xs mb-2">NETWORK TRAFFIC ANALYSIS</p>
                      <div className="flex gap-1 h-12 items-end">
                        {[40, 20, 60, 30, 80, 50, 90, 40, 60, 20, 70, 50].map((h, i) => (
                          <div key={i} className="flex-1 bg-cyan-900/50 rounded-t-sm" style={{ height: `${h}%` }}>
                            <div className="w-full bg-cyan-400 rounded-t-sm animate-pulse" style={{ height: '2px' }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 font-mono text-xs mb-4">RECENT EVENT LOGS</p>
                      <div className="space-y-3 font-mono text-xs text-gray-400">
                        <p className="flex gap-4"><span className="text-cyan-500">[14:05:22]</span> <span>Firewall rules updated.</span></p>
                        <p className="flex gap-4"><span className="text-cyan-500">[14:02:10]</span> <span>Admin login verified.</span></p>
                      </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* VIEW: FALLBACK FOR OTHER TABS */}
            {["AGENTS", "AUTO"].includes(activeTab) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center opacity-50">
                <div className="text-6xl mb-6">⚙️</div>
                <h2 className="text-2xl font-mono text-cyan-500 tracking-widest mb-2">MODULE OFFLINE</h2>
                <p className="text-gray-400 font-mono text-sm">This subsystem is under construction.</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* -------------------------------------- */}
        {/* MOBILE BOTTOM NAVIGATION (Fixed to bottom) */}
        {/* -------------------------------------- */}
        <nav className="lg:hidden absolute bottom-0 left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-t border-gray-800 flex justify-around p-2 pb-6 z-50">
          {[
            { id: "HOME", icon: "🏠", label: "Home" },
            { id: "AI", icon: "🧠", label: "AI Core" },
            { id: "VAULT", icon: "📚", label: "Memory" },
            { id: "SECURITY", icon: "🔐", label: "Security" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 ${activeTab === item.id ? "text-cyan-400" : "text-gray-500"}`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-mono tracking-widest">{item.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </main>
  );
}

