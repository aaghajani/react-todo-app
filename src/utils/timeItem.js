import React, { useEffect } from "react";

const updateClock = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros if the value is less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;
  return timeString;
};

const TimeItem = () => {
  const [time, setTime] = React.useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(updateClock());
    }, 1000);
  }, []);
  return time;
};

export default TimeItem;
