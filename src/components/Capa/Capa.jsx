import React from 'react'
import styles from "../Capa/styles.module.css"

export default function Capa() {
  return (
    <section className={`${styles.container}`}>
        <section className={`${styles.capa} container-fluid`}>
          <div className={`${styles.cardCapa} container-fluid card`} style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Rosto Brasileiro</h5>
                <p className="card-text">Por Alice</p>
                <p className='card-text'>Realizada em 20/03/2025</p>
                <a href="#" className="btn btn-dark">Detalhes</a>
            </div>
            </div>
        </section>
    </section>
  )
}
