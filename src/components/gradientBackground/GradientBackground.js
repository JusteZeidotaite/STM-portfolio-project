import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'; // Make sure this imports your CSS file properly

const GradientBackground = () => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateContainerSize = () => {
      const gradientSpaceElement = document.querySelector(`.${styles.gradient_space}`);
      if (gradientSpaceElement) {
        const { offsetWidth, offsetHeight } = gradientSpaceElement;
        setContainerSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateContainerSize();

    const handleResize = () => {
      updateContainerSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height } = containerSize;
    const x = (clientX / width) * 100;
    const y = (clientY / height) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const gradientSpaceElement = document.querySelector(`.${styles.gradient_space}`);
    if (gradientSpaceElement) {
      gradientSpaceElement.addEventListener('mousemove', handleMouseMove);

      return () => {
        gradientSpaceElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [containerSize]);

const getGradientColors = () => {
  const { x, y } = mousePosition;
  const baseHue = (x * 1.2 + y * 1.2 + 240) % 360; // Start from green (hue value 240)

  // Define the colors using HSLA values
  const color1 = `hsla(${(baseHue + 80) % 360}, 60%, 25%, 1)`; // Brown
  const color2 = `hsla(${(baseHue + 120) % 360}, 80%, 40%, 1)`; // Dark Orange
  const color3 = `hsla(${(baseHue + 160) % 360}, 50%, 25%, 1)`; // Dark Green
  const color4 = 'hsla(0, 0%, 0%, 1)'; // Black

  return `${color1}, ${color2}, ${color3}, ${color4}`;
};


  const gradientColors = getGradientColors();

  return (
    <div
      className={styles.gradient_space}
      style={{
        '--gradient-colors': gradientColors,
      }}
    ></div>
  );
};

export default GradientBackground;
 