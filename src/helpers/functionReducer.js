export const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      // return console.log(action.payload);
      return [...state, action.payload];
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "deleteTasks":
      return state.filter((item) => item.done !== true);
    case "toggle":
      return state.map((tarea) => {
        if (tarea.id === action.payload) {
          return {
            ...tarea,
            done: !tarea.done,
          };
        } else {
          return tarea;
        }
      });

    default:
      throw new Error();
  }
};
