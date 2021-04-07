import { render, within } from '@testing-library/react';
import React from 'react';
import Header from './Header';
import { Wrapper } from '../../__mocks__/Wrapper';

describe('<Header/>', () => {
    test('should render without crashing', () => {
        const { container, getByTestId } = render(<Wrapper component={<Header />} />);
        const header = getByTestId('header');
        const navigation = within(header).getAllByTestId('navigation');
        expect(container).toMatchSnapshot();
        expect(navigation.length).toBe(1);
    });
});
