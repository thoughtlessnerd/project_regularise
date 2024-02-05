const { imageService } = require("../services");

class imageController {
  constructor() {
    this.imageService = new imageService();
  }
  uploadProfileImage = async (req, res) => {
    try {
      const image = req.body.image;
      if (!image) {
        return res.status(400).json({ message: "Please upload a file" });
      }

      await this.imageService.createProfileImage(req.user, image);

      return res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  updateProfileImage = async (req, res) => {
    try {
      const image = req.body.image;
      if (!image) {
        return res.status(400).json({ message: "Please upload a file" });
      }

      await this.imageService.updateProfileImage(req.user, image);

      return res.status(200).json({ message: "File uploaded successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getProfileImage = async (req, res) => {
    try {
      const image = await this.imageService.getProfileImage(req.user);

      if (!image) {
        return res.status(400).json({ message: "Image not found" });
      }

      return res
        .status(200)
        .json({ message: "success", success: true, data: image });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteProfileImage = async (req, res) => {
    try {
      await this.imageService.deleteProfileImage(req.user);

      return res.status(200).json({ message: "Image deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new imageController();
