import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header data-testid="header">
            <nav data-testid="navigation" role="navigation">
                <ul role="list">
                    <li role="listitem">
                        <Link to="/">Home</Link>
                    </li>
                    <li role="listitem">
                        <Link to="/component">MyComponent</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
