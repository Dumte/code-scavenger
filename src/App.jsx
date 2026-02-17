import RobotCheer from "./RobotCheer"; // Import the new component

import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => setStarted(true);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 flex flex-col">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-500">
          ICT Grade 5: Algorithm Efficiency
        </h1>
        <p className="text-slate-400 mt-2">
          WALT: Compare and optimize algorithms [cite: 3]
        </p>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        {!started ? (
          <div className="max-w-xl bg-slate-900 p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
            <p className="text-slate-300 mb-4">
              This interactive demo will walk you through a simple challenge about
              algorithm efficiency. Your task is to turn verbose code into a
              more efficient version using basic programming concepts like loops.
            </p>
            <button
              onClick={handleStart}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-transform hover:scale-105"
            >
              Start the Challenge 🚀
            </button>
          </div>
        ) : (
          <div className="w-full">
            <button
              onClick={() => setStarted(false)}
              className="mb-4 text-sm text-blue-300 hover:underline"
            >
              ← Back to instructions
            </button>
            <RobotCheer />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
