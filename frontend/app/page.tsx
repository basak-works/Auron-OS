export default function Home() {
  return (
    <main className="flex h-screen bg-black text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-800 p-6 hidden md:flex flex-col justify-between">
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
      <div className="flex-1 flex flex-col items-center justify-center relative p-6">
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="z-10 w-full max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Welcome back, Rajesh.</h2>
          <p className="text-gray-400 mb-12 text-center text-sm md:text-base">
            System initialized. How can Auron assist you today?
          </p>

          {/* Input Console */}
          <div className="w-full bg-gray-900/50 border border-gray-700 rounded-2xl p-2 pl-6 flex items-center shadow-2xl backdrop-blur-sm">
            <input
              type="text"
              placeholder="Enter command or ask a question..."
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 w-full"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-xl font-medium transition ml-2 shadow-lg shadow-blue-500/20">
              Execute
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

