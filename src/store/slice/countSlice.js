import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 0,
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        addNumber(state) {
            state.number = state.number + 1
        },
        deleteNumber(state) {
            state.number = state.number - 1
        },
        addNum(state, action) {
            state.number = state.number + action.payload
        }
    }
});

export const { addNumber, deleteNumber, addNum } = countSlice.actions

export default countSlice.reducer