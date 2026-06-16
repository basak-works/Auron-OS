"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <main className="h-screen w-screen bg-black text-white overflow-hidden relative font-sans selection:bg-cyan-500/30">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"
      />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mb-6"
        >
          AURON OS
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-400 text-lg font-mono mb-12 tracking-widest animate-pulse"
        >
          INITIALIZING NEURAL INTERFACE...
        </motion.p>

        {/* Floating Input Box */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 p-2 rounded-2xl shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]"
        >
          <input 
            type="text"
            className="w-full bg-transparent p-4 outline-none text-white text-xl placeholder-gray-600"
            placeholder="Command the OS..."
          />
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </main>
  );
}

