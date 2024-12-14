import { screen } from '@testing-library/react';
import renderWithProviders from '../../jest/renderWithProviders';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should display the black logo when systems color scheme is not dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(() => ({
        addEventListener: jest.fn(),
        matches: false,
        media: '(prefers-color-scheme: dark)',
        removeEventListener: jest.fn(),
      })),
      writable: true,
    });
    renderWithProviders(<Navbar />);

    expect(screen.findByAltText('Alysia Lynn White Logo')).toBeDefined();
  });

  it('should display the black logo when systems color scheme is dark', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn().mockImplementation(() => ({
        addEventListener: jest.fn(),
        matches: true,
        media: '(prefers-color-scheme: dark)',
        removeEventListener: jest.fn(),
      })),
      writable: true,
    });
    renderWithProviders(<Navbar />);

    expect(screen.findByAltText('Alysia Lynn Black Logo')).toBeDefined();
  });
});
