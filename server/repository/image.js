const Image = require("../models/image");
const crudRepo = require("../repository/crud");

class imageRepo extends crudRepo {
  constructor() {
    super(Image);
  }

  async getProfileImageByUserId(id) {
    try {
      const doc = await this.model.findOne({ userID: id });

      if (!doc) {
        throw new Error("Image not found");
      }

      return doc.profile;
    } catch (error) {
      console.log("error in image repo" + error);
      throw error;
    }
  }

  async updateProfileImage(id, newData) {
    try {
      const doc = await this.model.findOneAndUpdate(
        { userID: id },
        { profile: newData },
        { new: true }
      );
      return doc;
    } catch (error) {
      console.log("error in image repo" + error);
      throw error;
    }
  }

  async createProfileImage(id, img) {
    try {
      let doc = await this.model.findOneAndUpdate(
        { userID: id },
        { $set: { profile: img } },
        { new: true, upsert: true }
      );

      return doc;
    } catch (error) {
      console.log("error in image repo" + error);
      throw error;
    }
  }

  async deleteProfileImage(id) {
    try {
      const doc = await this.model.findOneAndDelete({ userID: id });
      return doc;
    } catch (error) {
      console.log("error in image repo" + error);
      throw error;
    }
  }
}

module.exports = imageRepo;
