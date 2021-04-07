import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

/* a component that renders App component inside Router */
const Wrapper: React.FC = () => (
    <Router>
        <App />
    </Router>
);

test('renders learn react link', () => {
    render(<Wrapper />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
