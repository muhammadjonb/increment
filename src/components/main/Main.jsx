import React from "react";
import { useDispatch } from "react-redux";
import { dic, inc, reset } from "../../context/action/action";

const Main = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Main</h2>
      <button onClick={() => dispatch(inc(1))}>incremet</button>
      <button onClick={() => dispatch(dic())}>decremnt</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
};

export default Main;
