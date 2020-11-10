import { useState, useCallback, useContext } from "react";
import GlobalContext from "utils/context/GlobalContext";
import { updateElement } from "utils/request";
import { CUSTOMERS_END_POINT } from "utils/constant/API";

const useUpdateCustomer = (data) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateCustomerFields, setUpdateCustomerFields] = useState(data);
  const { updateCustomerContext } = useContext(GlobalContext);

  const setUpdateCustomerField = (value, name) => {
    setUpdateCustomerFields({ ...updateCustomerFields, [name]: value });
  };

  const updateCustomerSubmitHandler = useCallback(
    async (event) => {
      try {
        event.preventDefault();

        setIsLoading(true);

        await updateElement(
          updateCustomerFields.id,
          updateCustomerFields,
          CUSTOMERS_END_POINT
        );

        updateCustomerContext(updateCustomerFields);
        setIsLoading(false);
        setIsOpen(false);
      } catch (error) {
        console.error(error);
      }
    },
    [updateCustomerFields, updateCustomerContext]
  );
  const modalHandler = (value) => {
    setIsOpen(value);
  };

  return {
    isLoading,
    updateCustomerSubmitHandler,
    modalIsOpen,
    modalHandler,
    updateCustomerFields,
    setUpdateCustomerField,
  };
};

export default useUpdateCustomer;
