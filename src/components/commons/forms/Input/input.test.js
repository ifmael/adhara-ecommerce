import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./index.js";

describe("Input test", () => {
  test("take a snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment(<Input />)).toMatchSnapshot();
  });

  test("Check basic properties", () => {
    render(
      <Input placeHolder="A placeholder" text="Test 01" value="input value" />
    );

    expect(screen.getByText(/Test 01/i)).toHaveTextContent("Test 01");
    const { placeholder, type, value } = screen.getByRole("textbox");
    expect(placeholder).toBe("A placeholder");
    expect(type).toBe("text");
    expect(value).toBe("input value");
  });

  test("Check onChange function", async () => {
    const handler = jest.fn((string) => (value = string));
    let value = "Initial value";

    render(<Input onChangeHandler={handler} value={value} />);
    await userEvent.type(screen.getByRole("textbox"), "Hello, World!");
    expect(handler.mock.calls.length).toBe(13);
  });
});
