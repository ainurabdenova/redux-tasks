import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, deleteNumber, addNum } from './../store/slice/countSlice';


const Count = () => {

    const [num, setNum] = useState(0)
    const dispatch = useDispatch()
    const number = useSelector(state => state.count.number)
    const data = useSelector(state => state.inputData.data)
    return (
        <div>
            <input type="number" onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => dispatch(addNum(Number(num)))}>{`add ${num}`}</button>
            <div>
                <button onClick={() => dispatch(addNumber())}>+</button>
                <button onClick={() => dispatch(deleteNumber())}>-</button>
            </div>

            <div>{number}</div>
            <div>{
                data.map((item, index) => <li key={index}>{item}</li>)
            }</div>
        </div>
    );
}

export default Count;
