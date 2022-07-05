import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    techstack: { type: String, required: true},
    description: { type: String, required: true },
    live: { type: String, required: true},
    source: { type: String, required: false},
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;
