import nc from 'next-connect';
import Project from '../../models/Project';
import db from '../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const projects = await Project.find({});
  await db.disconnect();
  res.send(projects);
});

export default handler;
