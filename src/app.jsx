import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div className="container">
      <div className="app">
        <h2>Currency Converter</h2>

        <div className="input1">
          <div className="input2">
            <label htmlFor="amount">Amount:</label>

            <input
              style={{ flex: 1 }}
              type="number"
              name=""
              id=""
              value={amount}
            />
          </div>

          <div className="inputs">
            <div>
              <label htmlFor="from">From:</label>
              <select name="" id="">
                <option value="">INR</option>
              </select>
            </div>

            <div>
              <label htmlFor="to">To:</label>
              <select name="" id="">
                <option value="">USD</option>
              </select>
            </div>
          </div>

          <button>Convert</button>
        </div>

        <div className="results">
          <p>25000 INR = 297.25 USD</p>
        </div>
      </div>
    </div>
  );
}
