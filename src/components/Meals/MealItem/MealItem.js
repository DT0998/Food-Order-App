import classes from './MealItem.module.css'
import MealItemsForm from './MealItemsForm';

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
      <MealItemsForm id={props.id}/>
      </div>
    </li>
  );
}

export default MealItem;
