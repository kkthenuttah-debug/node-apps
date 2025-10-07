import React, { useState, useEffect } from \'react\';
import { Input } from \'./ui/input\';
import { Button } from \'./ui/button\';
import { Checkbox } from \'./ui/checkbox\';
import { Label } from \'./ui/label\';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>(\'\');

  useEffect(() => {
    const storedTodos = localStorage.getItem(\'todos\');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(\'todos\', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === \'\') return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue(\'\');
  };

  const toggleComplete = (id: string) => {
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
    <div className="container mx-auto p-4 max-w-md animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Todo App</h1>
      <div className="flex space-x-2 mb-6 animate-slide-in-down">
        <Input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === \'Enter\') {
              addTodo();
            }
          }}
          className="flex-grow p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
        />
        <Button onClick={addTodo} className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
          Add
        </Button>
      </div>
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={\`flex items-center justify-between p-4 bg-card rounded-lg shadow-md animate-slide-in-down \${
              todo.completed ? \'opacity-60 line-through\' : \'\'
            }\`}
          >
            <div className="flex items-center space-x-3">
              <Checkbox
                id={\`todo-\${todo.id}\`}
                checked={todo.completed}
                onCheckedChange={() => toggleComplete(todo.id)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
              <Label htmlFor={\`todo-\${todo.id}\`} className="text-lg cursor-pointer">
                {todo.text}
              </Label>
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
