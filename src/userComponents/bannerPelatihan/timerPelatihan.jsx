import React from 'react';
import Countdown from 'react-countdown';

const TimerPelatihan = () => {
  const endDate = Date.now() + 240000;

  return (
    <div className="w-1 flex items-center justify-center mr-80">
      <Countdown
        date={endDate}
        renderer={({ hours, minutes, seconds }) => (
          <div className="text-4xl font-bold text-center">
            {hours}:{minutes}:{seconds}
          </div>
        )}
      />
    </div>
  );
};

export default TimerPelatihan;
