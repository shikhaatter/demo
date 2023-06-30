import React, { useState, useEffect } from 'react';
import './App.css';

const Slideshow = () => {
  const texts = ['UI/UX DESIGNER', 'CONTENT WRITER', 'JS DEVELOPER'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div className="slideshow">{texts[currentTextIndex]}</div>;
};

export default Slideshow;
