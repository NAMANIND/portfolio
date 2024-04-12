import React from "react";

import MarqueeText from "@/components/MarqueeText";
import Home from "@/components/home/Home";
import Homeinfo from "@/components/homeinfo/Homeinfo";

function app() {
  const sampleText = " \u00A0 Naman rai  ";

  return (
    <>
      {/* <MarqueeText text={sampleText} /> */}
      <Home />
      <Homeinfo />
    </>
  );
}

export default app;
