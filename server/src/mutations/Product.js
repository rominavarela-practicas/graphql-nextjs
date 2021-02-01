const Product = require('../models/Product');

module.exports = {
  createProduct: async (_, args, context) => {
    const product = new Product(args.input);
    return await product.save();
  },
};
