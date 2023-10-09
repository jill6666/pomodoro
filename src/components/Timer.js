import React, { useState, useEffect } from "react";
import Ticking from "./Ticking";

const initialState = {
  start: false,
  time: 1500,
  percentage: 0,
};

let intervalId;
let timeId;

const Timer = ({ currentTask }) => {
  const [timerState, setTimerState] = useState(initialState);
  const { start, time, percentage } = timerState;

  const startIconClass = !start ? "play icon" : "pause icon";
  const left = `${percentage * 100}%`;

  useEffect(() => {
    reset();
  }, [currentTask]);

  useEffect(() => {
    if (time <= 0) timeId = setTimeout(() => stop(), 500);
    return () => clearTimeout(timeId);
  }, [time]);

  useEffect(() => {
    if (start)
      intervalId = setInterval(() => {
        setTimerState((prev) => ({
          ...prev,
          time: prev.time - 1,
          percentage: prev.percentage + 1 / (initialState.time + 1),
        }));
      }, 1000);

    return () => clearInterval(intervalId);
  }, [start]);

  const play = () => setTimerState((prev) => ({ ...prev, start: true }));
  const reset = () => setTimerState(initialState);
  const stop = () => {
    const audioEl = document.getElementById("audio");
    audioEl && audioEl.play();

    reset();
  };

  const actionButtons = [
    { icon: startIconClass, onClick: play },
    { icon: "stop icon", onClick: stop },
  ];

  return (
    <div className="ui center middle aligned grid">
      <div className="sixteen center aligned wide column">
        <Ticking time={time} />

        <div style={{ opacity: currentTask ? 1 : ".3" }}>
          <h1 className="header">{currentTask || "What to do next?"}</h1>

          {actionButtons.map((item) => (
            <button
              className={"ui massive icon button"}
              style={{ background: "none", color: "black" }}
              onClick={item.onClick}
              disabled={!currentTask}
            >
              <i className={item.icon}></i>
            </button>
          ))}
        </div>

        <div className="ui divider"></div>
        <h3>
          {start && (
            <>
              You just started on the road. <br />
              Keep going!
            </>
          )}
          {!start && (
            <>
              Add something from Todo list. <br />
              Just start the task!
            </>
          )}
        </h3>

        <div className="progress-bar-wrapper">
          <i className="truck icon" style={{ left }}></i>
          <div className="progress-bar"></div>
          <i className="flag checkered icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Timer;
