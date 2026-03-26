import RobotCheer from "./RobotCheer"; // Import the new component

import { useState, useEffect } from "react";

function App() {
  const [started, setStarted] = useState(false);
  const [isOptimized, setIsOptimized] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setIsOptimized(true);
  };

  useEffect(() => {
    const actions = ["clap", "jump", "clap", "jump", "clap", "jump"];
    if (!isOptimized) {
      const interval = setInterval(() => {
        setAnimIndex((i) => {
          const next = (i + 1) % actions.length;
          const action = actions[next];
          if (action === "clap") clapSound.play().catch(() => {});
          if (action === "jump") jumpSound.play().catch(() => {});
          return next;
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isOptimized]);

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
              Created by your instructor <strong>DN Josh</strong> for Grade 5
              ICT. Adapted from earlier Scratch exercises.
            </p>
            <div className="text-left text-slate-300 mb-4 max-h-64 overflow-y-auto whitespace-pre-wrap pb-2">
              <strong>Introduction to Algorithm Efficiency</strong>
              <p className="mt-2">
                In computing, an <strong>algorithm</strong> is a sequence of
                steps that a computer follows to perform a task. The
                <strong>efficiency</strong> of an algorithm describes how many
                resources it uses — typically time (how fast it runs) and space
                (how much memory it requires).
              </p>
              <p className="mt-2">
                Efficient algorithms do the same work with fewer operations,
                fewer repetitions, and clearer logic. Learning to spot
                unnecessary repetition and to restructure solutions using
                concepts like
                <em>iteration</em> (loops) or <em>selection</em> makes your code
                faster, easier to maintain, and kinder to the computer.
              </p>
              <p className="mt-2">This activity will help you:</p>
              <ul className="list-disc ml-5 mt-1">
                <li>
                  Recognize when a solution is doing more work than needed;
                </li>
                <li>
                  Compare two approaches by counting steps and estimating time;
                </li>
                <li>Refactor wasteful code into a streamlined version.</li>
              </ul>
              <p className="mt-2">
                Understanding efficiency is essential because computers have
                limits – better algorithms run quicker, use less power, and are
                easier to read and debug.
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
