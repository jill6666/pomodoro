import React from "react";

const Ticking = ({ time = 25 }) => {
  const convertTime = (timestamp) => {
    const minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - minutes * 60;

    if (seconds < 10) seconds += "0";

    timestamp = minutes + ":" + seconds;
    return timestamp;
  };

  const convertedTime = convertTime(time) || "-";

  return (
    <div className="ui huge header center aligned" style={{ fontSize: "6rem" }}>
      {convertedTime}
    </div>
  );
};

export default Ticking;
