import { render } from '@testing-library/react'
import React from 'react'
import Home from './Home'

describe('<Home/>', () => {
    test('should render without crashing', () => {
        const expectedOutput = 'Home'
        const { container, getByTestId } = render(<Home />)
        expect(container).toMatchSnapshot()
        expect(getByTestId('home')).toHaveTextContent(expectedOutput)
    })
})
