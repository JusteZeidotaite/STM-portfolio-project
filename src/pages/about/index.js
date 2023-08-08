import React from 'react';
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import GradientBackground from '../../components/gradientBackground/GradientBackground';

const About = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.white_line}></div>
      <div className={styles.gradient_space_wrapper}>
<div className={styles.aboutText}>
  <h2>About</h2>
  <p>My career journey has been an exhilarating exploration of the arts, beginning with my art studies where I cultivated a deep appreciation for various creative disciplines. Motivated by my passion for supporting emerging talents, I initiated the "Young Poor Artists" project, empowering underprivileged artists and fostering a strong sense of community. As my artistic pursuits evolved, I gravitated towards the cinematic world, particularly the art department, where I thrived as a graphic designer, skillfully translating storytelling elements into visually captivating designs that added depth and authenticity to the cinematic experience.
    Driven by a thirst for knowledge and a desire to enhance user interactions, I ventured into the realm of UX/UI design. Through self-guided learning and sheer determination, I became a self-taught specialist in web design, blending my artistic sensibilities with user-centric principles to create intuitive and engaging digital experiences. As I embrace new challenges and opportunities within the dynamic world of design, my journey continues to unfold with boundless excitement.</p>

    <a className={styles.button} href='https://www.dropbox.com/scl/fi/9tzkdwg4wyjf8ojbhf6rl/Stanislovas-Marmokas-CV.docx?rlkey=wysus1so6uzfham3m02ozgg6e&dl=0' target="_blank" rel="noopener noreferrer">
      CV
    </a>
  
</div>

        <GradientBackground />
      
      </div>
      <Footer />
    </div>
  );
};

export default About;
