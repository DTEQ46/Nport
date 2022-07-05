import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    status: { type: String, required: true },
    date: { type: String, required: true},
    title: { type: String, required: true },
    readtime: { type: String, required: true},
    live: { type: String, required: true},
  }
);

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);
export default Article;
