import { ServerValue } from 'firebase-admin/database';
import { z } from 'zod';
import { database, firestore } from '../../../lib/firebaseAdmin';
import { validateAuth } from '../../../lib/validations/auth';
import { validateGame, validateHash } from '../../../lib/validations/game';

const gameSchema = z.object({
  token: z.string(),
  gameId: z.string(),
  txHash: z.string(),
  numbers: z
    .number()
    .min(1)
    .max(60)
    .array()
    .length(6),
});

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(404).send('Not found');
  }

  try {
    const { body } = req;

    const {
      token,
      gameId,
      txHash,
      numbers,
    } = gameSchema.parse(body);

    const data = await validateAuth(token);

    console.log({
      body,
      parsedBody: {
        token,
        gameId,
        txHash,
        numbers,
      },
      data,
    });

    await validateGame(gameId);

    await validateHash(txHash);

    database.ref(`games/${gameId}/tickets`).push().set({
      timestamp: ServerValue.TIMESTAMP,
      userId: data.uid,
      avatar: data.picture,
      numbers: numbers.sort((a, b) => (a - b)).join('-'),
    });

    database.ref(`games/${gameId}/ticketQty`).set(ServerValue.increment(1));

    database.ref('pool').set(ServerValue.increment(1000 * 0.8));

    await firestore.collection('hashes').add({
      hash: txHash,
    });

    return res.status(200).json({});
  } catch (err) {
    return res.status(400).json({});
  }
};

export default handler;
