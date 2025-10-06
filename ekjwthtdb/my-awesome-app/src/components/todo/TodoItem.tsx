import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-todo-item-bg rounded-lg shadow-sm mb-3 transition-all duration-200 hover:shadow-md todo-gradient-border">
      <div className="flex items-center">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggleComplete(todo.id)}
          className="mr-3 h-5 w-5 border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-todo-text text-lg cursor-pointer ${
            todo.completed ? 'line-through text-todo-completed-text' : ''
          }`}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-muted-foreground hover:bg-todo-button-hover hover:text-destructive transition-colors duration-200"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default TodoItem;
