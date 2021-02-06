const Product = require('../models/Product');

module.exports = {
  createProduct: async (_, args, context) => {
    const product = new Product(args.input);
    return await product.save();
  },
  updateProduct: async (_, args, context) => {
    let product = await Product.findById(args.id);
    if(!product) {
      throw new Error("Product not found");
    }
    product = await Product.findOneAndUpdate({ _id:args.id }, args.input, { new: true });
    return product;
  },
  deleteProduct: async (_, args, context) => {
    let product = await Product.findById(args.id);
    if(!product) {
      throw new Error("Product not found");
    }
    await Product.findOneAndDelete({ _id: args.id });
    return args.id;
  }
};
