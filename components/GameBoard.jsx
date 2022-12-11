import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import styles from '../styles/gameboard.module.css';

const renderer = ({
  minutes, seconds, completed,
}) => {
  if (completed) {
    return (<span>Timeout!</span>);
  }
  return (
    <span>
      {minutes}
      :
      {seconds}
    </span>
  );
};

const GameBoard = () => {
  const [jackpot, setJackpot] = useState(0);
  const [round, setRound] = useState(0);
  const [timer, setTimer] = useState(60000 * 15);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch('url...');
  //     setJackpot(data.jackpot);
  //     setRound(data.numeroMaluco);
  //     setTimer(data.numeroMalucoTimer);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div>
          <p>
            Round:
            {' '}
            {round}
          </p>
          <p className={styles.jackpot}>
            KLV
            {' '}
            {jackpot}
          </p>
          <div>players</div>
        </div>
        <div className={styles.timer}>
          <Countdown date={Date.now() + timer} renderer={renderer} />
        </div>
      </div>
      <div>div do joão</div>
    </div>
  );
};

export default GameBoard;
