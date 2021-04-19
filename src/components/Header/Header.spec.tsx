import { render, within } from '@testing-library/react'
import React from 'react'
import Header from './Header'
import { Wrapper } from '../../__mocks__/Wrapper'

describe('<Header/>', () => {
    test('should render without crashing', () => {
        const { container, getByTestId, queryByRole } = render(<Wrapper component={<Header />} />)
        expect(container).toMatchSnapshot()

        const header = getByTestId('header')
        expect(header).toBeInTheDocument()

        const navigation = within(header).getAllByTestId('navigation')
        expect(navigation.length).toBe(1)
        expect(queryByRole('navigation')).toBeTruthy()
    })
})
