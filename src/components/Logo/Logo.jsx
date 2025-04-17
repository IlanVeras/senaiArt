import React from 'react'
import styles from "../Logo/style.module.css"

export default function Logo() {
  return (
    <section style={{backgroundColor: 'transparent'}} className={`${styles.container} text-center pt-2 pb-2`}>
      <img src="/assets/art_logo.png" alt="" className=''/>
      <p styles={{color: 'red'}}>Exibições de artes de alunos</p>
    </section>
  )
}
