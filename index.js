// import express from 'express'
const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<div style="color: red;">Hello world!</div>')
})

app.get('/new-route', (req, res) => {
  res.send('<div style="color: blue;">Am a new endpoint</div>')
})

routerApi(app)

app.listen(port, () => {
  console.log('Mi port ' + port)
})
// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { productId, categoryId } = req.params
//   res.json({ categoryId, productId })
// })

// app.get('/:id', (req, res) => {
//   const { id } = req.params
//   res.json({
//     id,
//     name: 'iPhone X',
//     price: 999,
//   })
// })

// app.post('/product', (req, res) => {
//   const body = req.body
//   console.log(body)
//   res.json({
//     message: 'created',
//     data: body,
//   })
// })

// app.patch('/:id', (req, res) => {
//   const { id } = req.params
//   const body = req.body
//   res.json({
//     message: 'Update',
//     data: body,
//     id,
//   })
// })

// app.delete('/:id', (req, res) => {
//   const { id } = req.params
//   res.json({
//     message: 'Delete',
//     id,
//   })
// })
