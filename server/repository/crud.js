class crudRepo {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const doc = await this.model.create(data);
      return doc;
    } catch (error) {
      console.log("error in crud repo" + error);
      throw error;
    }
  }
  async getAll() {
    try {
      const docs = await this.model.find({});
      return docs;
    } catch (error) {
      console.log("error in crud repo" + error);
      throw error;
    }
  }
  async getById(id) {
    try {
      const doc = await this.model.findById(id);
      return doc;
    } catch (error) {
      console.log("error in crud repo" + error);
      throw error;
    }
  }
  async destroy(id) {
    try {
      const doc = await this.model.findByIdAndDelete(id);
      return doc;
    } catch (error) {
      console.log("error in crud repo" + error);
      throw error;
    }
  }
  async update(id, data) {
    try {
      const res = await this.model.findByIdAndUpdate(id, data, { new: true });
      return res;
    } catch (error) {
      console.log("error in crud repo" + error);
      throw error;
    }
  }
}

module.exports = crudRepo;
