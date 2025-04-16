import React from 'react'
import styles from "../Navbar/navbar.module.css"

export default function Navbar() {
  return (
    <section className={`${styles.navbar} container-fluid`}>
      <ul className={`${styles.items}`}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Artistas</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </section>
  )
}
