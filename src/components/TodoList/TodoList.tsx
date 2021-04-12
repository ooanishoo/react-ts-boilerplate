import { map } from 'ramda';
import React, { useEffect, useState } from 'react';
import { getTodos } from '../../api';
import { Todo } from '../../types';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState('');
    useEffect(() => {
        setTimeout(() => {
            getTodos()
                .then((todos) => setTodos(todos))
                .catch((err) => setError(err?.message))
                .finally(() => setIsLoading(false));

            // const loadTodos = async () => {
            //     try {
            //         const data = await getTodos();
            //         setTodos(data);
            //     } catch (err) {
            //         setError(err?.message);
            //     }
            //     setIsLoading(false);
            // };
            // loadTodos();
        }, 1000);
    }, []);

    if (isLoading) return <div data-testid="loading-spinner">Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div data-testid="todo-list">
            <h1>This is a Todo List</h1>
            <ul role="list">
                {map((todo: Todo) => (
                    <li role="listitem" data-testid="todo" key={todo.id}>
                        {todo.title}
                    </li>
                ))(todos)}
            </ul>
        </div>
    );
};

export default TodoList;
