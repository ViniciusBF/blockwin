import { getRandomInt } from '../../../utils/numbers';

const handler = async () => {
  const numbers = [];

  while (numbers.length < 3) {
    const number = getRandomInt(1, 20);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  numbers.sort((a, b) => (a - b));

  return new Response(
    JSON.stringify([
      ...numbers,
    ]),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};

export const config = {
  runtime: 'experimental-edge',
};

export default handler;
