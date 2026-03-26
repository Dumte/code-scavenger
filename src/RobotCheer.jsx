import React, { useState } from "react";

const RobotCheer = () => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [stepCount, setStepCount] = useState(6);
  const [animIndex, setAnimIndex] = useState(0);

  const optimize = () => {
    setIsOptimized(true);
    setStepCount(2); // The 2-line challenge met!
  };

  // preload sounds
  const clapSound = new Audio("https://www.soundjay.com/human/applause-01.mp3");
  const jumpSound = new Audio(
    "https://actions.google.com/sounds/v1/cartoon/boing.ogg",
  );

  // animation loop for the robot actions
  React.useEffect(() => {
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
    <div className="flex flex-col items-center p-8 bg-slate-900 rounded-2xl shadow-2xl border border-blue-500 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">
        Level 1: The Robot Cheer 🤖
      </h2>
      <p className="text-slate-300 mb-2 text-center">
        Our robot needs to <strong>clap and jump three times</strong>. You can
        see it move in the animation above and emoji icons beside each code
        line. After watching the six actions, rewrite the code to make the job
        shorter.
      </p>
      <div className="flex items-center justify-center h-32">
        {isOptimized ? (
          <img
            src="https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif"
            alt="robot celebrating"
            className="h-24"
          />
        ) : (
          <img
            src="https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif"
            alt="robot clapping and jumping"
            className="h-24"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* visual legend for children */}
        <div className="col-span-full text-center mb-2 text-slate-400 text-sm">
          🤖 = robot, 👏 = clap, 🤾 = jump (and listen for the sound)
        </div>
        {/* Wasteful View */}
        <div
          className={`p-4 bg-red-900/20 border-2 border-red-500 rounded-lg transition-opacity ${isOptimized ? "opacity-30" : "opacity-100"}`}
        >
          <h3 className="text-red-400 font-mono mb-2">WASTEFUL.js</h3>
          {["Clap", "Jump", "Clap", "Jump", "Clap", "Jump"].map((action, i) => (
            <div
              key={i}
              className="bg-black p-1 my-1 font-mono text-xs border border-red-900 flex items-center justify-between"
            >
              <span>
                {i + 1}. robot.{action}();
              </span>
              <span>{action === "Clap" ? "👏" : "🤾"}</span>
            </div>
          ))}{" "}
        </div>

        {/* Optimized View */}
        <div className="p-4 bg-green-900/20 border-2 border-dashed border-green-500 rounded-lg flex flex-col justify-center">
          <h3 className="text-green-400 font-mono mb-2">OPTIMIZED.js</h3>
          {isOptimized ? (
            <div className="animate-bounce">
              <div className="bg-black p-2 font-mono text-blue-400 border border-green-500">
                1. repeat(3) {"{"}
              </div>
              <div className="bg-black p-2 ml-4 font-mono text-white border-l border-green-500 flex items-center justify-between">
                <span>2. robot.cheer();</span>
                <span>🎉</span>
              </div>
              <div className="bg-black p-2 font-mono text-blue-400 border border-green-500">
                {"}"}
              </div>
            </div>
          ) : (
            <button
              onClick={optimize}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Apply Loop (Iteration)
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 p-4 bg-slate-800 rounded-lg w-full text-center">
        <span className="text-slate-400">Efficiency Status: </span>
        <span
          className={
            isOptimized ? "text-green-400 font-bold" : "text-red-400 font-bold"
          }
        >
          {stepCount} Lines of Code
        </span>
        {isOptimized && (
          <p className="text-xs text-green-300 mt-2">
            ✨ Logic: Iteration saves computer energy!{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default RobotCheer;
