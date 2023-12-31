const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

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

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port ' + port)
})
