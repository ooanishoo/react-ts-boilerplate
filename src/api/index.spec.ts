import { cleanup } from '@testing-library/react';
import { getTodo, getTodos } from '.';
import { Todo } from '../types';

afterEach(cleanup);

describe('getTodos()', () => {
    test('should return todo list', async () => {
        const data = await getTodos();
        expect(data).toBeTruthy;
    });
});

describe('getTodo()', () => {
    test('should return a single todo', async () => {
        jest.mock('axios');
        const todo: Todo = {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        };
        // axios.get.mockResolvedValueOnce(todo);
        const data: Todo = await getTodo(1);
        expect(data).toEqual(todo);
    });
});
