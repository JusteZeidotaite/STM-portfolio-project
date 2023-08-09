import React, { useState } from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <div>
        <a className={styles.logo} href="/">
          STM
        </a>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <img src="/burger.svg" alt="Menu" />
      </div>

      <ul className={showMenu ? `${styles.navList} ${styles.show}` : styles.navList}>
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
