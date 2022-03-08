const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

// TDD -> primero crear los test y luego la funcionalidad
//describe.only
describe('utils - buildMessage', function () {
  describe('when receives an entity and an action', function () {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create');
      const expected = 'movie created';
      assert.strictEqual(result, expected);
    });
  });
  describe('when receives an entity and an action and a list', function () {
    it('should return the respecrive message with the entity in plural', function () {
      const result = buildMessage('movie', 'list');
      const expected = 'movies listed';
      assert.strictEqual(result, expected);
    });
  });
});
