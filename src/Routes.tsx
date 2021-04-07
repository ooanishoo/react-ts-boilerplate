import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, MyComponent, Todo, TodoList } from './components';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/component" component={MyComponent} />
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/:id" component={Todo} />
            <Route path={['/', '/home']} component={MyComponent} />
        </Switch>
    );
};

export default Routes;
