import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("Homepage", () => {
  it("renders the Components", () => {
    render(<HomePage />);

    const title = screen.getByText("next-starter", {
      selector: "h1",
    });

    expect(title).toBeInTheDocument();
  });
});
