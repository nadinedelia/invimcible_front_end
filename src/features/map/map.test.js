import React from "react";
import Map from "./index.js";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../../config/store";
import renderer from "react-test-renderer";

let component;

beforeEach(() => {
  component = renderer.create(
    <Provider store={store}>
      <Map />
    </Provider>
  );
});

describe("Map", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <div>
          <Map />
        </div>
      </Provider>
    );
  });

  xit("renders MapTile", () => {
    shallow(<MapTile />);
  });

  it("renders map information", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
