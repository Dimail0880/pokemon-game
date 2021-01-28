import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.root}>
          <div class={styles.forest}></div>
          <div class={styles.container}>
            <h1>This is title</h1>
            <p>This is Description!</p>
          </div>
        </header>
      </>
    );
  }
}
