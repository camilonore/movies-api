const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, MoviesServicesMock } = require('../utils/mocks/moviesMock');
const testServer = require('../utils/testServer');

describe('[ routes/movies ]', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MoviesServicesMock,
  });
  const request = testServer(route);

  describe('GET /movies', function () {
    it('Should response with status 200', (done) => {
      // Arrange
      const route = '/api/movies';

      // Act
      const getMovies = request.get(route);

      // Assert
      getMovies.expect(200, done);
    });

    it('Should respond with the list of movies', (done) => {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });
        done();
      });
    });
  });
});
