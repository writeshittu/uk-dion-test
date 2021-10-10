import styles from "./styles.module.css";
import FormInput from "../../../components/form-input/form-input.component";
import BestEmployeeCard from "../../../components/card/";

const DashboardContent = () => {
  return (
    <section className={styles.mainSection}>
      <header>
        <nav className={styles.navigation}>
          <div className={styles.searchInput}>
            <FormInput type="search" placeholder="Search for resources" />
            <span>
              <img
                src="./icons/searchIcon.svg"
                alt="search icon"
                width="100%"
              />
            </span>
          </div>
          <div className={styles.userCTA}>
            <div className={styles.notificationbell}>
              <img
                src="./icons/notification.svg"
                alt="notification"
                width="20px"
              />
            </div>
            <div className={`${styles.userLabel} ${styles.section_item_BGRND}`}>
              <p>Gloria A.</p>
              <div className={styles.userImage}>
                <img
                  src="./icons/userImage.svg"
                  alt="user_photo"
                  width="100%"
                />
              </div>
              <span>
                <img
                  src="./icons/angle-down.png"
                  alt="angle down icon"
                  width="100%"
                />
              </span>
            </div>
          </div>
        </nav>
      </header>

      <section className={styles.section_2}>
        <div>
          <div
            className={`${styles.moment_container} ${styles.section_item_BGRND}`}
          >
            <div className={styles.date}>
              <p>Monday, 10:38 AM</p>
              <p className={styles.greeting}>Good Morning, Gloria!</p>
            </div>
            <div className={styles.weatherIcon}>
              <img src="./icons/weather.svg" alt="weather icon" width="100%" />
            </div>
          </div>
          <div className={`${styles.quote_box}  ${styles.section_item_BGRND}`}>
            <div className={styles.quote_title}>
              <p>Quote of the day</p>
              <img src="./icons/fire.svg" alt="weather icon" width="40px" />
            </div>
            <p className={styles.quote_text}>
              Add an inspiring and motivational quote here. It can be business,
              finance, personal developemt or any kind.
            </p>
            <p className={styles.quote_author}>-Ifeoluwa Taiwo</p>
          </div>
        </div>
        <div className={styles.best_employee}>
          <BestEmployeeCard user />
        </div>
        <div
          className={`${styles.upcoming_event} ${styles.section_item_BGRND}`}
        >
          <div className={styles.event_header}>
            <p>Upcoming Birthdays</p>
            <div>
              <img
                src="./icons/birthday-cake.svg"
                alt="user_photo"
                width="100%"
              />
            </div>
          </div>
          <div className={styles.event_items}>
            <div>
              <img src="./icons/userImage.svg" alt="user_photo" width="100%" />
            </div>
            <div className={styles.event_items_text}>
              <p>Ifeoluwa Taiwo</p>
              <p>Today</p>
            </div>
          </div>
          <div className={styles.event_items}>
            <div>
              <img src="./icons/userImage.svg" alt="user_photo" width="100%" />
            </div>
            <div className={styles.event_items_text}>
              <p>Ifeoluwa Taiwo</p>
              <p>Tomorrow</p>
            </div>
          </div>
          <div className={styles.event_items}>
            <div>
              <img src="./icons/userImage.svg" alt="user_photo" width="100%" />
            </div>
            <div className={styles.event_items_text}>
              <p>Ifeoluwa Taiwo</p>
              <p>Thursday, 20 May</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_3}>
        <aside className={styles.notification_holder}>
          <div className={styles.notification_section}>
            <div className={styles.notification_header}>
              <p className={styles.title}>Notification</p>
              <p style={{ fontSize: "14px", lineHeight: "19px" }}>View all</p>
            </div>
            <div className={styles.notification_items}>
              <span>&#8226;</span>
              <div style={{ flex: "1", marginLeft: "15px" }}>
                <div className={styles.notification_content}>
                  <p className={styles.title}>
                    Review your supervisor’s comments & recommendations
                  </p>
                  <p className={styles.text}>Ifeoluwa Taiwo</p>
                </div>
                <div className={styles.notification_content}>
                  <p className={styles.text}>Friday 21 May {"  "} 02:34 PM</p>
                  <p
                    className={styles.text}
                    style={{ color: "#0ba759", opacity: "1" }}
                  >
                    Review{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.notification_items}>
              <span>&#8226;</span>
              <div style={{ flex: "1", marginLeft: "15px" }}>
                <div className={styles.notification_content}>
                  <p className={styles.title}>
                    Review your supervisor’s comments & recommendations
                  </p>
                  <p className={styles.text}>Ifeoluwa Taiwo</p>
                </div>
                <div className={styles.notification_content}>
                  <p className={styles.text}>Friday 21 May {"  "} 02:34 PM</p>
                  <p
                    className={styles.text}
                    style={{ color: "#0ba759", opacity: "1" }}
                  >
                    Review{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.newsSection_container}>
            <div className={styles.newsSection_header}>
              <p className={styles.title}> Latest Announcements & News</p>
              <div style={{ display: "flex" }}>
                <button className={`${styles.action_BTN} `}>&#10096;</button>
                <button className={`${styles.action_BTN} ${styles.active}`}>
                  &#10097;
                </button>
              </div>
            </div>
            <div className={styles.news_itemContainer}>
              <div className={styles.news_items}>
                <div className={styles.news_image}>
                  <img
                    src="./icons/news1.svg"
                    alt="staff meeting"
                    width="100%"
                  />
                </div>
                <div className={styles.news_content}>
                  <p className={styles.title}>Staff onboarding session</p>
                  <p className={styles.text}>
                    The onboarding session is basically for all new employees.
                  </p>
                </div>
              </div>
              <div className={styles.news_items}>
                <div className={styles.news_image}>
                  <img
                    src="./icons/news2.svg"
                    alt="staff meeting"
                    width="100%"
                  />
                </div>
                <div className={styles.news_content}>
                  <p className={styles.title}>Staff onboarding session</p>
                  <p className={styles.text}>
                    The onboarding session is basically for all new employees.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </aside>
        <div>
          <aside
            className={`${styles.upcoming_event} ${styles.section_item_BGRND}`}
          >
            <div className={styles.event_header}>
              <p>Upcoming Events</p>
            </div>
            <div className={styles.event_items}>
              <div>
                <img
                  src="./icons/userImage.svg"
                  alt="user_photo"
                  width="100%"
                />
              </div>
              <div className={styles.event_items_text}>
                <p>Ifeoluwa Taiwo</p>
                <p>Today</p>
              </div>
            </div>
            <div className={styles.event_items}>
              <div>
                <img
                  src="./icons/userImage.svg"
                  alt="user_photo"
                  width="100%"
                />
              </div>
              <div className={styles.event_items_text}>
                <p>Ifeoluwa Taiwo</p>
                <p>Tomorrow</p>
              </div>
            </div>
            <div className={styles.event_items}>
              <div>
                <img
                  src="./icons/userImage.svg"
                  alt="user_photo"
                  width="100%"
                />
              </div>
              <div className={styles.event_items_text}>
                <p>Ifeoluwa Taiwo</p>
                <p>Thursday, 20 May</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
};

export default DashboardContent;
