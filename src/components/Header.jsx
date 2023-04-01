import React, { useState, useEffect } from 'react';

const Header= () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        // Update the time every second
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);
        // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
}, []);

const localTime = time.toLocaleTimeString();
  return (
    <div className='Header'>
        <h1 className='header'>Techverse Dashboard</h1>
        <span className='time'>Calgary, AB (GMT-6) {localTime}</span>
    </div>
  );
}

export default Header;
