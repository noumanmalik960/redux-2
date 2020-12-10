import React from "react";
import { useSelector } from "react-redux";

export const CounterDisplay = () => {
  const counter = useSelector((state) => {
    return state.counter.count;
  });

  return <div>Counter: {counter}</div>;
};
