import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

const SELECTORS = {
  MENU_CONTAINER: "menu-container",
  MY_LEARNING_BUTTON: /my learning/i,
  DISCOVER_BUTTON: /discover/i,
};

const items = [
  {
    title: "Sign in",
    href: "/sign-in",
  },
  {
    title: "Sign up",
    href: "/sign-up",
  },
];

describe("Menu Test", () => {
  test("take a snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Menu items={items} />
      </MemoryRouter>
    );
    expect(asFragment(<Menu items={items} />)).toMatchSnapshot();
  });

  test("renders menu", () => {
    render(
      <MemoryRouter>
        <Menu items={items} />
      </MemoryRouter>
    );

    const menuContainer = screen.getByTestId(SELECTORS.MENU_CONTAINER);
    const firstMenuLink = screen.getByRole("link", {
      name: "Sign in",
    });
    const lastMenuLink = screen.getByRole("link", {
      name: "Sign up",
    });

    expect(menuContainer).toBeInTheDocument();
    expect(firstMenuLink).toBeInTheDocument();
    expect(firstMenuLink.getAttribute("href")).toBe("/sign-in");
    expect(lastMenuLink).toBeInTheDocument();
    expect(lastMenuLink.getAttribute("href")).toBe("/sign-up");
  });
});
