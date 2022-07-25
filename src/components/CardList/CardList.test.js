import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CardList from "./CardList";
import beers from '../../data/beers';

describe("CardList tests", () => {
  let component;

  it('should render cardList component', () => {
    let testBeer = beers[0];
    let component = <CardList beer={testBeer} />;
    expect(component).toBeTruthy();
  })

  // it('should render the correct number of Card components', () => {
  //   let testBeer = beers[0];
  //   const numberOfBeers = beers.length;
  //   let { container }  = render(<CardList beers={testBeer} />);
  //   const numberOfRenderedCards = container.classList.contains("card").length;
  //   expect(numberOfBeers).toEqual(numberOfRenderedCards);
  // })
});
