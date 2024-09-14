import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./container.module.css";
import { useAuth } from "../AuthContext.jsx";

const Container = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = tab
        ? await axios.post("http://localhost:3000/register", data)
        : await axios.post("http://localhost:3000/login", data);
      // React isn't automatically re-rendering the component after setting the token.
      // React does'nt detect changes in localstorage unless you explicitly trigger a state change
      // Trigger a re-render after setting the token in localstorage.
      login(response.data.token);
      navigate("/dashboard");
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
