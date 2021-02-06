const Product = require('../models/Product');

module.exports = {
  getProducts: async (_, args, context) => {
    return await Product.find({});
  },
  getProduct: async (_, args, context) => {
    const product = await Product.findById(args.id);
    if(!product) {
      throw new Error("Product not found");
    }
    return product;
  },
};
