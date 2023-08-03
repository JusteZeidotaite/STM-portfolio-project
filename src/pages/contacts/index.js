import React from 'react';
import styles from "./styles.module.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GradientBackground from '../../components/gradientBackground/GradientBackground';

const Contacts = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.white_line}></div>
      <div className={styles.gradient_space_wrapper}>
        <div className={styles.aboutText}>
            <div className={styles.letsTalk}>
          <h1>Let's Talk!</h1>
          
<div className={styles.button}>
  <a href='mailto:STANISLOVASMARMOKAS@GMAIL.COM' target="_blank">STANISLOVASMARMOKAS@GMAIL.COM</a>
</div>


          </div>
        </div>
        <GradientBackground />
      
      </div>
      
      <Footer />
    </div>
  );
};

export default Contacts;
