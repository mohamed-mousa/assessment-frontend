import { useState, useRef, useEffect } from "react";

function CountDown({ time, styleType }) {
  const Ref = useRef(null);
  // The state for our timer
  const [timePart, setTimePart] = useState({});

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      let newTime =
        (days > 9 ? days : "0" + days) +
        ":" +
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
      getTimeParts(newTime);
    }
  };

  // update timer
  const clearTimer = (e) => {
    getTimeParts("00:00:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  // count down to this number after  x Seconds
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + time);
    return deadline;
  };

  // Split the time into parts
  function getTimeParts(timeStr) {
    const [days, hours, minutes, seconds] = timeStr.split(":");
    setTimePart({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <>
      {styleType == 1 ? (
        <div className="flex sm:gap-5 gap-4">
          {/* Days */}
          <div className="text-center flex-col flex items-center justify-center bg-white text-black w-[62px] rounded-full h-[62px]">
            <p className="font-bold">{timePart.days}</p>
            <h4 className="text-[11px] relative -top-1">Days</h4>
          </div>

          {/* Hours */}
          <div className="text-center flex-col flex items-center justify-center bg-white text-black w-[62px] rounded-full h-[62px]">
            <p className="font-bold">{timePart.hours}</p>
            <h4 className="text-[11px] relative -top-1">Hours</h4>
          </div>

          {/* Minutes */}
          <div className="text-center flex-col flex items-center justify-center bg-white text-black w-[62px] rounded-full h-[62px]">
            <p className="font-bold">{timePart.minutes}</p>
            <h4 className="text-[11px] relative -top-1">Minutes</h4>
          </div>

          {/* Seconds */}
          <div className="text-center flex-col flex items-center justify-center bg-white text-black w-[62px] rounded-full h-[62px]">
            <p className="font-bold">{timePart.seconds}</p>
            <h4 className="text-[11px] relative -top-1">Seconds</h4>
          </div>
        </div>
      ) : (
        <div className="flex sm:gap-5 gap-4">
          {/* Days */}
          <div className="text-start flex items-center sm:gap-4 gap-3">
            <div>
              <h4 className="text-xs">Days</h4>
              <p className="font-bold text-3xl">{timePart.days}</p>
            </div>
            <span className="font-bold text-2xl text-primary">:</span>
          </div>

          {/* Hours */}
          <div className="text-start flex items-center sm:gap-4 gap-3">
            <div>
              <h4 className="text-xs">Hours</h4>
              <p className="font-bold text-3xl">{timePart.hours}</p>
            </div>
            <span className="font-bold text-2xl text-primary">:</span>
          </div>

          {/* Minutes */}
          <div className="text-start flex items-center sm:gap-4 gap-3">
            <div>
              <h4 className="text-xs">Minutes</h4>
              <p className="font-bold text-3xl">{timePart.minutes}</p>
            </div>
            <span className="font-bold text-2xl text-primary">:</span>
          </div>

          {/* Seconds */}
          <div className="text-start flex items-center sm:gap-4 gap-3">
            <div>
              <h4 className="text-xs">Seconds</h4>
              <p className="font-bold text-3xl">{timePart.seconds}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CountDown;
