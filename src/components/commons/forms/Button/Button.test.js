import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button test", () => {
  test("take a snapshot", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment(<Button />)).toMatchSnapshot();
  });

  test("renders button", () => {
    render(<Button text="Button" />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Button");
  });
});
