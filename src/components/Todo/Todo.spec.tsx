import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Todo } from '.';
import { render } from '@testing-library/react';

describe('<Todo/>', () => {
    test.skip('should render without crashing', () => {
        // const { container } = render(
        //     <Router>
        //         <Route path="/:id" component={Todo} />
        //     </Router>
        // );
        const route = '/1';
        window.history.pushState({}, 'Test page', route);
        const { container } = render(<Route path="/:id" component={Todo} />, { wrapper: Router });
        expect(container).toMatchSnapshot();
    });
});
