import todosList from "./todos.json";

import {
  TOGGLE_TODO,
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  DELETE_TODO
} from "./actions";

const initialState = {
  todos: todosList,
  state: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      const newTodoList = state.todos.map(todo => {
        if (todo.id === action.payload) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
      return { ...state, todos: newTodoList };
    }
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case DELETE_TODO: {
      const newTodoList = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return { ...state, todos: newTodoList };
    }
    case CLEAR_COMPLETED_TODOS: {
      const newTodoList = state.todos.filter(todo => todo.completed === false);
      return { ...state, todos: newTodoList };
    }

    default:
      return state;
  }
};

export default reducer;
