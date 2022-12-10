const removeDuplicates = (value) => (
  [...new Set(String(value).split(' '))].join(' ')
);

const getRandomInt = (min, max) => {
  const randomBuffer = new Uint32Array(1);

  crypto.getRandomValues(randomBuffer);

  const randomNumber = randomBuffer[0] / (0xffffffff + 1);

  return Math.floor(randomNumber * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
};

export default removeDuplicates;

export {
  getRandomInt,
};
