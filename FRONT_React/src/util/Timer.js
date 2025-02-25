import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setTimeLeft(180);
    setIsRunning(true);
  };
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {isRunning && (
        <div
          style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}
        >
          남은 시간: {formatTime(timeLeft)}
        </div>
      )}
      {timeLeft === 0 && (
        <div style={{ color: "red", marginTop: "10px" }}>
          인증 시간이 만료되었습니다. 다시 요청해주세요.
        </div>
      )}
    </div>
  );
};
export default Timer;
