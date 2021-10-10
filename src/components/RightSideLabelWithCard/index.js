import { useLocation } from "react-router-dom";

import EmployeeCard from "../../components/card";
import styles from "./styles.module.css";
const RightSideLabel = () => {
  const { pathname } = useLocation();

  return (
    <aside className={styles.label_section}>
      {pathname === "/reset-password" ? (
        <div>
          <img
            src="./icons/password_icon.svg"
            alt="reset password"
            width="100%"
          />
        </div>
      ) : (
        <EmployeeCard />
      )}
      <div className={styles.quote_box}>
        <div className={styles.quote_text}>
          <p>
            Add an inspiring and motivational quote here. It can be business,
            finance, personal developemt or any kind.
            <span className={styles.quote_markIcon}>
              <img
                src="./icons/quoteMark.svg"
                alt="quotationMark"
                width="60px"
              />
            </span>
          </p>
          <p style={{ color: "#ffffff" }}>-Ifeoluwa Taiwo</p>
        </div>
      </div>
    </aside>
  );
};

export default RightSideLabel;
