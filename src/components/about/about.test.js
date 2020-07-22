import React from 'react'
import About from './index.jsx'
import { shallow } from 'enzyme'

describe('About', () => {

  it("renders without crashing", () => {
    shallow(<About />);
  });
  it("renders team information", () => {
    const wrapper = shallow(<About />);
    const info = <p> Hi, we are the creators of The adventures of Vim. </p>
    expect(wrapper.contains(info)).toEqual(true);
  })
})
