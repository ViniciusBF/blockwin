import { Text } from '@mantine/core';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Countdown = ({ time }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  const handleEnd = () => {};

  useEffect(() => {
    let interval;

    const updateCountdown = () => {
      const now = Date.now();
      const deadline = new Date(time).getTime();
      const remaining = deadline - now;
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setRemainingTime({
        days: days >= 0 ? days : 0,
        hours: hours >= 0 ? hours : 0,
        minutes: minutes >= 0 ? minutes : 0,
        seconds: seconds >= 0 ? seconds : 0,
        done: days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0,
      });

      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        handleEnd();

        clearInterval(interval);
      }
    };

    interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    updateCountdown();

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
      { !remainingTime.done ? (
        <Text sx={(theme) => ({
          fontFamily: theme.fontFamilyMonospace,
        })}
        >
          <span>{`0${remainingTime.hours}`.slice(-2)}</span>
          <span>:</span>
          <span>{`0${remainingTime.minutes}`.slice(-2)}</span>
          <span>:</span>
          <span>{`0${remainingTime.seconds}`.slice(-2)}</span>
        </Text>
      ) : (
        <span>Timeout!</span>
      ) }
    </div>
  );
};

Countdown.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Countdown;
