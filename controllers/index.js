var express = require('express'),
  router = express.Router()

var cashMachineController = require('./cash-machine')

router.post('/api/cash-machine', cashMachineController.post)

router.post('/', cashMachineController.viewPost)

router.get('/', function (req, res) {
  res.render('index')
})


module.exports = router