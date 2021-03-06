import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import { logoutUser } from "../../../Services/LogoutService";

const Sidebar = () => {
  // eslint-disable-next-line
  const history = useHistory();

  const LogOut = async () => {
    await logoutUser();
    history.push("/");
  };

  return (
    <section className={styles.sidebar_section}>
      <Link to="/" className={styles.business_logo}>
        <img src="./icons/uk-dion_logo.svg" alt="business_logo" width="95px" />
      </Link>
      <div className={styles.items_container}>
        <ul style={{ marginTop: "50px" }}>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard" style={{ opacity: "1" }}>
              Dashboard
            </Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Evaluation</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Loan</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Salary</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Leave management</Link>
          </li>
        </ul>
        <ul>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">My account</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Resources</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link to="/dashboard">Recommendation</Link>
          </li>
          <li className={styles.sidebar_items}>
            <Link
              to="/dashboard"
              onClick={LogOut}
              style={{ color: "red", opacity: "1" }}
            >
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
