import axios from 'axios';
import { Todo } from '../types';

/* Functions related to api goes here */
export const fetchData = (): Promise<string> => Promise.resolve('hello world');

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const resp = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/todos`);
        if (resp.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: Todo[] = await resp.data;
        return data;
    } catch (err) {
        throw err;
    }
};

export const getTodo = async (id: number): Promise<Todo> => {
    try {
        const resp = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/todos/${id}`);
        if (resp.status !== 200) {
            throw new Error('Something went wrong');
        }
        const data: Todo = await resp.data;
        return data;
    } catch (err) {
        throw err;
    }
};
