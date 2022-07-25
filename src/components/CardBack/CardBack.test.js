import React from "react";
import { render, fireEvent } from '@testing-library/react';
import beers from '../../data/beers';
import CardBack from '../CardBack'

describe("Card tests", () => {

  it('should render card back component', () => {
    let testBeer = beers[0];
    let component = <CardBack beer={testBeer} />;
    expect(component).toBeTruthy();
  })

})