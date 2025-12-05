    import { useEffect, useState } from "react";
    import Products from "./screens/product";
export default function DemoApp() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState<number | string>(0);
  //const [PLUS, setPLUS] = useState(0);

  // useEffect(() => {
  //   console.log("Incrementing And Decrementing");
  //   function operation() {
  //     for (let i = 1; i <=10; i++) {
  //       if(i<=10){
  //         setPLUS(PLUS + i);
  //         console.log(PLUS);
  //       }
  //       for (let i = 10; i <=1; i--) {
  //         if(i<=10){
  //           setPLUS(PLUS - i);
  //           console.log(PLUS);
  //         }
  //       }  
  //     }
  //   }
  //   operation();    
  // },[]) 
  function add() {
    setResult(num1 + num2);
  }
  function sub() {
    setResult(num1 - num2);
  }
  function mul() {
    setResult(num1 * num2);
  }
  function div() {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult("Cannot divide by zero");
    }
  }
  return (
    <div>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <br />
      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={div}>Divide</button>
      <h2>Result: {result}</h2>
      {/* <h2>PLUS Value: {PLUS}</h2> */}
      <div>
      <h2>My React App</h2>

      {/* Use your Products component */}
      <Products />
    </div>

    </div>
  );
}


