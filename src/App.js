import Header from "./components/Layout/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Meals from "./components/Meals/Meals";
import {  useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

library.add(fab, faCheckSquare, faShoppingCart)
function App(){
  const [cartisopen,cartStatus]=useState(false);
  const showCart=()=>{
    cartStatus(true);
  }
  const hideCart=()=>{
    cartStatus(false);
  }
  return(<CartProvider>
     {cartisopen && <Cart onHide={hideCart}/>}
    <Header onPress={showCart}/>
    <Meals/>
    </CartProvider>
  )
}
export default App;