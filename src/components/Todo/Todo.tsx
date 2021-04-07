import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TParams = { id: string };
type TodoProps = RouteComponentProps<TParams>;

const Todo: React.FC<TodoProps> = ({ match }: TodoProps) => {
    console.log({ match });
    return <div data-testid="container">This is a todo component with ID :{match.params.id}</div>;
};

export default Todo;
