import React from 'react'
import World from './index.js'
import { shallow } from 'enzyme'

describe('About', () => {

  it("renders without crashing", () => {
    shallow(<World />);
  });

})