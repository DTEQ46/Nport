// import nc from 'next-connect';
// import Project from '../../models/Project';
// import Article from '../../models/Article';

// import db from '../../utils/db';
// import data from '../../utils/data';

// const handler = nc();

// handler.get(async (req, res) => {
// //   return res.send({ message: 'already seeded' });
//   await db.connect();
//   await Project.deleteMany();
//   await Project.insertMany(data.projects);
//   await Article.deleteMany();
//   await Article.insertMany(data.articles);
//   await db.disconnect();
//   res.send({ message: 'seeded successfully' });
// });

// export default handler;
