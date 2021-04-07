import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { Wrapper } from './__mocks__/Wrapper';

afterEach(cleanup);

describe('<App />', () => {
    test('renders without crashing', () => {
        const { container } = render(<Wrapper component={<App />} />);
        expect(container).toMatchSnapshot();
    });
});
