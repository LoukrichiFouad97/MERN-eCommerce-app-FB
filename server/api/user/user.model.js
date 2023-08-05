import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true, minlength: 6, select: false },
    isAdmin: { type: "boolean", required: true, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// encrypt password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  let salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
