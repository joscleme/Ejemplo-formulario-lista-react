import { useState } from 'react';
import './App.css';
import ListaUsuarios from './ListaUsuarios';

function App() {

  const usuarios = ['Juan', 'Pedro', 'Jose', 'Otro'];
  
  const formularioInicial = {
    nombre: "",
    apellidos: "",
    edad: ""
  }

  const [datosFormulario, setDatosFormulario] = useState(formularioInicial);

  const enviarFormulario = (e) => {

    e.preventDefault();

    console.log(datosFormulario);
  
  }

  const cambioDatos = (e) => {

    setDatosFormulario({
      
      ...datosFormulario, [e.target.name]: e.target.value

    });

  }

  return (
    <div className="App">
      
      <ListaUsuarios listaUsuarios={usuarios} />

      <form onSubmit={ enviarFormulario }>

        <input type="text" placeholder="Nombre" name="nombre" onChange={ cambioDatos } />

        <br />

        <input type="text" placeholder="Apellidos" name="apellidos" onChange={ cambioDatos } />

        <br />

        <input type="number" placeholder="Edad" min="0" name="edad" onChange={ cambioDatos } />

        <br />
        <br />

        <button type='submit'>Enviar</button>

      </form>
      
    </div>
  );
}

export default App;
