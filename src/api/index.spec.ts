import { cleanup } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import { getTodo, getTodos } from '.';
import { Todo } from '../types';

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
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        expect(axios.get).not.toHaveBeenCalled();
        const data = await getTodos();
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(todos);
    });
    test('should throw error when response status is not 200', async () => {
        const mockedResponse: AxiosResponse = {
            data: null,
            status: 100,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        await expect(getTodo(101)).rejects.toThrow(new Error('Something went wrong'));
        expect(axios.get).toHaveBeenCalled();
    });
});

describe('getTodo()', () => {
    test('should return a single todo', async () => {
        const todo: Todo = {
            userId: 1,
            id: 1,
            title: 'test-todo',
            completed: false,
        };
        const mockedResponse: AxiosResponse = {
            data: todo,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled();
        const data: Todo = await getTodo(1232323);
        expect(axios.get).toHaveBeenCalled();
        expect(data).toEqual(todo);
    });

    test('should throw error when response status is not 200', async () => {
        const mockedResponse: AxiosResponse = {
            data: null,
            status: 100,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        //expect(getTodo(1232323)).rejects.toEqual(new Error('Something went wrong'));
        await expect(getTodo(1232323)).rejects.toThrow(new Error('Something went wrong'));
        expect(axios.get).toHaveBeenCalled();
    });
});
