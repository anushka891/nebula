import React from "react";
import HeroDigno from "../../Dignostics/HeroDigno";
import AboutDigno from "../../Dignostics/AboutDigno";
import AccordDigno from "../../Dignostics/AccordDigno";
import Available from "../../Dignostics/Available";
import AccordSecondDigno from "../../Dignostics/AccordSecondDigno";
import SnapTest from "../../Dignostics/SnapTest";
function Dignostics() {
  return (
    <>
      <HeroDigno />
      <AboutDigno />
      <AccordDigno />
      <Available />
      <AccordSecondDigno />
      <SnapTest />
    </>
  );
}

export default Dignostics;
