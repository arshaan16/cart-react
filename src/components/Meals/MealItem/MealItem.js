import "./MealItem.css";
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx=useContext(CartContext);
  const nowAdd=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm  addingItem={nowAdd}></MealItemForm>
      </div>
    </li>
  );
};
export default MealItem;
