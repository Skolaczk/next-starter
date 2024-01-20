import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const helloWorldElement = screen.getByText('Hello world', {
      selector: 'h1',
    });

    expect(helloWorldElement).toBeInTheDocument();
  });
});
