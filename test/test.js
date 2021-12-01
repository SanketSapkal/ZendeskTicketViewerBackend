var app = require('../app.js');
var request = require('supertest');

describe('loading express', function () {
    beforeEach(function () {
    });
    afterEach(function () {
    });
    it('Should be able to get ticket count', function testSlash(done) {
    request(app)
      .get('/tickets/count')
      .expect(200, done);
    });
    it('Should be able to get all the tickets', function testSlash(done) {
        request(app)
          .get('/tickets/all')
          .expect(200, done);
    });
    it('Should be able to get a single ticket', function testSlash(done) {
        request(app)
            .get('/ticket/1')
            .expect(200, done);
    });
    it('Should be able to get tickets on a page', function testSlash(done) {
        request(app)
          .get('/ticketsOnPage/1')
          .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
      request(app)
        .get('/foo/bar')
        .expect(404, done);
    });
  });
