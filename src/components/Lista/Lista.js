import React from 'react'
import ListaCard from '../ListaCard/ListaCard'
import './Lista.css'

function Lista({tareas, borrarTarea }) {
  if(tareas.length === 0){
    return <h1>No hay Tareas aun</h1>
  }
  return (
    <div className='Lista-container'>
        <ListaCard data={tareas} borrarTarea={borrarTarea} />
    </div>
  )
}

export default Lista