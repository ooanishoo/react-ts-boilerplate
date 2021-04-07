import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { Wrapper } from './__mocks__/Wrapper';

afterEach(cleanup);

test('renders learn react link', () => {
    render(<Wrapper component={<App />} />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
