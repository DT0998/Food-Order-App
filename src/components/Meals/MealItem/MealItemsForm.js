import { useRef } from "react";
import { useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemsForm.module.css";

function MealItemsForm(props) {
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  //    const submit
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!AmountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemsForm;
