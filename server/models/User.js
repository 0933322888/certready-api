import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, minlength: 6 }, // optional when signing in with Google
  googleId: { type: String, sparse: true, unique: true },
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  stripeCustomerId: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Hash password before save (only when password is set)
userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password (returns false if user has no password, e.g. Google-only)
userSchema.methods.matchPassword = async function(entered) {
  if (!this.password) return false;
  return await bcrypt.compare(entered, this.password);
};

export default mongoose.model('User', userSchema);
