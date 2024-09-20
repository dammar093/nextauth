import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Pleae provide username"],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, "Pleae provide email"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Pleae provide password"]
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verfyTokenExpeiry: Date
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
