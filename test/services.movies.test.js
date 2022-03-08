const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongolibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/moviesMock');

describe('services - movies', function () {
  const moviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongolibMock,
  });

  const moviesService = new moviesServices();

  describe('when movies methond is called', async function () {
    it('should call the getall Mongolib method', async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  });
});
