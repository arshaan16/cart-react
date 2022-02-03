import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./HeaderCartButton.css"
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
const HeaderCartButton=(props)=>{
  const ctx=useContext(CartContext);
  const numberOfItems=ctx.items.reduce((curItem,item)=>{
    return curItem+item.amount;
  },0)
  return (<button className="button" onClick={props.onClick}>
    <span className="icon">
    <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
    </span>
    <span >Your Cart</span>
    <span className="badge">{numberOfItems}</span>
  </button>)
}
export default HeaderCartButton;