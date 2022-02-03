import Modal from "../UI/Modal";
import { useContext } from "react";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const removeOldItemHandler=(id)=>{
     cartCtx.removeItem(id);
     }
  function newItemHandler(item){
    cartCtx.addItem({...item,amount:1});
  }
  
  const cartItems1 = (
    <ul className="cartitems">   
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={newItemHandler.bind(null,item)}
          onRemove={removeOldItemHandler.bind(null,item.id)}
        />

  ))
    }
    </ul>
  );
  const hasItem = cartCtx.items.length > 0;
  //console.log(cartItems1);
  return (
    <Modal onClose={props.onHide}>
      {cartItems1}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="buttonalt" onClick={props.onHide}>
          Close
        </button>
        {hasItem && <button className="buttony">Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
