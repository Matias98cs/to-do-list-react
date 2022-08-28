import React, { useState } from "react";
import { BsClipboardPlus } from "react-icons/bs";
import "./formulario.css";

function Formulario({ crearTarea, borrarTodo }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(descripcion != "" && titulo != ""){
      crearTarea({
        titulo,
        descripcion,
      });
  
      setTitulo("");
      setDescripcion("");
    }
  };



  return (
    <div className="Container-form">
        <h1>Añade una Tarea</h1>
      <form onSubmit={handleSubmit} className="Formulario-container">
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          autoFocus
        />

        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button className="Btn-agregar">
          Guardar
        </button>
        <button 
          className="Btn-borrar-todo"
          onClick={borrarTodo}
          >
          Borrar Todo
        </button>
      </form>
    </div>
  );
}

export default Formulario;
