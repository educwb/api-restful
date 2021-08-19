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

async function put(req, res) {
  const { id } = req.params

  const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
  
  /* uma das formas que alteram o produto
  // mas não permite retornar o produto já alterado
  const product = await ProductsModel.findOne({ _id: id })
  await product.updateOne(req.body)
  */ 

  res.send({
    message: 'success',
    product
  }) 
}

module.exports = {
  get,
  post,
  put
}