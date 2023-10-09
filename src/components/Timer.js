import React, { useState } from "react";
import Ticking from "./Ticking";

const initialState = {
  start: false,
  time: 1500,
  percentage: 0,
};

let interval;

const Timer = ({ currentTask }) => {
  const [timerState, setTimerState] = useState(initialState);
  const { start, time, percentage } = timerState;

  const startIconClass = !start ? "play icon" : "pause icon";
  const left = `${percentage}%`;

  const play = () => {
    if (start) return;

    setTimerState((prev) => ({ ...prev, start: true }));

    interval = setInterval(() => {
      if (time > 0) {
        setTimerState((prev) => ({
          ...prev,
          time: prev.time - 1,
          percentage: prev.percentage + 0.06,
        }));
      } else {
        stop();
        clearInterval(interval);
      }
    }, 1000);
  };

  const stop = () => {
    const audioEl = document.getElementById("audio");
    audioEl && audioEl.play();

    setTimerState(initialState);
    clearInterval(interval);
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
