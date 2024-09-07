import { useState } from "react";

import styles from "./container.module.css";

const Container = () => {
  const [tab, setTab] = useState(true);

  function setSwitchTab() {
    setTab(!tab);
  }

  return (
    <div className={styles.box}>
      <div className={styles.tabs}>
        <span className={tab ? "" : styles.tab} onClick={setSwitchTab}>
          Log In
        </span>
        <span className={tab ? styles.tab : ""} onClick={setSwitchTab}>
          Sign Up
        </span>
      </div>
      <div className={styles.form}>
        {tab ? (
          <>
            <input placeholder="Enter your Name" />
            <input placeholder="Enter your Email" />
            <input placeholder="Enter your password" />
          </>
        ) : (
          <>
            <input placeholder="Enter your Email" />
            <input placeholder="Enter your password" />
          </>
        )}
        <div className={styles.button}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
