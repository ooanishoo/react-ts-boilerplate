import React, { ComponentType, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../redux/store'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <Router>{children}</Router>
        </Provider>
    )
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: ReactElement, { route = '/' } = {}, options?: Omit<RenderOptions, 'queries'>) => {
    // Wrap dispatch in a mock so it can be spied on.
    store.dispatch = jest.fn(store.dispatch)

    window.history.pushState({}, 'Test page', route)

    const newRender = render(ui, { wrapper: AllTheProviders as ComponentType, ...options })
    return { store, ...newRender }
}

// re-export everything if you want to use test-utils file to import everything
// export * from '@testing-library/react'

// override render method
export { customRender as render }
