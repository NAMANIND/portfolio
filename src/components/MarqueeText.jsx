import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = ({ text }) => {
  const maskImageStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
  };
  return (
    <Marquee
      className="h-[40vh]
   text-9xl text-black font-bold text-center uppercase"
      style={maskImageStyle}
      direction="right"
    >
      &nbsp; {text}
    </Marquee>
  );
};

export default MarqueeText;
