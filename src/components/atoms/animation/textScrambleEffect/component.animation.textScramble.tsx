import React, { useRef, useState, useEffect } from "react";
import { TextScrambleType } from "./component.animation.textScramble.type";
import { TextScrambleContainer } from "./component.animation.textScramble.style";

export const TextScramble = ({ phrases, option: { time = 1000 } = {} }: TextScrambleType) => {
  const span = useRef(null);
  const [activePhrase, setActivePhrase] = useState(0);
  const lastPhrase = activePhrase === 0 ? phrases.length - 1 : activePhrase - 1;
  const wordLenght = Math.max(phrases[activePhrase].length, phrases[lastPhrase].length);
  const chars = "____----`!@#$%^&*()_+=~/?><}{[]";

  useEffect(() => {
    let frame = 0;
    const updateStart: any = setInterval(() => update(), 30);
    let queue: { from: string; to: string; start: number; end: number }[] = [];

    for (let i = 0; i < wordLenght; i++) {
      const from = phrases[lastPhrase][i] || "";
      const to = phrases[activePhrase][i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from, to, start, end });
    }

    const maxEnd = queue.reduce((acc, shot) => (acc = acc > shot.end ? acc : shot.end), 0);

    const update = () => {
      let char,
        output = "";

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end } = queue[i];
        if (frame >= end) output += to;
        else if (frame >= start) {
          if (!char) char = chars[Math.floor(Math.random() * chars.length)];
          output += `<span class="textScrambleSign">${char}</span>`;
        } else output += from;
      }

      if (!!span.current) span.current.innerHTML = output;
      if (maxEnd < frame) clearInterval(updateStart);

      frame++;
    };

    return () => clearInterval(updateStart);
  }, [wordLenght, phrases, lastPhrase, activePhrase]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhrase((activePhrase + 1) % phrases.length);
    }, time);

    return () => clearInterval(interval);
  }, [time, phrases, activePhrase]);

  return <TextScrambleContainer ref={span}></TextScrambleContainer>;
};
