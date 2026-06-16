"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const handleExecute = () => {
    if (!input.trim()) return;
    
    // ইউজারের মেসেজ অ্যাড করা
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // আপাতত একটি ফেক (Fake) AI রেসপন্স দেখানো
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: `Command received. System is preparing to execute: "${input}". (Backend API connection pending...)` }
      ]);
    }, 1000);
  };

  return (
    <main className="flex h-screen bg-black text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-6 hidden md:flex flex-col justify-between z-20 bg-black">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-10">
            Auron OS
          </h1>
          <nav className="space-y-6 text-gray-400 font-medium">
            <p className="hover:text-cyan-400 cursor-pointer transition flex items-center gap-3">🧠 AI Engine</p>
            <p className="hover:text-cyan-400 cursor-pointer transition flex items-center gap-3">🧬 Knowledge</p>
            <p className="hover:text-cyan-400 cursor-pointer transition flex items-center gap-3">⚡ Automation</p>
            <p className="hover:text-cyan-400 cursor-pointer transition flex items-center gap-3">🕵️ Security</p>
          </nav>
        </div>
        <div className="text-xs text-gray-600 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          System Status: Online
        </div>
      </div>

      {/* Main Interface */}
      <div className="flex-1 flex flex-col relative p-4 md:p-6 h-full">
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Chat / Result Area */}
        <div className="flex-1 overflow-y-auto z-10 w-full max-w-4xl mx-auto flex flex-col gap-4 pb-20 pt-10 scrollbar-hide">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-50 mt-20">
               <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-center">Welcome back, Rajesh.</h2>
               <p className="text-gray-400 mb-12 text-center text-sm md:text-base">System initialized. How can Auron assist you today?</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`p-4 rounded-2xl max-w-[85%] ${msg.role === "user" ? "bg-gray-800/80 ml-auto border border-gray-700" : "bg-blue-900/20 mr-auto border border-blue-800/50 text-cyan-50"}`}>
                <p className="text-sm md:text-base">{msg.content}</p>
              </div>
            ))
          )}
        </div>

        {/* Input Console */}
        <div className="z-20 w-full max-w-4xl mx-auto mt-auto">
          <div className="w-full bg-gray-900/80 border border-gray-700 rounded-2xl p-2 pl-4 md:pl-6 flex items-center shadow-2xl backdrop-blur-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleExecute()}
              placeholder="Enter command or ask a question..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 w-full text-sm md:text-base"
            />
            <button 
              onClick={handleExecute}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-medium transition ml-2 shadow-lg shadow-blue-500/20 text-sm md:text-base"
            >
              Execute
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

