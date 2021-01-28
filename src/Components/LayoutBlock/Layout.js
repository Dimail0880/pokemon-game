import React, { Component } from "react";
import styles from "./Layout.module.css";

const Layout = (props) => {
  console.log(props.urlBg);
  return (
    <>
      <section
        className={styles.root}
        id={props.id}
        style={{ background: `url(${props.urlBg})` }}
      >
        <div className={styles.wrapper}>
          <article>
            <div className={styles.title}>
              <h3>{props.title}</h3>
              <span className={styles.separator}></span>
            </div>
            <div className={styles.desc}>
              <p>{props.desc}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Layout;
