const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const { limit, offset } = req.query
  if (limit) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send('No hay parametros')
  }
})

module.exports = router
