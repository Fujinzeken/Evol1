import React from "react";
import styles from "./buttomNav.module.css";
import Link from "next/link";
const ButtomNav = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/home">
        <p>Home</p>
      </Link>
      <Link href="/skills">
        <p>Skills</p>
      </Link>
      <Link href="/missions">
        <p>Mission</p>
      </Link>
      <Link href="mentors">
        <p>Mentors</p>
      </Link>
    </div>
  );
};

export default ButtomNav;
