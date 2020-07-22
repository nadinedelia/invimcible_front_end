import React from 'react'
import Home from './index.jsx'
import { shallow } from 'enzyme'

describe('Home', () => {

  it('renders without crashing', () => {
    shallow(<Home />)
  });
  it('renders a START GAME button', () => {
    const wrapper = shallow(<Home />);
    const info = <a href='/play'><button class="start-btn">START GAME</button></a>
    expect(wrapper.contains(info)).toEqual(true);
  })
  it('renders an ABOUT button', () => {
    const wrapper = shallow(<Home />);
    const info = <a href='./about'><button class="about-btn">ABOUT</button></a>
    expect(wrapper.contains(info)).toEqual(true);
  })
})
