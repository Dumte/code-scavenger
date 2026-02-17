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
            <p className="text-xs text-slate-500 mb-2">
              Created by your instructor for Grade 5 ICT. Adapted from earlier
              Scratch exercises.
            </p>
            <div className="text-left text-slate-300 mb-4 max-h-64 overflow-y-auto whitespace-pre-wrap pb-2">
              <strong>Reading guide:</strong>
              <p className="mt-2">
                Note 2 Subject: ICT Class: 5th grade Topic: Algorithm Efficiency
                Objective: WALT (We Are Learning To) Compare algorithms for the
                same task, identify inefficient steps (e.g., unnecessary
                repetition), and improve them to make them more efficient (fewer
                steps, faster, or simpler) Keywords: Algorithm, efficiency,
                optimise, repetition, iteration (loop), selection, compare,
                flowchart Main Focus • Spot waste in algorithms (too many
                repeated actions). • Compare two solutions: count steps, predict
                time. • Improve by using loops (iteration), better selection, or
                simpler logic. • Understand why efficiency matters (saves
                computer time, power, easier to read/debug).
              </p>
            </div>
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
