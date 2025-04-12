import Todo from './Todo';

export default function TodoList({ todos, filter, toggleComplete, deleteTodo, toggleImportant }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <div className="empty-state">No todos found</div>
      ) : (
        filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            toggleImportant={toggleImportant}
          />
        ))
      )}
    </div>
  );
}