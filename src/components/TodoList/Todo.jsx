import { useState } from 'react';
import { Star, Trash2, Check, Clock } from 'react-feather';

export default function Todo({ todo, toggleComplete, deleteTodo, toggleImportant }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''} ${todo.isImportant ? 'important' : ''}`}>
      <div className="todo-header">
        <button 
          className={`complete-btn ${todo.completed ? 'checked' : ''}`}
          onClick={() => toggleComplete(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && <Check size={14} />}
        </button>
        
        <h3 onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
          {todo.text}
        </h3>
        
        <div className="todo-actions">
          <button 
            className={`important-btn ${todo.isImportant ? 'active' : ''}`}
            onClick={() => toggleImportant(todo.id)}
            aria-label={todo.isImportant ? 'Remove important mark' : 'Mark as important'}
          >
            <Star fill={todo.isImportant ? 'gold' : 'none'} />
          </button>
          
          <button 
            className="delete-btn" 
            onClick={() => deleteTodo(todo.id)}
            aria-label="Delete todo"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="todo-details">
          {todo.reminder && (
            <div className="reminder-info">
              <Clock size={14} />
              <span>Reminder: {new Date(todo.reminder).toLocaleString()}</span>
            </div>
          )}
          <div className="created-at">
            Created: {new Date(todo.createdAt).toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  );
}