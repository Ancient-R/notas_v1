import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNotas from './components/ListaNotas';

function App() {

  const [ nota, setNota ] = useState({
    titulo: '',
    contenido: '',
    importancia: 'low'
  })

  // Citas en local Storage, verificamos que haya citas
  let notasIniciales = JSON.parse(localStorage.getItem('notas'))
  if(!notasIniciales){
    notasIniciales = []
  }
  const [ notas, setNotas ] = useState(notasIniciales)

  const [ nuevoContenido, setNuevoContenido ] = useState(nota.contenido)

  // UseEffect
  useEffect(() =>{
    if(notasIniciales) localStorage.setItem('notas', JSON.stringify(notas))
    else localStorage.setItem('notas', JSON.stringify([]))

  }, [notas, notasIniciales, nuevoContenido])

  //Elimina una nota
  const eliminaNota = id =>{

    const nuevasNotas = notas.filter(nota => nota.id !== id)
      setNotas(nuevasNotas)
  }

  return (
    <Fragment>
      <Header />

      <div className="container">
        <div className="row">
          <div className ="col-md-6">
            <Formulario 
              nota={nota}
              setNota={setNota}
              notas={notas}
              setNotas ={ setNotas}
              nuevoContenido={nuevoContenido}
            />
          </div>

          <div className="col-md-6">
            {notas.length === 0 ?
              <h1 className="header-nota">Ninguna nota
                <span><i className="fas fa-ban ml-2"></i></span></h1>
            :
              <ListaNotas 
                notas={notas}
                eliminaNota={eliminaNota}
                nuevoContenido={nuevoContenido}
                setNuevoContenido={setNuevoContenido}
              />}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
