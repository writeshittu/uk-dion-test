import Sidebar from "./sidebar";
import MainContent from "./MainContent";
import styles from "./styles.module.css";
const Dashboard = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
