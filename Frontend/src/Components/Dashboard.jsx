import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import styles from "../Components/container.module.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const onLogoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={styles.buttonAuth}>
      <h3>Hii, Welcome to Auth system</h3>
      <button onClick={onLogoutHandler}>Logout</button>
    </div>
  );
};

export default Dashboard;
