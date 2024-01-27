import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const heading = screen.getByText(
      'Next.js + TypeScript + TailwindCSS + Shadcn/ui1',
      {
        selector: 'h1',
      }
    );

    expect(heading).toBeInTheDocument();
  });
});
