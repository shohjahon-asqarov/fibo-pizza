import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


export const korzinaSlice = createSlice({
    name: 'korzina',
    initialState: {
        data: [],
    },
    reducers: {
        addKorzina: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (found) {
                state.data.map(i => {
                    if (i.id === found.id) {
                        i.count++
                    }
                })
                toast.success('This product couns updated')
            } else {
                state.data.push(action.payload)
                toast.success('Succefully added')
            }
        },

        deleteKorzina: (state, action) => {
            state.data = state.data.filter(i => action.payload.id !== i.id)
            toast.success('Succefully deleted')
        },

        updateCount: (state, action) => {
            state.data.map(i => {
                if (i.id === action.payload.id) {
                    i.count++
                }
            })
        },
        minusCount: (state, action) => {
            state.data.map(i => {
                if (i.id === action.payload.id) {
                    i.count--
                }
            })
        }

    },
})

export const { addKorzina, deleteKorzina, updateCount , minusCount } = korzinaSlice.actions

export default korzinaSlice.reducer