const initialState = {
  loading: false,
  deleting: false,
  editing: false,

  items: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "products/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "products/delete/pending":
      return {
        ...state,
        deleting: true,
      };

    case "products/delete/fulfilled":
      return {
        ...state,
        deleting: false,

        items: state.items.filter((product) => product.id !== action.payload),
      };

    case "products/edit/pending":
      return {
        ...state,
        editing: true,
      };

    case "products/edit/fulfilled":
      return {
        ...state,
        editing: false,

        items: state.items.map((product) => {
          if (product.id === action.payload.productId) {
            return {
              ...product,
              ...action.payload.data,
            };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

export const loadProductOne = (id) => {
  return async (dispatch) => {
    dispatch({ type: "products/load/pending" });

    const response = await fetch(`http://62.109.7.98/api/product/${id}`);
    const json = await response.json();

    dispatch({ type: "products/load/fulfilled", payload: json.data });
  };
};

export const loadProducts = (categoryId) => {
  return async (dispatch) => {
    dispatch({ type: "products/load/pending" });

    const response = await fetch(`http://62.109.7.98/api/product/category/${categoryId}`);
    const json = await response.json();

    dispatch({ type: "products/load/fulfilled", payload: json.data });
  };
};

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    dispatch({ type: "products/delete/pending" });

    dispatch({ type: "products/delete/fulfilled", payload: productId });
  };
};

export const editProduct = (productId, data) => {
  return async (dispatch) => {
    dispatch({ type: "products/edit/pending" });

    dispatch({ type: "products/edit/fulfilled", payload: { productId, data } });
  };
};
