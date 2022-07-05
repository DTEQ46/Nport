import nc from 'next-connect';
import Article from '../../models/Article';
import db from '../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const articles = await Article.find({});
  await db.disconnect();
  res.send(articles);
});

export default handler;
