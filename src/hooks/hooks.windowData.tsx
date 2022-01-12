// import plugin
import { useState, useEffect } from "react";

// create new Hooks
const useWindowData = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [scrollData, setScrollData] = useState({
    pageScrollY: window.pageYOffset,
    scrollDirection: "up",
  });

  let lastScroll = 0;

  const handleScrollSet = () => {
    let nowScrollY = window.pageYOffset;

    if (nowScrollY > lastScroll) {
      lastScroll = window.pageYOffset;
      return setScrollData({ pageScrollY: nowScrollY, scrollDirection: "down" });
    }
    lastScroll = window.pageYOffset;
    return setScrollData({ pageScrollY: nowScrollY, scrollDirection: "up" });
  };

  const handleWindowResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSet);
    return () => window.removeEventListener("scroll", handleScrollSet);
  });

  return { ...dimensions, ...scrollData };
};

// export default Hooks
export default useWindowData;
