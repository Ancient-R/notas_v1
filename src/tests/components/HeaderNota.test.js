import React from 'react'
import { shallow } from 'enzyme';

// component
import HeaderNota from '../../components/HeaderNota';

describe('Pruebas en el componente <HeaderNota />', () => {
    test('debe mostrar el título de la nota', () => {
        
        const wrapper = shallow(
            <HeaderNota 
                clase="important"
                titulo="Título de nota"
            />
        );

        expect( wrapper.find('p').text() ).toBe('Título de nota')
    });
});