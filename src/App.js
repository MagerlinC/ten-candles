import React, { useState, useEffect } from "react";
import "./App.scss";
import Candle from "./assets/candle.gif";

function App() {
  const [candles, setCandles] = useState([
    { id: 0, status: "on" },
    { id: 1, status: "on" },
    { id: 2, status: "on" },
    { id: 3, status: "on" },
    { id: 4, status: "on" },
    { id: 5, status: "on" },
    { id: 6, status: "on" },
    { id: 7, status: "on" },
    { id: 8, status: "on" },
    { id: 9, status: "on" }
  ]);

  const extinguishCandle = candleIx => {
    const newCandles = [...candles];
    newCandles[candleIx].status = "fading";
    setCandles(newCandles);
  };

  const isLastStand =
    candles.reduce(
      (acc, candle) => (candle.status === "on" ? 1 : 0) + acc,
      0
    ) === 1;
  return (
    <div className="App">
      <header className="App-header">Ten Candles</header>
      <div className={"site-body"}>
        <ul class="circle-container">
          {candles.map((candle, idx) => (
            <div
              tabIndex="0"
              onClick={() => extinguishCandle(idx)}
              className={"candle-wrapper " + candle.status}
            >
              {candle.status === "off" ? null : (
                <img
                  className={
                    "candle-img" +
                    (candle.status === "fading" ? " animated fadeOut" : "") +
                    " " +
                    idx
                  }
                  alt={"candle"}
                  src={Candle}
                />
              )}
            </div>
          ))}
        </ul>
        {isLastStand && (
          <div className={"last-stand-txt animated fadeIn"}>LAST STAND</div>
        )}
      </div>
    </div>
  );
}

export default App;
