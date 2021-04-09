import axios from 'axios';
import { Todo } from '../types';

/* Functions related to api goes here */
export const fetchData = (): Promise<string> => Promise.resolve('hello world');

export const getTodos = async (): Promise<Todo[]> => {
    try {
        const resp = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/todos`);
        const data: Todo[] = await resp.data;
        return data;
    } catch (err) {
        console.error({ err });
        throw err;
    }
};

export const getTodo = async (id: number): Promise<Todo> => {
    const resp = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/todos/${id}`);
    const data: Todo = await resp.data;
    return data;
};
