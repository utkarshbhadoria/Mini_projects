import { useState } from "react";


function Counter() {
  const [counter, setCounter] = useState(0);

  const AddValue = () => {
    setCounter(counter + 1);
  };

  // const AddValuetest =() => {
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   setCounter(counter +1)
  //   //   in this case usestate sets data as a bunch since all setter are doing the same thing counter will be increased once
  // }

  const AddValuetest = () => {
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  }
    const RemoveValue = () => {
      setCounter(counter - 1);
    };

    return (
      <>
        <h1>Counter : {counter}</h1>
        <button onClick={AddValue}>Add Value </button>
        <br />

        <button onClick={RemoveValue}>Remove Value </button>
      </>
    );
  }


export default Counter;
