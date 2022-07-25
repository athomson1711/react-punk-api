import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Card from "./Card";
import beers from '../../data/beers';
import CardFront from '../CardFront'

describe("Card tests", () => {

  it('should render card component', () => {
    let testBeer = beers[0];
    let component = <Card beer={testBeer} />;
    expect(component).toBeTruthy();
  })

  it("should not have the faceDown class by default", () => {
    let testBeer = beers[0];
    const {container} = render(<Card beer={testBeer} />);
    expect(container.firstChild.classList.contains("faceDown")).toBe(false);
  })

  // it("should toggle faceDown class when component is clicked", () => {
  //   let testBeer = beers[0];
  //   const clickOnCard = jest.fn();
  //   const {container} = render(<Card beer={testBeer} />);
  //   fireEvent.click(container)
  //   expect(container.firstChild.classList.contains("faceDown")).toBe(true);

  // })

});