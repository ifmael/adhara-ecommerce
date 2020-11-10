import React from "react";
import { Link, useHistory } from "react-router-dom";
import SignOut from "components/commons/SignOut";
import { CUSTOMERS, INDEX } from "utils/constant/URL";
import Cookies from "universal-cookie";
import "./styles.scss";

const MainHeader = () => {
  const history = useHistory();
  const singOutHandler = () => {
    const cookies = new Cookies();
    cookies.remove("token");
    cookies.remove("email");
    history.push(INDEX);
  };

  return (
    <header className="main-header">
      <Link to={CUSTOMERS}>Ecommerce Panel</Link>

      <div className="main-header-settings">
        <SignOut handler={singOutHandler} />
      </div>
    </header>
  );
};

export default MainHeader;
