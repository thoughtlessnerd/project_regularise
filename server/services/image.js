const { imageRepo } = require("../repository");

class imageService {
  constructor() {
    this.imageRepository = new imageRepo();
  }
  getProfileImage = async (id) => {
    try {
      const image = await this.imageRepository.getProfileImageByUserId(id);

      if (!image) {
        throw new Error("Image not found");
      }
      return image;
    } catch (error) {
      throw error;
    }
  };
  updateProfileImage = async (id, newData) => {
    try {
      const image = await this.imageRepository.updateProfileImage(id, newData);
      return image;
    } catch (error) {
      throw error;
    }
  };
  createProfileImage = async (id, img) => {
    try {
      const image = await this.imageRepository.createProfileImage(id, img);
      return image;
    } catch (error) {
      throw error;
    }
  };
  deleteProfileImage = async (id) => {
    try {
      const image = await this.imageRepository.deleteProfileImage(id);
      return image;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = imageService;
