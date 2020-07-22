import Game from "./Game.js";
const http = require("http");
const app = require("../App.js");

describe("Game", () => {
  let server;
  const expectedResult = [
    ["string1", "string2"],
    ["string3", "string4"],
  ];

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  class MockedAPI {
    get() {
      result.data.tiles = expectedResult;
    }
  }

  var mockedAPI = new MockedAPI();

  xtest("it should return data", () => {
    var game = new Game(mockedAPI);
    expect(game.state.tiles).toEqual(expectedResult);
  });

  xtest("connection to API", () => {
    var game = new Game(mockedAPI);
    await page.render
    expect(game.state.isLoaded).toEqual(true);
  });
});

