import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

type TParams = { id: string }
type TodoProps = RouteComponentProps<TParams>

const Todo: React.FC<TodoProps> = ({ match }: TodoProps) => {
    return <div data-testid="todo">This is a todo component with ID :{match.params.id}</div>
}

export default Todo
