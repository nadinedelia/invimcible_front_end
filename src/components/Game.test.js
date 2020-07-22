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

  xtest('it should return data', () => {
    var game = new Game(mockedAPI)
    expect(game.state.tiles).toEqual(expectedResult);
  })
  test('connection to API', () => {
    var game = new Game(mockedAPI)
    expect(game.state.isLoaded).toEqual(true)
  })
})
