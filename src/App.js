import './App.css';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { cartReducer } from './reducers/cartReducers';
import Products from './components/Products'
import Cart from './components/Cart'

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products : [],
    cart : [],
  })

  const fetchProducts = async () =>{
    const {data} = await axios.get("https://dummyjson.com/products");
    // console.log(data.products);
    
    dispatch({
      type : "ADD_PRODUCT",
      payload : data.products,
    })
   
    console.log(state);
    
  }
  useEffect(() => {
   fetchProducts();
  }, [])
  
  return (
    <div style={{display:"flex"}} >
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
