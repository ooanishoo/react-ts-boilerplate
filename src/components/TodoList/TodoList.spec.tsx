import { cleanup, render, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { getTodo } from '../../api';
import { Todo } from '../../types';
import TodoList from './TodoList';

afterEach(cleanup);

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

describe('<TodoList/>', () => {
    test('should show loading spinner on component mount', async () => {
        const mockedResponse: AxiosResponse = {
            data: todos,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        await act(async () => {
            const { getByTestId } = render(<TodoList />);
            expect(getByTestId('loading-spinner')).toHaveTextContent('Loading...');
            await waitFor(() => expect(getByTestId('loading-spinner')).toBeInTheDocument());
            expect(mockedAxios.get).not.toHaveBeenCalled();
        });
    });

    test('should show error message if the api throws an error ', async () => {
        const mockedResponse: AxiosResponse = {
            data: null,
            status: 404,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        await act(async () => {
            const { getByTestId } = render(<TodoList />);
            await waitFor(() => expect(getByTestId('error')).toBeInTheDocument());
            expect(getByTestId('error')).toHaveTextContent('Something went wrong');
            expect(mockedAxios.get).toHaveBeenCalled();
        });
    });

    test('should fetch todos and display data', async () => {
        const mockedResponse: AxiosResponse = {
            data: todos,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        };
        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        await act(async () => {
            const { getByTestId } = render(<TodoList />);
            expect(getByTestId('loading-spinner')).toHaveTextContent('Loading...');
            expect(mockedAxios.get).not.toHaveBeenCalled();

            const todoContainer = await waitFor(() => getByTestId('todo-container'));
            expect(todoContainer).toBeInTheDocument();
            const todoList = await waitFor(() => getByTestId('todo-list'));
            expect(todoList).toBeInTheDocument();
            const todo = within(todoList).getAllByTestId('todo-item');
            expect(todo.length).toEqual(2);
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });
    });
});
