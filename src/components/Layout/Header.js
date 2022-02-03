import mealsImg from "../../assets/food-table.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props){
 
  return(<div>
 <header className="parent">
   <h1>ReactMeals</h1>
  <HeaderCartButton onClick={props.onPress}/>
 </header>
 <img src={mealsImg}  className="foodTable"></img>
  </div>)
}
export default Header;