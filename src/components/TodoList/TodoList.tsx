import { map } from 'ramda';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from '../../api';
import { Todo } from '../../types';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState('');
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        return () => {
            // called when the component is going to unmount
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (isMounted.current) {
                getTodos()
                    .then((todos) => setTodos(todos))
                    .catch((err) => setError(err?.message))
                    .finally(() => setIsLoading(false));
            }
        }, 900);
    }, []);

    if (isLoading) return <div data-testid="loading-spinner">Loading...</div>;
    if (error) return <div data-testid="error">{error}</div>;
    return (
        <div data-testid="todo-container">
            <h1>This is a Todo List</h1>
            <ul role="list" data-testid="todo-list">
                {map((todo: Todo) => (
                    <li role="listitem" data-testid="todo-item" key={todo.id}>
                        <Link to="/todos/1">
                            <input type="checkbox" checked={todo?.completed} readOnly />
                            {todo.title}
                        </Link>
                    </li>
                ))(todos)}
            </ul>
        </div>
    );
};

export default TodoList;
