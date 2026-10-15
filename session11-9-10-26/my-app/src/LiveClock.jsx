import { useState, useEffect } from 'react';
function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 1. Start a timer that updates the time every second
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // 2. Cleanup function: runs automatically when the component is hidden/unmounted
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty array means "run this setup once when the component appears"

  return <p>The current time is: {time}</p>;
}

export default LiveClock;
