import React, { useState } from "react";
import TodoList from "../components/TodoList";
import Timer from "../components/Timer";

const Pomodoro = () => {
  const [currentTask, setCurrentTask] = useState(null);

  const handleUpdateTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="ui equal height stackable grid">
      <div className="eight wide column" style={{ background: "yellow" }}>
        <Timer currentTask={currentTask} />
      </div>
      <div className="eight wide column">
        <TodoList updateTask={handleUpdateTask} />
      </div>
    </div>
  );
};

export default Pomodoro;
