import KleverWeb from '@klever/kleverweb';

const testNetProvider = {
  node: 'https://node.testnet.klever.finance',
  api: 'https://api.testnet.klever.finance',
};

export const connectWithWindow = async () => {
  if (!window.kleverWeb) {
    return 'KleverWeb is not installed';
  }

  await window.kleverWeb.setProvider(testNetProvider);

  const address = await window.kleverWeb.initialize();
  return address;
};

export const connectWithKleverWeb = async () => {
  if (!window.kleverWeb) {
    return 'KleverWeb is not installed';
  }
  await window.kleverWeb.setProvider(testNetProvider);

  const address = await window.kleverWeb.initialize();
  const klever = new KleverWeb(address);

  window.kleverWeb = klever;

  return klever.getWalletAddress();
};

export const connectWithSdk = async () => {
  if (!window.kleverWeb) {
    return 'KleverWeb is not installed';
  }

  window.kleverWeb.setProvider(testNetProvider);
  await window.kleverWeb.initialize();

  return window.kleverWeb.getWalletAddress();
};

// Retorna o saldo da pessoa
export const balance = async () => {
  if (!window.kleverWeb) {
    console.log('KleverWeb is not installed');

    return 0;
  }

  try {
    const balanceAmount = await window.kleverWeb.getBalance();

    return balanceAmount;
  } catch (e) {
    console.log(e);
  }

  return 0;
};

// Retorna o endereço da carteira
export const address = () => {
  if (!window.kleverWeb) {
    console.log('KleverWeb is not installed');
    return '';
  }

  return window.kleverWeb.address;
};

// Envia dinheiro, recebe o endereço de para quem o valor será enviado e a quantidade
export const send = async (to, amount) => {
  if (!window.kleverWeb) {
    console.log('KleverWeb is not installed');
    return null;
  }

  const tx = await window.kleverWeb.buildTransaction([
    {
      type: 0,
      payload: {
        receiver: to,
        amount,
        asset: 'KLV',
      },
    },
  ]);

  // FALTA ASSINATURA NO TX, NÃO SEI O QUE FAZER
  // o dinheiro sai da conta perdi 2k, F

  await window.kleverWeb.signTransaction(tx);
  const res = await window.kleverWeb.broadcastTransactions([tx]);
  return res;
};

const klever = {
  connectWithWindow,
  connectWithKleverWeb,
  connectWithSdk,
  balance,
  address,
  send,
};

export default klever;
