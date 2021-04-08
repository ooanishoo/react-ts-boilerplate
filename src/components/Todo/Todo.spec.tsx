import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Todo } from '.';

afterEach(cleanup);
describe('<Todo/>', () => {
    test('should render without crashing', () => {
        const id = '3';
        const route = `/todos/${id}`;
        window.history.pushState({}, 'Test page', route);
        const { container, getByTestId } = render(<Route path="/todos/:id" component={Todo} />, { wrapper: Router });
        expect(container).toMatchSnapshot();
        expect(getByTestId('todo')).toHaveTextContent(`This is a todo component with ID :${id}`);
    });
});
