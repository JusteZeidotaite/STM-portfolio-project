import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <a className={styles.logo} href="/"> STM</a> 
      </div>

      <ul>
        <li>
          <a href="https://dribbble.com/Marmokas" target="_blank" rel="noopener noreferrer">
            WORKS
          </a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/contacts">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
