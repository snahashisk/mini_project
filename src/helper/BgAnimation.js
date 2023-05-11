import React, { useEffect } from "react";
import anime from "animejs";

const BgAnimation = () => {
  useEffect(() => {
    const background = document.querySelector(".container");
    for (let i = 0; i <= 100; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      background.appendChild(blocks);
    }

    const animateBlocks = () => {
      anime({
        targets: ".block",
        translateX: () => {
          return anime.random(400, 700);
        },
        translateY: () => {
          return anime.random(400, 800);
        },
        scale: () => {
          return anime.random(1, 5);
        },
        easing: "linear",
        duration: 5000,
        delay: anime.stagger(10),
        complete: animateBlocks,
      });
    };
    animateBlocks();
  }, []);

  return (
    <div className="container relative h-screen">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-xl font-bold uppercase">Welcome to</span>
        <br />
        <span className="text-4xl font-bold uppercase">LogRocket Blog</span>
      </h1>
      {Array.from({ length: 100 }).map((_, index) => (
        <div
          key={index}
          className="absolute block h-12 w-12 bg-blue-600 shadow-lg"
        ></div>
      ))}
    </div>
  );
};

export default BgAnimation;
