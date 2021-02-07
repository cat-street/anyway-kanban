const formatTime = (timer: number): string => {
  let hours = Math.floor(timer / 3600).toString();
  let minutes = Math.floor((timer % 3600) / 60).toString();
  let seconds = (timer % 60).toString();

  const addZero = (val: string) => {
    if (val.length === 1) {
      return `0${val}`;
    }
    return val;
  };

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  return `${hours}:${minutes}:${seconds}`;
};

export default formatTime;
