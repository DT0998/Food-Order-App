import classes from "./Input.module.css";
function Input(props) {
  return (
    <div className={classes.input}>
      <div className={classes.flex}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
      </div>
    </div>
  );
}

export default Input;
