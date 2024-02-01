const express = require('express')
const routerApi = require('./routes')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whitelist = ['http://127.0.0.1:5500', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  },
}
app.use(cors(options))

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
