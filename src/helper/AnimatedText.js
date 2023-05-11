import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import Letterize from "letterizejs";

const AnimatedText = ({ text, delay }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letterize = new Letterize({
      targets: containerRef.current,
    });

    const animation = anime.timeline({
      targets: letterize.listAll,
      delay: anime.stagger(delay, {
        grid: [letterize.list[0].length, letterize.list.length],
        from: "center",
      }),
      loop: true,
    });
    animation
      .add({
        scale: 0.5,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        letterSpacing: "10px",
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        scale: 1,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        letterSpacing: "6px",
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        letterSpacing: "9px",
        duration: 500,
        easing: "easeInOutQuad",
      });
  }, [delay]);

  return (
    <div className="animate-me" ref={containerRef}>
      {text}
    </div>
  );
};

export default AnimatedText;
