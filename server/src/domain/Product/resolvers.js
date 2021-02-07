const Product = require('../Product/model');

// Queries
const queries = {};
queries.getProducts = async (_, args, context) => {
  return await Product.find({});
};

queries.getProduct = async (_, args, context) => {
  const product = await Product.findById(args.id);
  if(!product) {
    throw new Error("Product not found");
  }
  return product;
};

// Mutations
const mutations = {};
mutations.createProduct = async (_, args, context) => {
  const product = new Product(args.input);
  return await product.save();
};

mutations.updateProduct = async (_, args, context) => {
  let product = await Product.findById(args.id);
  if(!product) {
    throw new Error("Product not found");
  }
  product = await Product.findOneAndUpdate({ _id:args.id }, args.input, { new: true });
  return product;
};

mutations.deleteProduct =  async (_, args, context) => {
  let product = await Product.findById(args.id);
  if(!product) {
    throw new Error("Product not found");
  }
  await Product.findOneAndDelete({ _id: args.id });
  return args.id;
};

module.exports = { queries, mutations };
