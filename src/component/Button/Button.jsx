import React from "react";
import styles from "../Button/Button.module.css";
const Button = (props) => {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};
export default Button;
