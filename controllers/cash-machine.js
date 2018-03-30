var express = require('express'),
  CashMachine = require('../models/cash-machine')

exports.post = function (req, res) {
  var amount = req.body.withdraw
  var result = CashMachine.withdraw(amount)
  res.send({
    res: result
  })
}

exports.viewPost = function (req, res) {
  var amount = req.body.withdraw
  if (!amount) {
    amount = null
  }
  var result = CashMachine.withdraw(amount)
  res.render('index', {
    result: result
  })
}