import React from 'react';
import { useProductContext } from '../Context/Product_context';
import GridView from './GridView';
import { useFilterContext } from '../Context/Filter_context';
import ListView from './ListView';

const ProductList = () => {
    const{filtered_products:products,grid_view} = useFilterContext()
    
    if(products.length<1){
      return <h1>Sorry,no products matches your search...</h1>
    }

    if(grid_view===false){
      return <ListView products={products}/>
    }
  return  <GridView products={products}>
  </GridView>
}

export default ProductList
