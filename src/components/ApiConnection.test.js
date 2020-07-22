import React from "react";
import Game from "./Game.js";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Level 1 connection", () => {
  test("can connect to JSON", async () => {
    const fakeResponse = [
      {
        level1: [
          ["string1", "string2"],
          ["string3", "string4"],
        ],
      },
    ];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<Game />, container);
    });

    expect(container.textContent).toBe(undefined);

    window.fetch.mockRestore();
  });
});
