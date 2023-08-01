import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: { type: "string", required: true, unique: true },
    passwords: { type: "string", required: true },
    isadmin: { type: "boolean", required: true, default: false },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

userSchema.methods.matchPassword = async function (enteredPassword) {
  await bcrypt.compare(enteredPassword, this.password);
};

export default User;
