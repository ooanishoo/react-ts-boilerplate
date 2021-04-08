import { render } from '@testing-library/react';
import React from 'react';
import PageNotFound from './PageNotFound';

describe('<PageNotFound/>', () => {
    test('should render without crashing', () => {
        const expectedOutput = 'Opps! The page you requested was not found.';
        const { container, getByTestId } = render(<PageNotFound />);
        expect(container).toMatchSnapshot();
        expect(getByTestId('page-not-found')).toHaveTextContent(expectedOutput);
    });
});
