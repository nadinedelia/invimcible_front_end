import Game from './Game.js';

describe('Game', () => {
  const expectedResult = [
    ["string1", "string2"],
    ["string3", "string4"]
  ]

  class MockedAPI {
    get() {
      result.data.tiles = expectedResult
    }
  }

  var mockedAPI = new MockedAPI

  test('it should return data', () => {
    var game = new Game(mockedAPI)
    expect(game.state.tiles).toEqual(expectedResult);
  })
})
