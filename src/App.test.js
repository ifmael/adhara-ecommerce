import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders landing page", async () => {
  render(<App />);

  expect(
    screen.getByText(/Welcome to the ecommerce panel/i)
  ).toBeInTheDocument();
});
