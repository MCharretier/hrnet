import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        list: []
    },
    reducers: {
        add: (state, action) => {
            state.list.push(action.payload)
        }
    }
})

export const { add } = employeeSlice.actions

export default employeeSlice.reducer
