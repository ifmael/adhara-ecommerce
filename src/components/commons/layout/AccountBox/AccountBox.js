import React from "react";
import Menu from "components/commons/Menu";
import "./styles.scss";

const menuItems = [
  {
    title: "Sign in",
    href: "/",
  },
  {
    title: "Sign up",
    href: "join",
  },
];

const AccountBox = ({ children }) => {
  return (
    <div className="account-box">
      <div className="account-box__logo">
        <p>Welcome to the ecommerce panel</p>
      </div>
      <Menu items={menuItems} />
      {children}
    </div>
  );
};

export default AccountBox;
