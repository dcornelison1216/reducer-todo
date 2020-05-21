import React, { useState, useReducer } from 'react';
import { todoReducer, initialTodoState } from '../reducers';
// Using the reducer hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
// Now render your list of todos from your reducer in your app

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

  const [newTodoText, setNewTodoText] = useState(initialTodoState);

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>Your To-Do List</h1>
        <input
          type='text'
          name='newTodo'
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newTodoText})
          }}
        >
          Add
        </button>
        <button>Clear All</button>
        <button>Clear Completed</button>
      </header>

      <div>
        {todoState.map(todo => {
          return (
            <p key={todo.id}>{todo.item}</p>
          )
        })}
      </div>

    </div>
  )
}

export default TodoList;
