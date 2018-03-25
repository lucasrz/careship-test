const request = require('request');
const server = require('../../app');
var expect = require('expect')
const endpoint = 'http://localhost:3000/api/cash-machine';

describe('Cash Machine', function () {

  describe('When the user wants to withdraw 30', () => {
    let amount = 30
    it('should return 0,0,1,1', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 0, 1, 1])
        done();
      })
    })
  })


  describe('When the user wants to withdraw 80', () => {
    let amount = 80
    it('should return 0,1,1,1', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 1, 1, 1])
        done();
      })
    })
  })

  describe('When the user wants to withdraw 90', () => {
    let amount = 90
    it('should return the number of bills in the response 0,1,2,0', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 1, 2, 0])
        done();
      })
    })
  })

  describe('When the user wants to withdraw NULL', () => {
    let amount = null
    it('should return empty set', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([])
        done();
      })
    })
  })

  describe('When the user wants to withdraw a negative value', () => {
    let amount = -100
    it('should return InvalidArgumentException', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual('InvalidArgumentException')
        done();
      })
    })
  })

  describe('When the user wants to withdraw 195', () => {
    let amount = 195
    it('should return NoteUnavailableException', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual('NoteUnavailableException')
        done();
      })
    })
  })

  describe('When the user wants to withdraw 0', () => {
    let amount = 0
    it('should return 0,0,0,0', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 0, 0, 0])
        done();
      })
    })
  })

  describe('When the user wants to withdraw 40', () => {
    let amount = 40
    it('should return 0,0,2,0', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 0, 2, 0])
        done();
      })
    })
  })

  describe('When the user wants to withdraw 70', () => {
    let amount = 70
    it('should return 0,1,1,0', function (done) {
      request.post(endpoint, {
        json: true,
        body: {
          withdraw: amount
        }
      }, function (error, response) {
        expect(response.body.res).toEqual([0, 1, 1, 0])
        done();
      })
    })
  })

});