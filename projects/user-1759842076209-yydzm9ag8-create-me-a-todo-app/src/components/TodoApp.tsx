import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-neon-glow-purple">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Todo App
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-6">
            <Input
              type="text"
              placeholder="Add a new todo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTodo();
                }
              }}
              className="flex-grow border-border focus:ring-ring focus:border-primary"
            />
            <Button onClick={addTodo} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Add
            </Button>
          </div>
          <div className="space-y-4">
            {todos.length === 0 ? (
              <p className="text-center text-muted-foreground">No todos yet. Start adding some!</p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between p-3 bg-card border border-border rounded-md shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={`todo-${todo.id}`}
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <Label
                      htmlFor={`todo-${todo.id}`}
                      className={\`text-lg \${
                        todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                      }\`}
                    >
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
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoApp;
