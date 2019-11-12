//action type constants
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

//action creator functions
//an action object always has a type property
//it may also has a value you're sending to the store ("payload")
// {
//   type: TOGGLE_TODO;
//   payload: "value";
// }

export const toggleTodo = todoIdToToggle => {
  return {
    type: TOGGLE_TODO,
    payload: todoIdToToggle
  };
};
