import React, { Fragment } from "react";
import { array } from "prop-types";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const propTypes = {
  items: array,
};

const defaultProps = {
  items: [
    {
      title: "Sign in",
      href: "/",
    },
    {
      title: "Sign up",
      href: "/",
    },
  ],
};

const Menu = ({ items }) => {
  return (
    <ul className="menu-container" data-testid="menu-container">
      {items.map((item, index) => {
        return (
          <Fragment key={index}>
            <li className="menu-item">
              <NavLink
                exact={true}
                to={item.href}
                className="menu-link"
                activeClassName="is-active"
              >
                {item.title}
              </NavLink>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
