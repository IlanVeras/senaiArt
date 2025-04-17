import React from 'react'
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <p>Nos encontre nas redes sociais</p>
      <div className={`${styles.socials}`}>
        <img src="../src/assets/facebook.png" alt=""/>
        <img src="../src/assets/instagram.png" alt="" />
        <img src="../src/assets/twitter.png" alt="" />
      </div>
      <p>Art 2025</p>
    </div>
  )
}
