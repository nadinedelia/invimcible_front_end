import React from 'react'
import Actor from './index.jsx'
import Sprite from '../sprite'

describe('Actor', () => {
  let actor

  beforeEach(() => {
    const data = {
      h: 32,
      w: 32,
    };
    const position = {
      x: 0,
      y: 0
    }
    const step = 0
    const dir = 0
    actor = new Actor({ 
      data, 
      position, 
      step, 
      dir,
    })
  })
  console.log(actor)

  it('Has a starting position of x: 0, y: 0', () => {
    expect(actor.props.position).toEqual({ x: 0, y: 0})
  })
  
  it('Has data of x: 0, y: 0, h: 32, w: 32', () => {
    expect(actor.props.data).toEqual({ x: 0, y: 0, w: 32, h: 32 })
  })
})