import React, { useState, useReducer } from 'react';
import { todoReducer, initialTodoState } from '../reducers';
// Using the reducer hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
// Now render your list of todos from your reducer in your app

const TodoList = () => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

  const [newTodoText, setNewTodoText] = useState('');

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };

  const clearInput = () => {
    setNewTodoText('');
  }



  return (
    <div>
      <header>
        <h1>Your To-Do List</h1>
        <input
          type='text'
          name='newTodo'
          onChange={handleChanges}
          placeholder='Add to your to-do list'
          value={newTodoText}
        />

        <button
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newTodoText})
            clearInput();
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'CLEAR_ALL' })
          }}
        >
          Clear All
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'CLEAR_COMPLETED'})
          }}
        >
          Clear Completed
        </button>
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
