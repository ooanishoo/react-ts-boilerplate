import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header data-testid="header">
            <nav data-testid="navigation" role="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/component">MyComponent</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
