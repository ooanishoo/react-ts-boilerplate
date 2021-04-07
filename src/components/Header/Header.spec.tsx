import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('<Header/>', () => {
    test('should render without crashing', () => {
        const expectedOutput = 'Header';
        const { container, getByTestId } = render(<Header />);
        expect(container).toMatchSnapshot();
        expect(getByTestId('header')).toHaveTextContent(expectedOutput);
    });
});
