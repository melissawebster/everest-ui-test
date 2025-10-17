
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from "./App";

describe('App', () => {
  it('should find the div with word Test', () => {
    const { getByText } = render(<App />); 
    const heading = getByText('Test'); 
    expect(heading).toBeInTheDocument();
  });
});