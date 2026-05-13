import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Terminal, Brain, Rocket } from "lucide-react";
import "./styles.css";

const liveMessages = [
  ["rotmaxxing", "WE'RE SO BACK 🧠"],
  ["degen4life", "MY WALLET IS MELTING 🔥"],
  ["terminalape", "ANOTHER BRAIN CELL LOST ☣"],
  ["schizo_trader", "BUY THE DIP. BUY THE TOP. SAME THING."],
  ["pepecaller", "$ROT LOOKING VIOLENT 🚀"],
  ["unhingedape", "I SOLD MY SANITY FOR MORE ROT"],
];

function MatrixRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 text-xs font-mono"
          style={{ left: `${i * 4}%` }}
          animate={{ y: ["-10%", "120%"] }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "linear",
          }}
        >
          ROT.exe
          <br />
          010101
          <br />
          BRAINROT
        </motion.div>
      ))}
    </div>
  );
}

export default function App() {
  const [feed, setFeed] = useState(liveMessages.slice(0, 4));
  const [brainCells, setBrainCells] = useState(999901234);
  const [terminalText, setTerminalText] = useState("");
  const [scan, setScan] = useState("");

  const contract =
    "6cod81CaFnZs91KUL6vYgsbZfLzHdYmfUMBXbtLwCX8Z";

  useEffect(() => {
    const script =
      "> booting rot protocol...\n> terminal contamination detected...\n> meme infection spreading...\n> no cure found";

    let i = 0;

    const timer = setInterval(() => {
      setTerminalText(script.slice(0, i));
      i++;
      if (i > script.length) i = 0;
    }, 35);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBrainCells((v) => v + Math.floor(Math.random() * 17));
    }, 900);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeed((prev) => [
        ...prev.slice(1),
        liveMessages[Math.floor(Math.random() * liveMessages.length)],
      ]);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const runScan = () => {
    const results = [
      "dopamine receptors: DESTROYED",
      "IQ loading... failed",
      "terminal meme exposure: 99%",
      "reality coherence: unstable",
      "wallet condition: degenerate",
    ];

    setScan(results[Math.floor(Math.random() * results.length)]);
  };

  const copyCA = () => {
    navigator.clipboard.writeText(contract);
    alert("Contract copied");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixRain />

      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-green-500/10" />

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-10 min-h-screen">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-black text-green-400">
              $ROT
            </div>

            <div className="flex gap-4">
              <a
                href="https://t.me/jointherot"
                className="px-4 py-3 rounded-xl bg-green-400 text-black font-bold"
              >
                JOIN TELEGRAM
              </a>

              <a
                href="#"
                className="px-4 py-3 rounded-xl bg-fuchsia-600 font-bold"
              >
                X / TWITTER
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div>
              <div className="inline-block border border-fuchsia-500 rounded-full px-4 py-2 bg-black/60">
                MEMETIC HAZARD ☣
              </div>

              <h1 className="text-7xl font-black mt-8 leading-tight">
                THE MOST
                <span className="block text-fuchsia-500">
                  TERMINALLY ONLINE
                </span>
                COIN EVER MADE
              </h1>

              <p className="mt-8 text-2xl text-gray-300">
                NO UTILITY.
                <span className="text-green-400"> NO ROADMAP.</span>
                <span className="text-fuchsia-500"> ONLY ROT.</span>
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <button
                  onClick={copyCA}
                  className="px-6 py-4 rounded-xl border border-green-400 text-green-400 font-bold flex items-center gap-2"
                >
                  <Copy size={18} />
                  COPY CA
                </button>

                <button
                  onClick={runScan}
                  className="px-6 py-4 rounded-xl bg-fuchsia-600 font-bold"
                >
                  RUN BRAINSCAN
                </button>
              </div>

              {scan && (
                <div className="mt-6 text-green-300 font-mono">
                  {scan}
                </div>
              )}
            </div>

            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mx-auto w-96 h-96 rounded-full bg-gradient-to-br from-fuchsia-500 to-green-400 p-1 shadow-[0_0_100px_rgba(255,0,170,0.6)]"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-9xl">
                  🧠
                </div>
              </motion.div>

              <div className="absolute -bottom-8 right-0 bg-black/80 border border-cyan-400 rounded-2xl p-4 w-64 shadow-[0_0_40px_rgba(0,229,255,0.4)]">
                <div className="text-cyan-300 text-xs">
                  PEPE LIVE TRADING
                </div>

                <div className="text-6xl mt-3">🐸</div>

                <div className="absolute right-4 top-10 w-24 h-36 rounded-xl bg-black border border-cyan-400 p-2">
                  <div className="text-[8px] text-green-400">
                    DEX LIVE
                  </div>

                  <motion.div
                    animate={{ height: [20, 60, 35, 75] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="bg-green-400 rounded mt-2 w-full"
                  />

                  <div className="text-[8px] text-fuchsia-400 mt-3">
                    BUY +128%
                  </div>

                  <div className="text-[8px] text-gray-300 animate-pulse mt-3">
                    typing...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div className="bg-black/80 border border-green-500 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-green-400 mb-4">
              <Terminal size={18} />
              LIVE TERMINAL
            </div>

            <pre className="text-green-300 font-mono whitespace-pre-wrap">
              {terminalText}█
            </pre>
          </div>

          <div className="bg-black/80 border border-fuchsia-500 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-fuchsia-400 mb-4">
              <Brain size={18} />
              BRAIN CELLS LOST
            </div>

            <div className="text-5xl font-black text-green-400">
              {brainCells.toLocaleString()}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="bg-black/80 border border-cyan-500 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-cyan-400 mb-6">
              <Rocket size={18} />
              LIVE COMMUNITY FEED
            </div>

            {feed.map(([user, msg], i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-4 mb-3"
              >
                <span className="text-fuchsia-400 font-bold">
                  {user}
                </span>
                : {msg}
              </div>
            ))}

            <div className="text-gray-400 animate-pulse">
              someone_is_typing...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
