import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData } from './../store/slice/inputSlice';

const DatesInput = () => {
    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const allData = useSelector(state => state.inputData.data)
    console.log(allData)

    const handleClick = () => {
        dispatch(AddData(data))
        setData('')
    }

    return (
        <div>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={handleClick}>Add dates</button>
            <div>{
                allData.map((item, index) => <li key={index}>{item}</li>)
            }</div>
        </div>
    );
}

export { DatesInput }
