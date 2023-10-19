"use client";
import React, { useEffect, useState } from "react";
import styles from "./talent.module.css";
import Image from "next/image";
import { TALENTDICE } from "@/constant/dice";
import usePlayerData from "@/store/playerData";

const Talent = () => {
  const [image, setImage] = useState("");
  const [dice1, setDice1] = useState(false);
  const [dice2, setDice2] = useState(false);
  const [name, setName] = useState("");
  const [talentType, setTalentType] = useState('')
  const {setPlayerData,playerData} = usePlayerData()


const handleClick= ()=>{
  if(!name) return
  const data = {
    ...playerData,
    name: name,
    talentType: talentType.type,
    Strength: playerData.Strength + talentType.value,
    Speed:playerData.Speed + talentType.value,
    Health:playerData.Health + talentType.value,
    Defence:playerData.Defence + talentType.value

  }
  console.log(data);
  setPlayerData(data)
  localStorage.setItem("char", JSON.stringify(data))
  
}

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 6);
    setImage(TALENTDICE[randomNumber].talent);
    setDice1(true);
  }, []);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 6);
  
    setTimeout(() => {
      setImage(TALENTDICE[randomNumber].talent);
      setDice2(true);
    }, 1000);
  }, [dice1]);

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 6);
    
    setTimeout(() => {
      setImage(TALENTDICE[randomNumber].talent);
      setTalentType(TALENTDICE[randomNumber])
    }, 2000);
    
  }, [dice2]);
  return (
    <div className={styles.talentScreen}>
      <div className={styles.talentWrapper}>
        <h3>Talent Pick</h3>
        <Image src={image} height={30} width={30} alt="" />
        <input
          type="text"
          placeholder="Choose Mage name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.btn} onClick={handleClick}>Enter</button>
        <span>Your talent is {talentType.type}</span>
      </div>
    </div>
  );
};

export default Talent;
