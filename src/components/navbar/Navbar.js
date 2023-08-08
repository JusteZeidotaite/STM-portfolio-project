import React, { useState } from "react";
import styles from "./styles.module.css";

// Import the burger image using require
import burgerIcon from "../../assets/burger.png";

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
        {/* Use the imported burger icon */}
        <img src={burgerIcon} alt="Hamburger Menu" />
      </div>

      {/* Rest of your code */}
    </div>
  );
};

export default Navbar;
