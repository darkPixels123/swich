import React from "react";
import styles from "../LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageCarousel}>
        <div className={styles.carouselOverlay}>
          <div className={styles.formContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                gap: 20,
              }}
            >
              {/* input fields */}
              <div className={styles.customInputContainer}>
                <label></label>
                <input
                  placeholder="ENTER EMAIL"
                  className={styles.customInput}
                  type="email"
                  required
                />
              </div>
              <div className={styles.customInputContainer}>
                <label></label>
                <input
                  placeholder="ENTER PASSWORD"
                  className={styles.customInput}
                  type="password"
                  required
                />
              </div>
              {/* input fields */}
              {/* <button className={styles.loginBtn}>SIGN IN</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
