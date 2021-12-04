import React from "react";

export function useLiveTimer(dropDate) {
  const [timerString, setTimerString] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = new Date(dropDate).getTime() - currentDate;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (distance <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [dropDate]);

  return timerString;
}
