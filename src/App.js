import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const calcBmi = () => {
    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);
    let bmistatus = bmiStatus(bmi);
    setStatus(bmistatus);
  };

  const bmiStatus = (bmi) => {
    if (bmi < 18.5) return ` You are underweight`;
    else if (bmi >= 18.5 && bmi < 24.9) return ` Normal weight`;
    else if (bmi >= 25 && bmi < 29.9) return ` you are overweight`;
    else return "BRO HOW ARE U ALIVE ??";
  };
  return (
    <>
      <div className="mainContent">
        <h1>BMI CALCULATOR!</h1>
        <div className="box">
          <div className="inputSide">
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Input Height"
            />
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Input Weight"
            />
            <button onClick={calcBmi}>Calculate</button>
            <h2>
              Your BMI {bmiResult} <br /> {status}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
