var express = require('express')

exports.withdraw = function (amount) {
  let numberOfBillsArray = []
  let billArray = [100, 50, 20, 10]

  if (amount < 0) {
    return 'InvalidArgumentException'
  }

  if (amount === null) {
    return []
  }

  if (amount % billArray[3] !== 0) {
    return 'NoteUnavailableException'
  }

  billArray.map(element => {
    if (amount % element === 0) {
      numberOfBillsArray.push(amount / element)
      amount = 0
      return
    }

    if (amount % element !== 0) {
      let remainder = amount % element

      numberOfBillsArray.push((amount - remainder) / element)
      amount = remainder
    }
  })

  return numberOfBillsArray
}