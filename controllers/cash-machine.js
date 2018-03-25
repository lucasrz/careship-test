var express = require('express'),
  CashMachine = require('../models/cash-machine')

exports.post = function (req, res) {
  var amount = req.body.withdraw
  var result = CashMachine.withdraw(amount)
  res.send({
    res: result
  })
}