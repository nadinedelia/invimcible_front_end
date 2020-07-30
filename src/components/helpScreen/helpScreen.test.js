import React from "react";
import HelpScreenLevel1 from "./helpScreenLevel1.jsx";
import HelpScreenLevel2 from "./helpScreenLevel2.jsx";
import { shallow } from "enzyme";

describe("HelpScreenLevel1", () => {
  it("renders without crashing", () => {
    shallow(<HelpScreenLevel1 />);
  });
});

describe("HelpScreenLevel2", () => {
  it("renders without crashing", () => {
    shallow(<HelpScreenLevel2 />);
  });

  xit("renders help information", () => {
    const wrapper = shallow(<HelpScreenLevel2 />);
    const info = <p> Movement: </p>;
    expect(wrapper.contains(info)).toEqual(true);
  });
});
