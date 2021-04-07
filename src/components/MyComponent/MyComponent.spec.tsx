import { render } from '@testing-library/react';
import React from 'react';
import MyComponent from './MyComponent';

describe('<MyComponent/>', () => {
    test('should render without crashing', () => {
        const expectedOutput = 'This is a custom component';
        const { container, getByTestId } = render(<MyComponent />);
        expect(container).toMatchSnapshot();
        expect(getByTestId('container')).toHaveTextContent(expectedOutput);
    });
});
