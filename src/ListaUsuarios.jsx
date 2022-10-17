import React from 'react'

function ListaUsuarios(props) {

  const usuarios = props.listaUsuarios;

  return (
    <div>
    
    <ul>

    { usuarios.map((i, index) => 
        <li key={index}>{i}</li>
    )}

    </ul>
    
    </div>
  )
}

export default ListaUsuarios