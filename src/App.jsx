import RobotCheer from "./RobotCheer"; // Import the new component

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-500">
          ICT Grade 5: Algorithm Efficiency
        </h1>
        <p className="text-slate-400 mt-2">
          WALT: Compare and optimize algorithms [cite: 3]
        </p>
      </header>

      <main>
        {/* This is where the interactive challenge is displayed */}
        <RobotCheer />
      </main>
    </div>
  );
}

export default App;
