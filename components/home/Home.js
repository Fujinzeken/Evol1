"use client";
import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GradeExpValue, grades } from "@/constant/dice";
import usePlayerData from "@/store/playerData";
const Home = () => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const { setPlayerData, playerData } = usePlayerData();
  const [lvlUp, setLevelUp] = useState(false);
  const [breakthrough, setBreakthrough] = useState(false);

  const duration = 5000;
  const router = useRouter();

  const handleStartTraining = () => {
    const player = {
      ...playerData,
    };
    player.firstLogin = false;
    localStorage.setItem("char", JSON.stringify(player));
    setPlayerData(player);
    setWidth(0);
  };
  const fillAndEmpty = () => {
    setCount(count + 1000);
    if (count === duration) {
      setCount(0);
    }
    setWidth(width + 20);
  };

  const checkLevelUp = () => {
    const player = {
      ...playerData,
    };
    const grade = player.Grade;
    console.log(grade);
    player.currentExp += GradeExpValue[player.Grade].expValue;
    if (player.currentExp === player.ExpNeeded && player.Lvl === 10) {
      setBreakthrough(true);
      const currentGradeIndex = grades.indexOf(grade);
      player.Grade = grades[currentGradeIndex + 1];
      player.Lvl = 1;
      player.ExpNeeded =
        player.ExpNeeded * GradeExpValue[player.Grade].expMultiplier;
      player.Strength += GradeExpValue[player.Grade].basicBreakthroughStat;
      player.Speed += GradeExpValue[player.Grade].basicBreakthroughStat;
      player.Defence += GradeExpValue[player.Grade].basicBreakthroughStat;
      player.Health += GradeExpValue[player.Grade].vitalBreakthroughStat;
      player.Mana += GradeExpValue[player.Grade].vitalBreakthroughStat;
    } else if (player.currentExp >= player.ExpNeeded) {
      player.Lvl += 1;
      player.ExpNeeded = player.ExpNeeded * GradeExpValue[grade].expMultiplier;
      player.Strength += GradeExpValue[player.Grade].basicLevelUpStat;
      player.Speed += GradeExpValue[player.Grade].basicLevelUpStat;
      player.Defence += GradeExpValue[player.Grade].basicLevelUpStat;
      player.Health += GradeExpValue[player.Grade].vitalLevelUpStat;
      player.Mana += GradeExpValue[player.Grade].vitalLevelUpStat;
      setLevelUp(true);
    }
    localStorage.setItem("char", JSON.stringify(player));
    setPlayerData(player);
  };
  useEffect(() => {
    if (width === 100) {
      checkLevelUp();
      setTimeout(() => {
        setLevelUp(false);
      }, 4000);
    }
    if (width < 120) {
      setTimeout(() => {
        fillAndEmpty();
      }, 1000);
    } else {
      setWidth(0);
    }
  }, [width]);

  useEffect(() => {
    const char = localStorage.getItem("char");
    if (!char) {
      router.push("/");
    } else {
      setPlayerData(JSON.parse(char));
    }
  }, []);
  const barStyle = {
    width: `${width}%`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        {lvlUp && (
          <div>
            <p>Hurray!!! You leveled up.</p>
            <p>Strength: {playerData?.Strength}</p>
            <p>Speed: {playerData?.Speed}</p>
            <p>Health: {playerData?.Health}</p>
          </div>
        )}
        <div>
          <Image src="/assets/idle.gif" alt="" width={150} height={150} />
        </div>
        <div>
          {!playerData?.firstLogin && (
            <div className={styles.loader}>
              <div className={styles.bar} style={barStyle}></div>
            </div>
          )}
          {!playerData?.firstLogin && (
            <span>
              Exp:
              {playerData?.currentExp} / {playerData?.ExpNeeded}
            </span>
          )}
          {playerData?.firstLogin && (
            <button onClick={handleStartTraining}>Start Training</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
