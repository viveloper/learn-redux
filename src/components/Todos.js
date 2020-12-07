import React, { useEffect, useState } from 'react';
import Todo from './Todo';

function Todos({ store }) {
  const [todos, setTodos] = useState(store.getState().todos);
  useEffect(() => {
    store.subscribe(() => {
      setTodos(store.getState().todos);
    });
  }, [store]);

  console.log('render Todos');
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
