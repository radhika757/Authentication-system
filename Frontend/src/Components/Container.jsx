import { useState } from "react";
import axios from "axios";

import styles from "./container.module.css";

const Container = () => {
  const [tab, setTab] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleTabSwitch() {
    setTab(!tab);
  }

  const handleInputChange = (e) => {
    // dynamically update the field based on the input name
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    try {
      const response = tab
        ? axios.post("http://localhost:3000/register", data)
        : axios.post("http://localhost:3000/login", data);
      console.log(response, "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.tabs}>
        <span className={tab ? "" : styles.tab} onClick={handleTabSwitch}>
          Log In
        </span>
        <span className={tab ? styles.tab : ""} onClick={handleTabSwitch}>
          Sign Up
        </span>
      </div>
      <form onSubmit={handleSubmission}>
        <div className={styles.form}>
          {tab ? (
            <>
              <input
                placeholder="Enter your Name"
                name="name"
                value={data.name}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Enter your Email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                required
              />
            </>
          ) : (
            <>
              <input
                placeholder="Enter your Email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                required
              />
            </>
          )}
          <div className={styles.button}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Container;
