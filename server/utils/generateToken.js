import jwt from "jsonwebtoken";

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

export default generateToken;
