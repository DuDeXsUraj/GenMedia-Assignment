import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  CLEAR_FILTERS
} from "../Utils/Constants";
  
  const filter_reducer = (state, action) => {
    if(action.type===LOAD_PRODUCTS){
      let max_price = action.payload.map((p)=>p.price);
      max_price = Math.max(...max_price)
      
      return {...state,all_products:[...action.payload],filtered_products:[...action.payload],
        filters: { ...state.filters, max_price: max_price, price: max_price },
      }}
    
    
    if(action.type===SET_GRIDVIEW){
      return {...state,grid_view:true}
    }
    if(action.type===SET_LISTVIEW){
      return {...state,grid_view:false}
    }
  
    if(action.type===UPDATE_SORT){
      return {...state,sort:action.payload}
    }
  
    if(action.type===SORT_PRODUCTS){
      const{sort,filtered_products} = state;
      let tempProduct = [...filtered_products]
       
      if(sort==='price-lowest'){
        tempProduct = tempProduct.sort((a,b)=> {
          if(a.price<b.price){
            return -1;
          } 
          if(a.price>b.price){
            return 1;
          }
          return 0;
        })
      }
      if(sort==='price-highest'){
        tempProduct = tempProduct.sort((a,b)=>
          b.price-a.price
        )
      }
      if (sort === 'name-a') {
        tempProduct = tempProduct.sort((a, b) => {
          const nameA = a.name || ''; // Default to empty string if name is undefined
          const nameB = b.name || ''; // Default to empty string if name is undefined
          return nameA.localeCompare(nameB);
        });
      }
      if (sort === 'name-z') {
        tempProduct = tempProduct.sort((a, b) => {
          const nameA = a.name || ''; // Default to empty string if name is undefined
          const nameB = b.name || ''; // Default to empty string if name is undefined
          return nameB.localeCompare(nameA);
        });
      }
      
      return {...state,filtered_products:tempProduct,}
    }
  
    if(action.type===UPDATE_FILTERS){
      const{name,value} = action.payload;
      return {...state,filters:{...state.filters,[name]:value}}
    }
  
    if(action.type===FILTER_PRODUCTS){
      const {all_products} = state
      const{text,category,price} = state.filters
      let tempProduct = [...all_products]

      if (text) {
        tempProduct = tempProduct.filter((product) => {
          return product.title && product.title.toLowerCase().includes(text.toLowerCase());
        });
      }
      
      if(category!=='all'){
        tempProduct = tempProduct.filter((product)=>
          product.category === category
          )
      }

      // if(company!=='all'){
      //   tempProduct = tempProduct.filter((product)=>
      //     product.company === company
      //     )
      // }
  
      // if(color!=='all'){
      //   tempProduct = tempProduct.filter((product)=>{
      //     return product.colors.find((c)=>c===color)
      //   })
      // }
      tempProduct = tempProduct.filter((product)=>product.price<=price)
      return {...state,filtered_products:tempProduct}
    }
  
    if(action.type===CLEAR_FILTERS){
      return{
        ...state,
        filters:{
          ...state.filters,
          text:'',
          category:'all',
          price:state.filters.max_price,
          shipping:false,
        }
        
         
      }
    }
  }
  
  export default filter_reducer
  