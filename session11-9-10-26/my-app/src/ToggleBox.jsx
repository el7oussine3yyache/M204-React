import { useState } from 'react';
import LiveClock from './LiveClock.jsx'

export default function ToggleBox() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide component" : "Show component"}
      </button>

      {/* When isVisible is true, LiveClock is created and mounted */}
      {isVisible && <LiveClock />}
    </div>
  );
}
