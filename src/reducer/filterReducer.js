const reducer = (state, action) => {
 
  // console.log(action.payload, "payload get")
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_Products: [...action.payload],
        all_Products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_View: true,
      };
    default:
      return state;
  }
};

export default reducer;
