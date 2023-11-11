"use client";
import Image from "next/image";
import styles from "./topComponent.module.css";

const TopComponent = ({ playerData }) => {
  return (
    <div className={styles.playerInfoWrapper}>
      <div className={styles.playerInfo}>
        <Image src="/assets/idle.gif" alt="" width={50} height={40} />
        <div className={styles.playerGrade}>
          <span>{playerData?.name}</span>
          <span>
            {playerData?.Grade} Lvl: {playerData?.Lvl}
          </span>
        </div>
      </div>
      <span>Settings</span>
    </div>
  );
};

export default TopComponent;
