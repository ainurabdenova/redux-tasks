import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        AddData(state, action) {
           state.data.push(action.payload)
        }
    }
});

export const { AddData } = inputSlice.actions

export default inputSlice.reducer