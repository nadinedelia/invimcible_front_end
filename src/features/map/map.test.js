import React from "react";
import Map from "./index.js";
import { connect } from "react-redux";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import store from "../../config/store";

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

  it("renders map information", () => {
    const wrapper = shallow(<Map />);
    const info = <p> Hi, we are the creators of The adventures of Vim. </p>;
    expect(wrapper.contains(info)).toEqual(true);
  });
});
