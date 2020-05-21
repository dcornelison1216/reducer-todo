export const initialTodoState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]
const ADD_TODO = 'ADD_TODO';
const CLEAR_ALL = 'CLEAR_ALL';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return (
        [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      )

    case CLEAR_ALL:
      return (initialTodoState)

    default:
      return state;
  }
}
