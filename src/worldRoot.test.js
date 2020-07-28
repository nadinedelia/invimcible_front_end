import React from "react";
import WorldRoot from "./worldRoot.js";
// import { connect } from "react-redux";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
import store from "./config/store";
import renderer from "react-test-renderer";

let component;

beforeEach(() => {
  component = renderer.create(
    <Provider store={store}>
      <WorldRoot />
    </Provider>
  );
  //   let wrapper = mount(<Provider store={store}>
  //     <div>
  //       <Map />
  //     </div>
  //   </Provider>)
});

describe("WorldRoot", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <div>
          <WorldRoot />
        </div>
      </Provider>
    );
  });

  it("renders WorldRoot", () => {
    shallow(<WorldRoot />);
  });

  it("renders map information", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
