import TodoApp from './TodoApp';

function App() {
  return (
    <TodoApp />
  );
}

export default App;
      <div className="flex items-center gap-8 mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 animate-spin [animation-duration:10s]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">create-me-a-todo-app</h1>
      <div className="p-8 rounded-lg bg-card border">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-muted-foreground">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-muted-foreground/80">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
