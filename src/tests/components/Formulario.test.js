import React from 'react'
import { shallow } from 'enzyme';

// component
import Formulario from '../../components/Formulario';

import '@testing-library/jest-dom';

const nota = {
    id: 1234,
    titulo: '',
    contenido: '',
    importancia: 'low'
}

const setNota = jest.fn();
const notas = [];
const setNotas = jest.fn();
const nuevocontenido = '';

const wrapper = shallow(
    <Formulario
        nota={ nota }
        notas={ notas }
        setNota={ setNota }
        setNotas={ setNotas }
        nuevocontenido={ nuevocontenido }
     />
);

describe('Pruebas en el componente <Formulario />', () => {
    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });
    test('debe ejecutar setNota', () => {

        wrapper.find('input[name="titulo"]').simulate('change', {
            target: {
                name: 'titulo',
                value: 'Título test'
            }
        });

        expect( setNota ).toHaveBeenCalledWith({
            id: 1234, 
            titulo: "Título test",
            contenido: "",
            importancia: 
            "low",
        });
    });

    test('no debe ejecutar setNotas', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect( setNotas ).not.toHaveBeenCalled();
    });

    test('debe ejecutar setNotas', () => {
       
        const nota = {
            id: 1234,
            titulo: 'Título testing',
            contenido: 'Contenido del título testing',
            importancia: 'low'
        }

        const setNota = jest.fn();
        const notas = [];
        const setNotas = jest.fn();
        const nuevocontenido = '';

        const wrapper = shallow(
            <Formulario
                nota={ nota }
                notas={ notas }
                setNota={ setNota }
                setNotas={ setNotas }
                nuevocontenido={ nuevocontenido }
            />
        );


        wrapper.find('input[name="titulo"]').simulate('change', {
            target: {
                name: 'titulo',
                value: 'Título testing'
            }
        });

        wrapper.find('textarea').simulate('change', {
            target: {
                name: 'contenido',
                value: 'Contenido del título testing'
            }
        });

        wrapper.find('select').simulate('change', {
            target:{
                name: 'importancia',
                value: 'low'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( setNotas ).toHaveBeenCalledWith([{
            id: expect.any(String),
            titulo: "Título testing",
            contenido: "Contenido del título testing", 
            importancia: "low"
        }]);
        });
});