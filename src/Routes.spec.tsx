import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { Todo, TodoList } from './components';

// test utils file
const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: Router });
};

describe('Render Routes correctly', () => {
    test('should render Home component', () => {
        const screen = renderWithRouter(<App />, {});
        expect(screen.getByText(/This is a Home Page/, { exact: false })).toBeInTheDocument();
    });

    test('should render TodoList component', () => {
        const screen = renderWithRouter(<TodoList />, { route: '/todos' });
        expect(screen.getByText(/This is a Todo List/, { exact: false })).toBeInTheDocument();
    });

    test('should render Todo component', () => {
        const { getByTestId } = renderWithRouter(<Route path="/todos/:id" component={Todo} />, { route: '/todos/1' });
        const output = 'This is a todo component with ID :1';
        expect(getByTestId('todo')).toHaveTextContent(output);
    });

    test('should navigate between pages', () => {
        const screen = renderWithRouter(<App />, {});
        expect(screen.getByText(/This is a Home Page/, { exact: false })).toBeInTheDocument();

        // click Todos menu
        userEvent.click(screen.getByText(/Todos/i));
        expect(screen.getByText(/This is a Todo List/, { exact: false })).toBeInTheDocument();

        // click Home menu
        userEvent.click(screen.getByText(/Home/i));
        expect(screen.getByText(/This is a Home Page/, { exact: false })).toBeInTheDocument();
    });
});
