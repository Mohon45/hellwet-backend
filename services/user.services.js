const User = require("../models/User");

exports.signUpService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

exports.signInService = async (email) => {
  const user = await User.findOne({ email: email });
  return user;
};

exports.getAllUsersService = async () => {
  const users = await User.find({});
  return users;
};

exports.getSingleUserByIdService = async (userId) => {
  const user = await User.findOne({ _id: userId });
  return user;
};
