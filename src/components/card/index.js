import styles from "./styles.module.css";
const EmployeeCard = ({ user }) => {
  return (
    // <section style={{ position: "relative" }}>
    <div className={user ? styles.holder_withprops : styles.card_holder}>
      <div className={styles.card_header}>
        <div className={user ? styles.medal_ontop : styles.medal_icon}>
          <img src="./icons/medals.svg" alt="medal -icon" width="100%" />
        </div>
        <p className={user ? styles.title_withprops : styles.title}>
          Employee of the month
        </p>
      </div>
      <div className={styles.card_image}>
        <img
          src="./icons/employee.svg"
          alt="employee of the month"
          width="100%"
        />
      </div>
      <p className={styles.title}>Gloria Agboifoh</p>
      <p className={styles.subtext}>Product & Innovation Mgt.</p>
    </div>
    // </section>
  );
};

export default EmployeeCard;
