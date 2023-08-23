import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { productReducer } from "../Reducer/Product_reducer";
import { FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR } from "../Utils/Constants";

const ProductContext = createContext();

const initialState = {
    products: [],
    loading:false,
    error:null,
  };

// Create custom hook for using context
export const useProductContext = () => {
  return useContext(ProductContext);
};

// Provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: FETCH_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.products });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    // Replace 'your_api_url_here' with the actual API URL
    fetchData('https://dummyjson.com/products');
  }, []);

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  );
};