import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-6">
      <main className="w-full max-w-md space-y-6">
        <h1 className="text-5xl font-extrabold text-center text-primary drop-shadow-lg animate-fade-in">
          My Todo App
        </h1>
        <AddTodoForm addTodo={addTodo} />
        <div className="space-y-4">
          {todos.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg animate-fade-in">
              No todos yet! Add some above.
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
