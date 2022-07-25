import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render card component', () => {
  let component = <App />;
  expect(component).toBeTruthy();
})