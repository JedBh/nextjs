import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes.actions}>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </div>
  );
}

export default Button;
