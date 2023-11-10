import React from "react";
import "./Info.css";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component </h1>
      <button className="my-button">Click me in the Info component</button>
      <hr />
      <button className={styles.myOtherButton}>
        Button with local css rule
      </button>
    </div>
  );
};

export default Info;
