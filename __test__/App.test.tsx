/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    // * ARRANGE
    render(<App />);
    // *ACT
    // * EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Hello world',
      })
    ).toBeDefined();
  });
});
