import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const adminSchema = new mongoose.Schema({
    duname: String,
    dpwd: String,
    available: { type: Boolean, default: true }
});

export default mongoose.model('Admin', adminSchema);