import React from "react";
import App from "./App.js";
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
      <App />
    </Provider>
  );
  //   let wrapper = mount(<Provider store={store}>
  //     <div>
  //       <Map />
  //     </div>
  //   </Provider>)
});

describe("App", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    );
  });

  it("renders the App", () => {
    shallow(<App />);
  });

  it("renders app information", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
