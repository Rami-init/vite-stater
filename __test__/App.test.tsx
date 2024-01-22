import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import WrappedApp, { App } from '@/App';

describe('App', () => {
  it('renders without crashing', () => {
    // * ARRANGE
    render(<WrappedApp />);
    // *ACT
    // * EXPECT
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  //   *  react router 6
  it('renders without crashing with react router 6', () => {
    render(
      <MemoryRouter initialEntries={['/not-exist']}>
        <App />
      </MemoryRouter>
    );
    // Check if the expected elements are present in the rendered component
    expect(screen.getByText('404'.trim())).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(
      screen.getByText('The page you are looking for does not exist.')
    ).toBeInTheDocument();

    // Check if the link to the home page is present and has the correct URL
    const linkElement = screen.getByRole('link', {
      name: /Go back to the home page/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
