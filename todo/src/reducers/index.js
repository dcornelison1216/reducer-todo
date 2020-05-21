export const initialTodoState = {
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Build reducer project',
    completed: false,
    id: 3892987590
  },
  {
    item: 'Submit reducer project',
    completed: false,
    id: 3892987591
  }
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
