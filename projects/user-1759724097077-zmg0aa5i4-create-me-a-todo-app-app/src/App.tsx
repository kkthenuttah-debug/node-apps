import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-r-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-2 shadow-sm transform transition duration-300 ease-in-out hover:scale-[1.02]"
            >
              <span
                className={`text-lg ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
