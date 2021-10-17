import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it("App renders correctly", () => {
  render(<App />);
  screen.debug()
});
