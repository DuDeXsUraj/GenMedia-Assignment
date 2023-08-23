// Reducer function
import { FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR } from "../Utils/Constants";

export const productReducer = (state, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_PRODUCTS_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };