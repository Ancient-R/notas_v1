import { shallow } from 'enzyme'
import React from 'react'
import Nota from '../../components/Nota'

const nota = {
    id: 1234,
    titulo: 'Título de testing',
    contenido: 'Contenido del título testing',
    importancia: 'low'
}
const eliminaNota = jest.fn();
const setNuevoContenido = jest.fn();

const wrapper = shallow(
    <Nota 
        nota={ nota }
        eliminaNota={ eliminaNota }
        setNuevoContenido={ setNuevoContenido }
    />
);

describe('Pruebas en el componente <Nota />', () => {
    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe existir el componente <HeaderNota', () => {
        expect( wrapper.find('HeaderNota').exists() ).toBe( true );
    });
});