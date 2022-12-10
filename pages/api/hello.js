import { auth } from '../../lib/firebase';

const handler = async (req, res) => {
  const { token } = req.cookies;

  const data = await auth
    .verifyIdToken(token);

  console.log({
    token,
    data,
  });

  res.status(200).json({ name: 'John Doe' });
};

export default handler;
