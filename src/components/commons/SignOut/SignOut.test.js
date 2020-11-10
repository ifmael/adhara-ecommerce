import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignOut from "./index.js";

describe("SignOut test", () => {
  test("take a snapshot", () => {
    const { asFragment } = render(<SignOut />);
    expect(asFragment(<SignOut />)).toMatchSnapshot();
  });

  test("Check basic properties", () => {
    render(<SignOut />);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("icon-container")).toBeInTheDocument();
  });

  test("Check handler function", async () => {
    const handler = jest.fn();

    render(<SignOut handler={handler} />);
    userEvent.click(screen.getByRole("button"));
    expect(handler.mock.calls.length).toBe(1);
  });
});
