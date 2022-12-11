import { off, onValue, ref } from 'firebase/database';
import { database } from './firebase';

let gameUpdateListener;

export const getGameData = async (currentGameId, callback) => {
  if (gameUpdateListener) {
    off(gameUpdateListener);
  }

  gameUpdateListener = onValue(ref(database, `games/${currentGameId}`), (snapshot) => {
    callback({
      currentGameId,
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
