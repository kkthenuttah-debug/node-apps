import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-lg font-medium ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <Trash2 className="h-5 w-5 text-destructive" />
      </Button>
    </div>
  );
};

export default TodoItem;
