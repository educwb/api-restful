const ProductsModel = require('../models/products')

async function get(req, res) {
  const { id } = req.params

  // let obj = {};

  // if (id) {
  //   obj._id = id
  // }
  const obj = id ? { _id: id } : null

  const products = await ProductsModel.find(obj)

  res.send(products)

}

async function post(req, res) {
  const {
    name,
    brand,
    price,
  } = req.body

  const product = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()

  res.send({
    message: 'success'
  }) // resposta para api que deu tudo certo
}

module.exports = {
  get,
  post
}