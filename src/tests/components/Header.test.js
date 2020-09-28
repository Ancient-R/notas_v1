import React from 'react'
import { shallow } from 'enzyme';

// component
import Header from '../../components/Header';


describe('Pruebas en el componente <Header />', () => {
    test('debe mostrar el título', () => {
        const wrapper = shallow(
            <Header  />
        );

        expect( wrapper.find('h1').text() ).toBe("Crea Edita Gestiona tus notas" );
    });
});