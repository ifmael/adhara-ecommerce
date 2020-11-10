import React from "react";
import { AddCustomer, ListOfCustomers } from "components/customers";

const Customers = () => {
  return (
    <div className="customers">
      <AddCustomer />
      <ListOfCustomers />
    </div>
  );
};

export default Customers;
