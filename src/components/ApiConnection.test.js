// import React from "react";
import API from "./API.js";
import store from "../config/store";

describe("Level 1 connection", () => {
  test("can connect to JSON and add to state", async () => {
    const fakeResponse = {
      mapArray: [
        ["B", "B"],
        ["B", "B"],
      ],
      startPoint: {
        x: 1,
        y: 1,
      }
    };

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    var api = new API
    api.makeRequest()

    setTimeout(function (){

      expect(store.getState().map).toBe(fakeResponse);
        // Something you want delayed.
      
      }, 100)
  });
});
