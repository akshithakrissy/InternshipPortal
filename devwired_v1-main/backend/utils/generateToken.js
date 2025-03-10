import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "wsedrftgyhujikijuhyg", { expiresIn: "30d" });
};

export default generateToken;
