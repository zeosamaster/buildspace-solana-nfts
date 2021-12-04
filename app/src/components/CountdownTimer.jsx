import React from "react";
import { useLiveTimer } from "../hooks/useLiveTimer";
import "./CountdownTimer.css";

const CountdownTimer = ({ dropDate }) => {
  const timer = useLiveTimer(dropDate);

  return (
    <div className="timer-container">
      <p className="timer-header">Candy Drop Starting In</p>
      {timer && <p className="timer-value">{`⏰ ${timer}`}</p>}
    </div>
  );
};

export default CountdownTimer;
