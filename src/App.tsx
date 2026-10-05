import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-gray-950 text-gray-100">
      <div className="flex items-center gap-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <span className="text-4xl font-bold text-gray-400">+</span>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 w-24 animate-spin" style={{ animationDuration: '20s' }} alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-bold tracking-tight">Vite + React + Tailwind</h1>

      <p className="text-lg text-gray-400">
        Edit <code className="rounded bg-gray-800 px-2 py-1 text-emerald-400">src/App.tsx</code> and save to test HMR
      </p>

      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 text-lg font-medium transition-colors hover:bg-gray-800 active:bg-gray-700"
      >
        count is {count}
      </button>

      <p className="text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
