import React from "react";

import World from "../features/world";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import API from "./API.js";
import store from "../config/store";
import {shallow} from 'enzyme';

// const supertest = require('supertest');
// const http = require('http')


describe("Level 1 connection", () => {

  test("can connect to JSON and add to state", async () => {
    const fakeResponse = {
      mapArray: [
        ["B", "B"],
        ["B", "B"],
      ],
      startPoint: {
        x: 1,
        y: 1,
      }
    };

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    var api = new API
    api.makeRequest()

    setTimeout(function (){

      expect(store.getState().map).toBe(fakeResponse);
        // Something you want delayed.
      
      }, 100)
  });

  test("tiles render in correct posotion", async () => {
    const fakeResponse = {
      mapArray: [
        [{value: "B", x: 416, y: 192, blocked: true}, {value: "B", x: 416, y: 192, blocked: true}],
        [{value: "B", x: 416, y: 192, blocked: true}, {value: "B", x: 416, y: 192, blocked: true}],
      ],
      startPoint: {
        x: 1,
        y: 1,
      }}

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse),
      };
      return Promise.resolve(fetchResponse);
    });

    // get request for /play

    // return supertest(app)
    // .get("/play")
    // .then(response => {
    //   expect(response.statusCode).toBe(404);
    // });

    const container = shallow(<World />)

    let containerStyle = container.find('.tile B').get(0).style;
expect(containerStyle).toHaveProperty('opacity', '1');

//     const elem = container.find(".tile B");
// expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('opacity')).toBe('0.4');

    console.log(container.find(".tile B"))

    //expect(container.find('.tile B').prop('style')).toHaveProperty('', '100%');

    //expect documnet.getElementByClass(tile B) match the styles
  })
});
