import { configureStore } from '@reduxjs/toolkit'
import korzinaReducer from './slices/Korzina'
import modalSlice from './slices/Modal'

export const store = configureStore({
    reducer: {
        korzina: korzinaReducer,
        modal: modalSlice,
    },
})