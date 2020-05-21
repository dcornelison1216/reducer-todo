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
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

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
      return ([])

    case CLEAR_COMPLETED:
      const incompleteItems = state.filter(item => {
        if(item.completed === false) {
          return item;
        }
      });
      return incompleteItems;

    case TOGGLE_COMPLETED:
      const array = state.map(item => {
        if(action.id === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else return item
      })
      return array

    default:
      return state;
  }
};
