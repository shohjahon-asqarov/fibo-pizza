import { createSlice } from '@reduxjs/toolkit'


export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        status: false,
        product: {},
    },

    reducers: {
        // add product function 
        showMoadal: (state, action) => {
            state.product = action.payload
            state.status = true
        },

        // close modal 
        closeModal: (state, action) => {
            state.status = false
        },

    },
})

export const { showMoadal , closeModal } = modalSlice.actions

export default modalSlice.reducer