import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../ComponentCss/HomeCss.css'

const TypedText = () => {
  useEffect(() => {
    const typeData = new Typed(".role", {
      strings: [
        "Full stack Developer",
        "Web Development",
        "Backend Developer",
        "Programmer"
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 150,
      backDelay: 1300,
    });

    // Clean up the Typed instance on component unmount
    return () => {
      typeData.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      I am a <span className="role"></span>
    </div>
  );                  
}
   
export default TypedText;
