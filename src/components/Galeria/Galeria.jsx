import React from 'react'
import Card from '../Card/Card'
import styles from "./styles.module.css"

const obras = [
    {
        image: "../src/assets/g_1.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "28/06/2003"
    },
    {
        image: "../src/assets/g_2.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "09/12/2020"
    },
    {
        image: "../src/assets/g_3.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "13/03/2023"
    },
    {
        image: "../src/assets/g_4.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "07/11/1999"
    },
    {
        image: "../src/assets/g_5.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "27/01/2014"
    },
    {
        image: "../src/assets/g_6.jpg",
        nome: "Obra de Arthur",
        autor: "Arthur",
        data: "30/09/2022"
    },
]

export default function Galeria() {
  return (
    <div className={`${styles.container}`}>
        <h1 className='m-5 text-center'>Artes premiadas</h1>
        <div className={`${styles.galeria}`}>
        {
            obras.map((obra) => {
                return (
                    <Card 
                    nome={obra.nome}
                    image={obra.image} 
                    autor={obra.autor}
                    data={obra.data}
                    />
                )
            })
        }
        </div>
    </div>
  )
}
