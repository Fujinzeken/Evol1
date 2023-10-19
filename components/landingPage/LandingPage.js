import React from 'react'
import styles from "./landingPage.module.css"
import Link from 'next/link'
const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Link href="/char"><button className={styles.startbtn}>Enter Evol World !</button></Link>
    </div>
  )
}

export default LandingPage
