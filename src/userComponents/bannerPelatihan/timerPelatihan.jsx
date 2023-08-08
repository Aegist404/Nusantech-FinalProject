import React from 'react';
import Countdown from 'react-countdown';

const TimerPelatihan = () => {
  const endDate = Date.now() + 240000;

  return (
    <div className="w-1 flex items-center justify-center mr-80 mb-16">
      <Countdown
        date={endDate}
        renderer={({ minutes, seconds }) => {
          // Tambahkan "0" di depan angka menit jika kurang dari 10
          const formattedMinutes = String(minutes).padStart(2, '0');
          // Tambahkan "0" di depan angka detik jika kurang dari 10
          const formattedSeconds = String(seconds).padStart(2, '0');

          return (
            <div className="text-4xl font-bold text-center">
              {formattedMinutes}:{formattedSeconds}
            </div>
          );
        }}
      />
    </div>
  );
};

export default TimerPelatihan;
