import React from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import './listaCard.css'

function ListaCard({data, borrarTarea}) {

    const mostrarTareas = (tarea) => {
        return(
            <div key={tarea.id} className="Card-container">
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
                <button onClick={() => borrarTarea(tarea.id)}>
                    <BsFillXCircleFill />
                </button>
            </div>
        )
    }

  return <>{data.map(mostrarTareas)}</>
  
}

export default ListaCard

