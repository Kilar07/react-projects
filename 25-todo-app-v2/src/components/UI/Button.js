import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { children, disabled = false } = props;
  return (
    <div>
      <button
        {...props}
        className={styles.button}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
