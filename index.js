// import express from 'express'
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<div style="color: red;">Hello world!</div>')
})

app.get('/new-route', (req, res) => {
  res.send('<div style="color: blue;">Am a new endpoint</div>')
})

app.get('/products', (req, res) => {
  res.json({ name: 'iPhone X', price: 999 })
})

app.listen(port, () => {
  console.log('Mi port ' + port)
})
