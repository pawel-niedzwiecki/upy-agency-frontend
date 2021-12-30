import React, { useRef, useEffect } from "react";
import { MovingElementBox } from "./comonent.animation.movingElement.style";

export const MovingElement = ({ children }: any) => {
  const box = useRef(null);

  useEffect(() => {
    const el = box.current;
    const allRand: any = [];
    const allElMovie = el.querySelectorAll(".movieEL");
    allElMovie.forEach(() => allRand.push(Math.floor(Math.random() * 1000)));

    const handleMousemove: any = (event: any) => {
      const { innerHeight, innerWidth } = window;
      const { x, y } = event;
      const midWidth = innerWidth / 2;
      const midHeight = innerHeight / 2;

      allElMovie.forEach((el: any, index: number) => {
        const { variantX = 10, variantY = 10 } = el.dataset;
        const tx = (((x - midWidth) * allRand[index]) / midWidth) * (variantX / 100);
        const ty = (((y - midHeight) * allRand[index]) / midHeight) * (variantY / 100);
        el.style.transform = `translate(${tx}%, ${ty}%)`;
      });
    };

    window.addEventListener("mousemove", (e: any) => {
      clearTimeout(handleMousemove);
      setTimeout(() => handleMousemove(e), 10);
    });

    return () => {
      window.removeEventListener("mousemove", (e: any) => {
        clearTimeout(handleMousemove);
        setTimeout(() => handleMousemove(e), 10);
      });
    };
  }, [box]);

  return <MovingElementBox ref={box}>{children}</MovingElementBox>;
};
