import {
  get,
  limitToLast,
  off,
  onValue,
  orderByValue,
  query,
  ref,
} from 'firebase/database';
import { database } from './firebase';

let gameUpdateListener;

export const getGameData = async (currentGameId, callback) => {
  if (gameUpdateListener) {
    try {
      off(gameUpdateListener);
    } catch (err) {
      console.log(err);
    }
  }

  gameUpdateListener = onValue(ref(database, `games/${currentGameId}`), async (snapshot) => {
    callback({
      gameId: currentGameId,
      pool: (await get(ref(database, 'pool'))).val(),
      players: (await get(
        query(
          ref(
            database,
            `games/${currentGameId}/tickets`,
          ),
          orderByValue('timestamp'),
          limitToLast(5),
        ),
      )).val(),
      ...snapshot.val(),
    });
  });
};

export const getCurrentGame = async (callback) => {
  onValue(ref(database, 'currentGame'), async (snapshot) => {
    await getGameData(snapshot.val(), callback);
  });
};

export default {};
