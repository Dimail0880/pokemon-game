import React, { Component } from "react";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className={styles.wrapper}>
            <h3>THANKS FOR VISITING</h3>
            <p>© 2021 #ReactMarathon.</p>
          </div>
        </footer>
      </>
    );
  }
}
