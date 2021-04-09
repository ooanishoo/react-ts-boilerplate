import { cleanup } from '@testing-library/react';
import { getTodo, getTodos } from '.';
import { Todo } from '../types';
import axios, { AxiosResponse } from 'axios';

afterEach(cleanup);

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getTodos()', () => {
    test('should return todo list', async () => {
        const todos: Todo[] = [
            {
                userId: 1,
                id: 1,
                title: 'todo-test-1',
                completed: false,
            },
            {
                userId: 2,
                id: 2,
                title: 'todo-test-2',
                completed: true,
            },
        ];
        const mockedResponse: AxiosResponse = {
            data: todos,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValue(mockedResponse);
        expect(axios.get).not.toHaveBeenCalled();
        const data = await getTodos();
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(todos);
    });
});

describe('getTodo()', () => {
    test('should return a single todo', async () => {
        const todo: Todo = {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        };
        const mockedResponse: AxiosResponse = {
            data: todo,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValue(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled();
        const data: Todo = await getTodo(1232323);
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(todo);
    });
});

//jest.mock('axios');
//jest.mock('axios', () => jest.fn());
