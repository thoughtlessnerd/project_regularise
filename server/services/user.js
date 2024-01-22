const { userRepo } = require("../repository");

class userService {
  constructor() {
    this.userRepository = new userRepo();
  }
  getUser = async (id) => {
    try {
      const user = await this.userRepository.getUserById(id);

      if (!user) {
        throw new Error("User not found");
      }
      const { password, ...rest } = user._doc; // can't send the pass to the client ;)
      return rest;
    } catch (error) {
      throw error;
    }
  };
  signUp = async (data) => {
    try {
      const user = await this.userRepository.create(data);
      const token = await user.generateJWT();

      delete user._doc.password;

      return { ...user._doc, token };
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
      delete user._doc.password;
      const token = await user.generateJWT();
      return { ...user._doc, token };
    } catch (error) {
      console.log("error in user service" + error);
      throw error;
    }
  };
}

module.exports = userService;
