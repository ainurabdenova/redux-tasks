import { configureStore } from '@reduxjs/toolkit';
import countReducer from './slice/countSlice';
import inputDataReducer from './slice/inputSlice';

export const store = configureStore({
    reducer: {
        count: countReducer,
        inputData: inputDataReducer

    }
})