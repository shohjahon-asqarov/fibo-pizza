import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const korzinaSlice = createSlice({
    name: 'korzina',
    initialState: {
        data: [],
    },
    reducers: {
        addKorzina: (state, action) => {
            state.data.push(action.payload)
        },
        deleteKorzina: (state, action) => {
            state.data = state.data.filter(i => action.payload.id !== i.id)
        },

    },
})

export const { addKorzina, deleteKorzina } = korzinaSlice.actions

export default korzinaSlice.reducer