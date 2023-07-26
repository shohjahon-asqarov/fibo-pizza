import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


export const korzinaSlice = createSlice({
    name: 'korzina',
    initialState: {
        data: [],
    },

    reducers: {
        // add product function 
        addKorzina: (state, action) => {
            const found = state.data.find(i => i.id === action.payload.id)
            if (found) {
                toast.warning('This product is already available')
            } else {
                state.data.push(action.payload)
                toast.success('Succefully added')
            }
        },

        // delete product function 
        deleteKorzina: (state, action) => {
            state.data = state.data.filter(i => action.payload.id !== i.id)
            toast.success('Succefully deleted')
        },

        // plus product count 
        updateCount: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    i.count++
                }
            })
        },

        // minus product count 
        minusCount: (state, action) => {
            state.data.forEach(i => {
                if (i.id === action.payload.id) {
                    i.count--
                }
            })
        }

    },
})

export const { addKorzina, deleteKorzina, updateCount , minusCount } = korzinaSlice.actions

export default korzinaSlice.reducer