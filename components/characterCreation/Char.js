"use client";
import React, { useEffect, useState } from "react";
import Talent from "../randomTalent/Talent";

const Char = () => {
  const [charExists, setCharExists] = useState(false);
  const [step, setStep] = useState(1)
  useEffect(() => {
    const char = localStorage.getItem("char");
    if (char) {
      setCharExists(true);
    } else {
      setCharExists(false);
    }
  });
  if(!charExists && step === 1){
   return <div>
    <Talent />
   </div>
  }
  return <div></div>;
};

export default Char;
