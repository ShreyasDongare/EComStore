
const reducer = (state, action) => {
  if (action.type === "IS_LOADING") {
    return { ...state, 
      isLoading: true };
  }
  if (action.type === "PRODUCT_DATA") {
        const featuredProducts = action.payload.filter((item)=>item.featured === true)
    return {
      ...state,
      isLoading:false,
      Products: action.payload,
      featuredProducts: featuredProducts,
    };
  }
  if (action.type === "IS_ERROR") {
    return {
      ...state,
      isLoading:false,
      isError: true,
    };
  }
  if (action.type === "IS_SINGLE_LOADING"){
    return {
      ...state,
      isSingleLoading: true,
    }
  } 
  if (action.type === "SINGLE_PRODUCT_DATA"){
    return {
      ...state,
      isSingleLoading: false,
      singleProduct: action.payload,
    }
  } r
  if (action.type === "IS_SINGLE_ERROR") {
    return {
      ...state,
    isSingleLoading: false,
    isError: true,  
  
    };
  } return state;
};

export default reducer;
