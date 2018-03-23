var express = require('express'),
  router = express.Router()

router.use('/cash-machine', require('./cash-machine'))

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router