import React from "react";
import HeroDigno from "../../dignostics/HeroDigno";
import AboutDigno from "../../dignostics/AboutDigno";
import AccordDigno from "../../dignostics/AccordDigno";
import Available from "../../dignostics/Available";
import AccordSecondDigno from "../../dignostics/AccordSecondDigno";
import SnapTest from "../../dignostics/SnapTest";
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
