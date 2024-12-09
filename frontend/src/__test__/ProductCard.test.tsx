//ProductCard.test.ts
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import ProductCard from "../Components/ProductCard";

const testData = {
  name: "Lights",
  price: 60,
  img_path:
    "https://th.bing.com/th/id/OIG3.uFRLQFJ8Y4tDr4dSymZQ?w=1024&h=1024&rs=1&pid=ImgDetMain",
  id: 1,
  quantity: 5,
  description: "A nice light product",
};

describe("ProductCard Component", () => {
  it("should render an h2 tag with the product name", () => {
    render(<ProductCard {...testData} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Lights"); // Kontrollera namnet
  });

  it("should render a p tag with the product price", () => {
    render(<ProductCard {...testData} />);
    const price = screen.getByRole("paragraph");
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent("60 kr"); // Kontrollera priset
  });
});
