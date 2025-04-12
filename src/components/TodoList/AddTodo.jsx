import { useState } from 'react';
import { Star, Clock } from 'react-feather';

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [reminder, setReminder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    addTodo({
      text,
      isImportant,
      reminder: reminder || null,
      completed: false,
      createdAt: new Date().toISOString()
    });
    
    // Reset form
    setText('');
    setIsImportant(false);
    setReminder('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
        />
        
        <button 
          type="button"
          className={`important-btn ${isImportant ? 'active' : ''}`}
          onClick={() => setIsImportant(!isImportant)}
        >
          <Star fill={isImportant ? 'gold' : 'none'} />
        </button>
      </div>
      
      <div className="reminder-section">
        <Clock size={16} />
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </div>
      
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}