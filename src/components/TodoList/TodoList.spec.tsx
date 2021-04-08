import { render } from '@testing-library/react';
import React from 'react';
import TodoList from './TodoList';

describe('<TodoList/>', () => {
    test('should render without crashing', () => {
        const expectedOutput = 'This is a Todo List';
        const { container, getByTestId } = render(<TodoList />);
        expect(container).toMatchSnapshot();
        expect(getByTestId('todo-list')).toHaveTextContent(expectedOutput);
    });
});
