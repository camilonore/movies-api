const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('./moviesMock');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock['Drama']);

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongolibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongolibMock,
};
