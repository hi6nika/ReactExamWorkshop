const User = require("../mongoose/models/user");
const bcrypt = require("bcrypt");

exports.register = async (data) => {
  const user = await User.create(data);

  return user;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password!");

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) throw new Error("Invalid email or password!");

  return user;
};
