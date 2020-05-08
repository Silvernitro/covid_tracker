import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            Data charts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/compare"
            className={styles.item}
            activeClassName={styles.activeItem}
          >
            Comparison Tool
          </NavLink>
        </li>
        <li className={styles.item}>About</li>
      </ul>
    </nav>
  );
}
