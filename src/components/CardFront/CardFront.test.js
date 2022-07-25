import React from "react";
import beers from '../../data/beers';
import CardFront from '../CardFront'

describe("Card tests", () => {

  it('should render card back component', () => {
    let testBeer = beers[0];
    let component = <CardFront beer={testBeer} />;
    expect(component).toBeTruthy();
  })

})