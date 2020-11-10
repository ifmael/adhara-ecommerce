import React from "react";
import MainHeader from "components/commons/layout/MainHeader";
import Menu from "components/commons/Menu";
import GlobalContext from "utils/context/GlobalContext";
import useMainContainer from "components/commons/layout/MainContainer/useMainContainer";
import { useCustomers } from "components/customers/hooks";
import { useProducts } from "components/products/hooks";
import { CUSTOMERS, PRODUCTS } from "utils/constant/URL";
import "./styles.scss";

const menuItems = [
  {
    title: "Customers",
    href: CUSTOMERS,
  },
  {
    title: "Products",
    href: PRODUCTS,
  },
];

const MainContainer = ({ children }) => {
  const { currentUser, isLoadingCurrentUser } = useMainContainer();
  const {
    isLoadingCustomers,
    customers,
    addCustomerContext,
    deleteCustomerContext,
    updateCustomerContext,
  } = useCustomers();
  const {
    products,
    isLoadingProducts,
    addProductContext,
    deleteProductContext,
    updateProductContext,
  } = useProducts();

  return (
    <div data-testid="main-container">
      <GlobalContext.Provider
        value={{
          currentUser,
          isLoadingCurrentUser,
          isLoadingCustomers,
          customers,
          addCustomerContext,
          deleteCustomerContext,
          updateCustomerContext,
          products,
          isLoadingProducts,
          addProductContext,
          deleteProductContext,
          updateProductContext,
        }}
      >
        <MainHeader />

        <Menu items={menuItems} />
        <div className="main-container">{children}</div>
      </GlobalContext.Provider>
    </div>
  );
};

export default MainContainer;
