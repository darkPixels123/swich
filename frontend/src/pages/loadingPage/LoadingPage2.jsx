import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS
import styles from "../LoadingPage2.module.css";

export default function LoadingPage2() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.loader_outer}>
          <div className={styles.loader_inner}>
            <i className="fas fa-ellipsis-h" aria-hidden="true"></i>
          </div>
        </div>
        <h1>
          <span>LOADING</span>
        </h1>
      </div>
    </div>
  );
}
