import React, { useState } from 'react';
import HeaderNota from '../components/HeaderNota'

const Nota = ({ nota, eliminaNota, setNuevoContenido }) => {

    const fecha = new Date().toLocaleString()
    
    // El nuevo contenido de la nota
    const [ contenido, setContenido] = useState(nota.contenido)
    const [ deshabilitado, setDeshabilitado ] = useState(true)

    const editarContenido = () =>{
        setDeshabilitado(false)
    }
    const actualizarContenido = () =>{
        setDeshabilitado(true)
        setNuevoContenido(contenido)
        nota.contenido = contenido
    }

    return ( 

        <div className="card mt-5 mb-3">
            { (nota.importancia === 'low') ?  
                <HeaderNota  
                    clase="alert-secondary"
                    titulo = {nota.titulo}>
                </HeaderNota>
                : 
                (nota.importancia === 'media') ?
                <HeaderNota  
                    clase="alert-warning"
                    titulo = {nota.titulo}>                
                </HeaderNota>
                :
                <HeaderNota  
                    clase="alert-danger"
                    titulo = {nota.titulo}>                
                </HeaderNota>
            }            
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-center text-muted">{ fecha } </li>
                <textarea 
                    className="list-group-item editable"
                    disabled={deshabilitado}
                    value={contenido}
                    onChange={e => setContenido(e.target.value)}
                >{nota.contenido}</textarea>
            </ul>
            {/* Botón que edita la nota */}
            {deshabilitado ? <button
                className="btn alert-warning"
                onClick={ editarContenido }
            ><i className="fas fa-eraser"></i></button>:
            <button
                className="btn alert-success"
                onClick={ actualizarContenido }
            ><i className="far fa-check-circle"></i></button>}
            <button
                className="btn eliminar alert-danger"
                onClick={e=> eliminaNota(nota.id)}
            ><i className="far fa-trash-alt"></i></button>
        </div>
    );
}

export default Nota;