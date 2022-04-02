const productsService = require("./products.service");

async function list(req, res, next) { //<-- next for error handling
  const data = await productsService.list();
  res.json({ data });
}

function read(req, res) {
  const { product: data } = res.locals;
  res.json({ data });
}
/***** validation middleware *****/
async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}
module.exports = {
	read: [productExists, read],
  list,
};