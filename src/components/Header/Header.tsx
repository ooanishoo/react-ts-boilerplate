import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header data-testid="header">
            <h1>My Project</h1>
            <nav data-testid="navigation" role="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
