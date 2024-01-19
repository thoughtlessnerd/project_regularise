const { userRepo } = require("../repository");

class userService {
  constructor() {
    this.userRepository = new userRepo();
  }
  signUp = async (data) => {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  };
  signIn = async (data) => {
    try {
      const user = await this.userRepository.getUserByEmail(data.email);
      if (!user) {
        throw new Error("User not found");
      }
      const isMatched = await user.comparePassword(data.password);
      if (!isMatched) {
        throw new Error("Password not matched");
      }
      return user._id;
    } catch (error) {
      console.log("error in user service" + error);
      throw error;
    }
  };
}

module.exports = userService;
