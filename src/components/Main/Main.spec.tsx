import { render } from '@testing-library/react';
import React from 'react';
import { Wrapper } from '../../__mocks__/Wrapper';
import Main from './Main';

describe('<Main/>', () => {
    test('should render without crashing', () => {
        const { container, getByTestId, queryByRole } = render(<Wrapper component={<Main />} />);
        expect(container).toMatchSnapshot();
        expect(getByTestId('main')).toBeInTheDocument();
        expect(queryByRole('main')).toBeTruthy();
    });
});
