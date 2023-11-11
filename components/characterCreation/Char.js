"use client";
import React, { useEffect, useState } from "react";
import Talent from "../randomTalent/Talent";
import { useRouter } from "next/navigation";

const Char = () => {
  const [charExists, setCharExists] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const char = localStorage.getItem("char");
    if (char) {
      setCharExists(true);
      route.push("/home");
    } else {
      setCharExists(false);
    }
  });
  if (!charExists) {
    return (
      <div>
        <Talent />
      </div>
    );
  }
  return <div></div>;
};

export default Char;
