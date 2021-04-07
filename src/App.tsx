import React from 'react';
import Routes from './Routes';

const App: React.FC = () => {
    return (
        <div>
            <Main />
        </div>
    );
};

export default App;

export const Main: React.FC = () => {
    return (
        <main>
            <Routes />
        </main>
    );
};
