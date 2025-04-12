import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import AddTodo from './components/TodoList/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addTodo = (todo) => {
    setTodos([{ 
      ...todo, 
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString()
    }, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleImportant = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isImportant: !todo.isImportant } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <Header 
        filter={filter} 
        setFilter={setFilter} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            filter={filter}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            toggleImportant={toggleImportant}
          />
        </div>
      </main>
    </div>
  );
}