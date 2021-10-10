import ActionButton from "../components/customButton";
import { Link } from "react-router-dom";
import LabelSection from "../components/RightSideLabelWithCard";
import styles from "./pageGeneralStyles.module.css";
const LoginPage = () => {
  return (
    <section className={styles.page_holder}>
      <aside className={styles.leftside_section}>
        <Link to="/" className={styles.business_logo}>
          <img
            src="./icons/uk-dion_logo.svg"
            alt="business_logo"
            width="100%"
          />
        </Link>
        <div className={styles.form_container}>
          <div>
            <div
              className={styles.icon_holder}
              style={{ width: "80px", margin: "30px auto" }}
            >
              <img src="./icons/padlock.svg" alt="password icon" width="100%" />
            </div>
            <h4 className={styles.textTitle} style={{ textAlign: "center" }}>
              Success
            </h4>
            <p className={styles.subtext}>
              You’ve successfully changed your password
            </p>

            <div className={styles.BTN_holder}>
              <ActionButton>Proceed to login</ActionButton>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.subtext}>
            © 2021 uk-dion group. All rights reserved.
          </p>
        </div>
      </aside>
      <div className={styles.rightside_section}>
        <LabelSection />
      </div>
    </section>
  );
};

export default LoginPage;
