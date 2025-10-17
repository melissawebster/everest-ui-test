
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from "./App";

describe('Header', () => {
  it('should render header with logo', () => {
    const { getByAltText } = render(<App />); 
    const logo = getByAltText('everest-logo'); 
    expect(logo).toBeInTheDocument();
  });
    it('should render header with brand name', () => {
    const { getByText } = render(<App />); 
    const brandName = getByText(/evertask/i);
    expect(brandName).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('should render footer with credits', () => {
    const { getByText } = render(<App />); 
    const credits = getByText(/Assessment project for Everest Systems/i); 
    expect(credits).toBeInTheDocument();
  });
});