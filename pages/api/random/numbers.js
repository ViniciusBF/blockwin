import { getRandomInt } from '../../../utils/numbers';

const handler = async () => {
  let numbers = [];

  while (numbers.length < 6) {
    const number = getRandomInt(10, 99);

    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  numbers = numbers.sort((a, b) => (a - b));

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
