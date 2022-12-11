import { auth } from '../../lib/firebaseAdmin';

const handler = async (req, res) => {
  const { token } = req.cookies;

  const data = await auth
    .verifyIdToken(token);

  res.status(200).json({
    data,
  });
};

export default handler;
