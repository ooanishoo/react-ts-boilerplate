import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
    middleware,
    reducer: {
        // your reducer goes here
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
