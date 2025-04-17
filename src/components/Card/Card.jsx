import React from 'react'

export default function Card({image, nome, autor, data}) {
  return (
    <div className="card" style={{width: "25rem"}}>
        {/* <img src="../src/assets/g_2.jpg" className="card-img-top" alt="..." /> */}
        <img src={`${image}`} className="card-img-top" alt="..." />
        <div className="card-body">
             <h5 className="card-title">{nome}</h5>
            <p className="card-text">Por {autor}</p>
            <p className='card-text'>Realizada em {data}</p>
            <a href="#" className="btn btn-dark">Go somewhere</a>
        </div>
    </div>
  )
}
