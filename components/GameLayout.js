"use client";
import React, { useEffect } from "react";
import ButtomNav from "./buttomNav/ButtomNav";
import usePlayerData from "@/store/playerData";
import TopComponent from "./topComponent/TopComponent";
import styles from "./gameLayout.module.css";
const GameLayout = ({ children }) => {
  const { setPlayerData, playerData } = usePlayerData();

  useEffect(() => {
    const char = localStorage.getItem("char");
    if (!char) {
      router.push("/");
    } else {
      setPlayerData(JSON.parse(char));
    }
  }, []);
  return (
    <div className={styles.container}>
      <TopComponent playerData={playerData} />
      {children}
      <ButtomNav />
    </div>
  );
};

export default GameLayout;
