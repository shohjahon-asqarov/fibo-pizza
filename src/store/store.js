import { configureStore } from '@reduxjs/toolkit'
import korzinaReducer from './slices/Korzina'

export const store = configureStore({
    reducer: {
        korzina: korzinaReducer,
    },
})