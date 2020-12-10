import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../store/counterSlice";

export const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    // console.log(state.counter.count);
    return state.counter.count;
  });
  return (
    <div>
      <button onClick={() => dispatch(increment())}>INC</button>
      {counter}
      <button onClick={() => dispatch(decrement())}>DEC</button>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(incrementByValue(Number(value)))}>
        INC_BY_VAL
      </button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};
