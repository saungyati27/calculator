import React, { useReducer, useState } from "react";
import Output from "./components/output";
import Input from "./components/input";
import Button from "./components/button";
import { initialState, reducer } from "./components/reducer";

const App = () => {
  // const [output, setOutput] = useState(0);
  // const [input, setInput] = useState(0);


  const [state,dispatch]= useReducer(reducer,initialState)

  const handleCalculation = (type,value) => {
      dispatch({type,payload: value})
  };
  return (
    <div>
      <div className=" w-full h-screen justify-center items-center flex flex-col">
        <Output output={state.output} />
        <Input input={state.input} />
        <Button handleCauculation={handleCalculation} />
      </div>
    </div>
  );
};

export default App;
