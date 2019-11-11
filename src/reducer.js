import todosList from "./todos.json";
import {
  TOGGLE_TODO,
  CLEAR_COMPLETED_TODOS,
  ADD_TODO,
  DELETE_TODO
} from "./actions";
const initialState = {
  //

  todos: todosList,
  value: ""
};

const reducer = (state = initialState, action) => {
  //how to modify the state based on action?
  switch (action.type) {
    //may have to do some conditional logic within each of the cases
    // case "COIN":
    //     if (state === "LOCKED") {
    //         return "UNLOCKED";
    //     },

    // case "PUSH":
    //     if (state === "LOCKED") {
    //         return state
    //     }
      case TOGGLE_TODO:
          const newTodoList = state newTodoList = state.todos.map (todos ////////////////)
          {
              if(todo.id === action.payload){}
          } /////?????????? demo too fast
      return state;
    case CLEAR_COMPLETED_TODOS:
      return state;
    case ADD_TODO:
      return state;
    case DELETE_TODO:
      return state;

    default:
      return state;
  }
};

export default reducer;
