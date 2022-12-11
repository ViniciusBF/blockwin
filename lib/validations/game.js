import { database, firestore } from '../firebaseAdmin';

export const validateHash = async (txHash) => {
  const hashesRef = firestore.collection('hashes');

  const hash = await hashesRef.where('hash', '==', txHash).get();

  if (!hash.empty) {
    throw new Error('');
  }

  try {
    const {
      code,
      data: {
        transaction: {
          contract: [
            {
              parameter: {
                toAddress,
                amount,
              },
            },
          ],
        },
      },
    } = await fetch(`https://api.testnet.klever.finance/v1.0/transaction/${txHash}`).then((response) => (
      response.json()
    ));

    if (code === 'successful' && toAddress === 'klv1eus3npurhgj3qhqa88m9af3zed9t2uja94p5sjvkmj48y4tj2g0skgya5z' && amount === 1000 * 10 ** 6) {
      throw new Error('');
    }
  } catch (_err) {
    throw new Error('');
  }

  return true;
};

export const validateGame = async (gameId) => {
  const game = await database.ref(`games/${gameId}`).once('value');

  if (game && !game.val().ended) {
    return true;
  }

  throw new Error('');
};

export default {
  validateHash,
  validateGame,
};
