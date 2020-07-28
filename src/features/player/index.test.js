import React from "react";
import Player from "./index.js";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../../config/store";
import renderer from "react-test-renderer";

let component

beforeEach(() => {
  component = renderer.create(
    <Provider store={store}>
      <Player />
    </Provider>
  );
});

describe("Map", () => {
  it("renders map information", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})
