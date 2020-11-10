import React from "react";
import Button from "components/commons/forms/Button";
import { FormCustomer } from "components/customers";
import { useAddCustomer } from "components/customers/hooks";

const AddCustomer = () => {
  const {
    addCustomerFields,
    showAddCustomer,
    setShowAddCustomerHandler,
    setAddCustomerField,
    addCustomerSubmitHandler,
  } = useAddCustomer();

  return (
    <div>
      <Button onClickHandler={setShowAddCustomerHandler} text="Add Customer" />

      {showAddCustomer ? (
        <FormCustomer
          customerFields={addCustomerFields}
          onChangeHanlder={setAddCustomerField}
          onSubmitHandler={addCustomerSubmitHandler}
          textButton="Save Customer"
        />
      ) : null}
    </div>
  );
};

export default AddCustomer;
