import React, { useContext } from "react";
import GlobalContext from "utils/context/GlobalContext";
import { DeleteCustomer, UpdateCustomer } from "components/customers";
import Table from "components/commons/Table";

import "./styles.scss";

const columns = ["Name", "Last Name", "Email", "Phone", "Address", "Actions"];

const ListOfCustomers = () => {
  const { isLoadingCustomers, customers } = useContext(GlobalContext);

  const customerWithActions = customers?.map((customer) => {
    const deleteComponent = (
      <DeleteCustomer key={`del-${customer.id}`} id={customer.id} />
    );
    const updateComponent = (
      <UpdateCustomer key={`upd-${customer.id}`} {...customer} />
    );
    return {
      ...customer,
      actions: (
        <div className="actions-cell">
          {deleteComponent} {updateComponent}
        </div>
      ),
    };
  });

  return (
    <div>
      {isLoadingCustomers ? (
        <p>Loading...</p>
      ) : (
        <Table columns={columns} data={customerWithActions} />
      )}
    </div>
  );
};

export default ListOfCustomers;
