const initialdata = {
  list: [],
};
console.log(initialdata);
export const todoReducers = (state = initialdata, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      console.log("action", action.payload);

      const { id, item } = action.payload;
      console.log("id", id, item);
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: item,
          },
        ],
      };
    default:
      return state;
  }
};
