const initialState = {
  loading: false,
  items: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "categories/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "categories/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    default:
      return state;
  }
};

export const loadCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "categories/load/pending" });

    const response = await fetch("http://62.109.7.98/api/categories");
    const json = await response.json();

    dispatch({ type: "categories/load/fulfilled", payload: json.data });
  };
};
