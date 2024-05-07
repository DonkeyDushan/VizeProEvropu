import { useEffect, useState } from 'react';
import { TimeWrapper, Wrapper } from 'app/components/TimerSection';
import { RELEASE_TIME } from 'app/content/releaseTime';

export const TimerSection = () => {
  const [formattedDifference, setFormattedDifference] = useState('');
  const SECONDS_IN_DAY = 60 * 60 * 24;

  const padNumber = (num: number) => num.toString().padStart(2, '0');

  const format = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / SECONDS_IN_DAY);
    const hours = Math.floor((timeInSeconds - days * SECONDS_IN_DAY) / (60 * 60));
    const minutes = Math.floor((timeInSeconds - days * SECONDS_IN_DAY - hours * 60 * 60) / 60);
    const seconds = Math.floor(
      timeInSeconds - days * SECONDS_IN_DAY - hours * 60 * 60 - minutes * 60,
    );

    return `${padNumber(days)} d, ${padNumber(hours)} h, ${padNumber(minutes)} m, ${padNumber(seconds)} s`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = RELEASE_TIME - currentTime;
      setFormattedDifference(format(difference / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <h3>do odhalení Vize pro Evropu zbývá</h3>
      <TimeWrapper>{formattedDifference?.split(', ').map((unit) => <h2>{unit}</h2>)}</TimeWrapper>
    </Wrapper>
  );
};
