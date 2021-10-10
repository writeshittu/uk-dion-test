import { useState } from "react";
import { Link } from "react-router-dom";
// import GetStartedBtn from '../customButton/CustomButton'
import styles from "./style.module.css";
const Dropdown = ({ label, dropDownItem }) => {
  const [hideDropdownItem, setHideDropdownItem] = useState(false);
  const showDropDownItem = () => setHideDropdownItem(!hideDropdownItem);
  return (
    <div>
      <div className={`${styles.nav_links} ${styles.dropdown}`}>
        <button onClick={showDropDownItem} className={styles.dropbtn}>
          Login
        </button>
        <div
          onClick={showDropDownItem}
          className={`${styles.dropdown_content} ${
            hideDropdownItem ? styles.show : null
          } `}
        >
          <Link to="/Login/recruiter">For Recruiters</Link>
          <Link to="/login">For Talents</Link>
        </div>
      </div>
      {/* <div className={styles.nav_links}>
        <GetStartedBtn
          style={{
            background: "inherit",
            border: "1px solid #2C82E9",
            color: "#2C82E9",
          }}
          onClick={() => history.push("./signup")}
        >
          For Talent
        </GetStartedBtn>
      </div> */}
    </div>
  );
};

export default Dropdown;
