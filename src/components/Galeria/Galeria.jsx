import React from 'react'
import Card from '../Card/Card'
import styles from "./styles.module.css"

const obras = [
    {
        image: "../src/assets/g_1.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
    {
        image: "../src/assets/g_2.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
    {
        image: "../src/assets/g_3.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
    {
        image: "../src/assets/g_4.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
    {
        image: "../src/assets/g_5.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
    {
        image: "../src/assets/g_6.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur"
    },
]

export default function Galeria() {
  return (
    <div className={`${styles.container}`}>
        <h1>Artes premiadas</h1>
      {
        obras.map((obra) => {
            return (
                <Card nome={obra.nome} image={obra.image} autor={obra.autor}/>
            )
        })
      }
    </div>
  )
}
