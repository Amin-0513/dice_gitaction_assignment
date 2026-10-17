
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <div className="card">
        <span className="tag">CI/CD Demonstration</span>

        <h1>React GitHub Actions Pipeline</h1>

        <p>
          This application is deployed automatically through
          a GitHub Actions CI/CD workflow.
        </p>

        <div className="status">
          <span className="dot" />
          Application is running
        </div>

        <button onClick={() => setCount((value) => value + 1)}>
          Test React: {count}
        </button>

        <p className="footer">
          Built with React, Vite, Vitest and GitHub Actions
        </p>
      </div>
    </main>
  );
}
