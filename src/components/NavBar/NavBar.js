import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li className={styles.item}>Data charts</li>
        <li className={styles.item}>Comparison Tool</li>
        <li className={styles.item}>About</li>
      </ul>
    </nav>
  );
}
