import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Components/Header";

describe("Header component", () => {
  it("should render the Header component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("Glitter & Gran")).toBeInTheDocument();
  });

  it("should render the CartWidget component", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("cart-widget")).toBeInTheDocument();
  });
});
