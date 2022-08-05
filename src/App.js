import { useDispatch, useSelector } from 'react-redux';
import { addNumber, deleteNumber, addNum } from './store/slice/countSlice';
import { useState } from 'react';


import './App.css';

function App() {

  const [num, setNum] = useState(0)


  const dispatch = useDispatch()
  const number = useSelector(state => state.count.number)

  return (
    <div className="App">
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(addNum(Number(num)))}>{`add ${num}`}</button>
      <div>
        <button onClick={() => dispatch(addNumber())}>+</button>
        <button onClick={() => dispatch(deleteNumber())}>-</button>
      </div>

      <div>{number}</div>

    </div>
  );
}

export default App;
