import { randomBytes, randomInt } from 'crypto';
import { database } from '../../../../lib/firebaseAdmin';

const handler = async (req, res) => {
  const { password } = req.query;

  if (password !== process.env.SERVER_SECRET) {
    res.status(401).send();

    return;
  }

  // Ver o jogo atual

  const currentGame = await database.ref('currentGame').once('value');

  const currentGameId = currentGame.val();

  // Sortear números

  const numbers = [];

  while (numbers.length < 3) {
    const number = randomInt(1, 20 + 1);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  numbers.sort((a, b) => (a - b));

  // Ver quem escolheu esses números

  const winnersData = await database
    .ref(`games/${currentGameId}/tickets`)
    .orderByChild('numbers')
    .equalTo(numbers.join('-'))
    .once('value');

  const winners = winnersData.val();

  // Salvar os tickets vencedores

  if (winners) {
    // Ver a quantidade de dinheiro acumulado

    const poolData = await database.ref('pool').once('value');

    const pool = poolData.val();

    await database.ref(`games/${currentGameId}/winners`).set(
      Object.entries(winners).map(([ticketId, { userId, avatar }]) => ({
        award: Number(pool / Object.keys(winners).length).toFixed(2),
        ticketId,
        userId,
        avatar,
      })),
    );

    await database.ref('pool').set(0);
  }

  // Encerrar o jogo atual

  await database.ref(`games/${currentGameId}/ended`).set(true);

  // Salvar os números sorteados

  await database.ref(`games/${currentGameId}/result`).set(numbers.join('-'));

  // Criar um novo jogo

  const newGameId = randomBytes(8).toString('hex');

  const date = new Date();

  date.setMilliseconds(0);

  date.setSeconds(0);

  date.setMinutes(date.getMinutes() + 15);

  await database.ref(`games/${newGameId}`).set({
    end: date.toISOString(),
    ended: false,
    result: '',
    ticketQty: 0,
    tickets: {},
    winners: [],
  });

  // Marcar novo jogo como atual

  await database.ref('currentGame').set(newGameId);

  res.status(200).json({
    newGameId,
  });
};

export default handler;
