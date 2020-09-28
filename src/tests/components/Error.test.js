import React from 'react'
import { shallow } from 'enzyme';

// component
import Error from '../../components/Error';


describe('Pruebas en el componente <Error />', () => {
    test('debe mostrar el error', () => {
        const wrapper = shallow(
            <Error error="Error testing" />
        );

        expect( wrapper.find('p').text() ).toBe('Error testing');
    });
});