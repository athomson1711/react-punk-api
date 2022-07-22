import React from "react";
import Card from "./Card";
import { shallow } from 'enzyme';
import beers from '../../data/beers';

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beers[0];
    component = shallow(<Card beers={testBeer} />);
  })

  it('should render card component', () => {
    expect(component).toBeTruthy();
  })

});