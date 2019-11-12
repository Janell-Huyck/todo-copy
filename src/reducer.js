import todosList from "./todos.json";

import {
  TOGGLE_TODO /*
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  DELETE_TODO */
} from "./actions";

const initialState = {
  todos: todosList
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      const newTodoList = state.todos.map(todo => {
        if (todo.id === action.payload) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
      return { todos: newTodoList };
    // case CLEAR_COMPLETED_TODOS:
    //   return state;
    // case ADD_TODO:
    //   return state;
    // case DELETE_TODO:
    //   return state;

    default:
      return state;
  }
};

export default reducer;
