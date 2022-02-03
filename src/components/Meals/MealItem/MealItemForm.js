import Input from "../../UI/Input";
import { useRef } from "react";
import "./MealItemForm.css";

const MealItemForm=(props)=>{
  const amountInputRef=useRef();
  const submitHandler=(e)=>{
    e.preventDefault();
    const value=amountInputRef.current.value;
   const enteredAmount =+value;
   if(value.trim().length===0||enteredAmount<1||enteredAmount>5){
     return
   }
  props.addingItem(enteredAmount);  
  }
return(
  <form className="form" onSubmit={submitHandler}>
    <Input ref={amountInputRef}
    label="Amount" input={{
      id:'amount_'+props.id,
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1',
      
    }}></Input>
    <button>+ADD</button>
  </form>
)
}
export default MealItemForm;