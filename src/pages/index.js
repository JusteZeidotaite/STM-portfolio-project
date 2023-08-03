import React from 'react';
import styles from "./styles.module.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import GradientBackground from '../components/gradientBackground/GradientBackground';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.white_line}></div>
  
      <GradientBackground/>
     
     
      
      <Footer/>
     
      </div>
  )
}

export default MainPage;