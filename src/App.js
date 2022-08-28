import { useEffect, useState } from 'react';
import Formulario from './components/Fomulario/Formulario';
import Lista from './components/Lista/Lista';
import {data} from './data/data'
import './App.css'

function App() {

  const [tareas, setTareas] = useState([])

  useEffect( () => {
    setTareas(data)
  }, [])

  function crearTarea(tarea){
    setTareas([...tareas, {
      titulo: tarea.titulo,
      id: tarea.length,
      descripcion: tarea.descripcion
    }])
  }

  function borrarTarea(tareaId){
    setTareas(tareas.filter( tarea => tarea.id !== tareaId))
  }

  const borrarTodo = () => {
    setTareas([])
  }

  return (
    <main className='main-container'>
      <Formulario crearTarea={crearTarea} borrarTodo={borrarTodo} />
      <Lista tareas={tareas} borrarTarea={borrarTarea}/>
    </main>
  );
}

export default App;
