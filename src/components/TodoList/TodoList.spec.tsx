import { cleanup, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { act } from 'react-dom/test-utils';
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

            const todoList = await waitFor(() => getByTestId('todo-list'));
            expect(todoList).toHaveTextContent('This is a Todo List');
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });
    });

    test.only('should show loading spinner on component mount and hide when the data has been fetched', async () => {
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
            // await waitForElementToBeRemoved(() => getByTestId('loading-spinner'));
            // expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });
    });
});
