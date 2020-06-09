import React from 'react'
import Nota from './Nota';

const ListaNotas = ({ notas, eliminaNota, setNuevoContenido }) => {
    return ( 

        <div>
            {notas.map(nota =>(
                <Nota 
                    key={nota.id}
                    nota={nota}
                    eliminaNota={eliminaNota}
                    setNuevoContenido={setNuevoContenido}
                />
            ))}
        </div>
    );
}

export default ListaNotas;