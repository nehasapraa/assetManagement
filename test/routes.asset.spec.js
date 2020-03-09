process.env.NODE_ENV = 'test';
require('babel-register')();
require('babel-polyfill');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = require('../app');
const knex = require('../data/db');

describe('API Routes', function() {

  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      done();
    });
  });
  describe('GET /api/v1/assets', () => {
    it('should return all assets', (done) => {
      chai.request(server)
      .get('/api/v1/assets')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(5);
      done();
      });
    });
  });
});
