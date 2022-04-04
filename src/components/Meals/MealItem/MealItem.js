import classes from './MealItem.module.css'
import { useContext } from 'react';
import MealItemsForm from './MealItemsForm';
import CartContext from '../../../store/cart-context'

function MealItem(props) {
  const Cartctx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount =>{
    Cartctx.addIem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemsForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
