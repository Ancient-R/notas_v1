import React, { useState } from 'react'
import uuid from 'uuid/dist/v4'
import Error from './Error'

const Formulario =({ nota, setNota, notas, setNotas, nuevocontenido }) => {

    const { titulo, contenido, importancia } = nota
    const [ error, setError ] = useState(false)

    const actualizarState = e =>{
        setNota({
            ...nota, [e.target.name] : e.target.value
        })
    }

    const agregarNota = e =>{
        e.preventDefault()

        const regular= /[a-zA-Z0-9]/

        if(!regular.test(titulo) || contenido === ''){ 
            setError(true)
            return
        }

        setError(false)

        //Se agrega un id a la nota
        nota.id = uuid()

        //Se crea la nota y se añade al array de citas
        setNotas([
            ...notas, nota
        ])

        //Se reinicia el formulario
        setNota({
            titulo: '',
            contenido: '',
            importancia: 'low'
        })
        
    }

    return ( 
        <form
            className="mt-5"
            onSubmit = { agregarNota }
        >
            {error ?  <Error 
                        error="Debe llenar todos los campos"/>
                    : null
            }

            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white titulo">Título <i className="fas fa-text-height ml-2"/> </span>
            </div>
            <input 
                type="text" 
                className="form-control"
                name="titulo"
                value = { titulo }
                onChange={ actualizarState }/>
            </div>
            <small className="text-muted">Ejemplo: Tarea</small>
            <div className="input-group mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">Contenido <i className="fas fa-align-center ml-2" /> </span>
            </div>
            <textarea 
                name="contenido"
                rows="2"
                className="form-control text-area"
                value={contenido}
                onChange={ actualizarState }/>
            </div>
            <small className="text-muted">Ejemplo: Investigar cómo nacen los bebés</small>

            <div className="input-group mt-3">
                <div className="input-group-prepend">
                    <span className="input-group-text bg-primary text-white">Importancia
                    <i className="fas fa-exclamation ml-2"></i></span>
                </div>
                <select 
                    name="importancia" className="form-control"
                    value={importancia}
                    onChange={ actualizarState }
                >
                    <option value="low" className="bg-secondary text-white">Baja</option>
                    <option value="media" className="alert-warning">Media</option>
                    <option value="higth" className="bg-danger text-white">Alta</option>
                </select>
            </div>
            <small className="text-muted mb-3">Por defecto la importancia será 'baja'</small>
            <div className="input-group mt-3 mb-3">
                <button 
                    type="submit"
                    value="Agregar nota"
                    className="btn btn-primary btn-block"
                >Agregar nota <span><i className="far fa-sticky-note ml-2"/></span></button>
            </div>
        </form>
    );
}

export default Formulario;