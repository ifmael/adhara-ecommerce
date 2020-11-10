import { useState, useCallback, useContext } from "react";
import GlobalContext from "utils/context/GlobalContext";
import { createElement } from "utils/request";
import { CUSTOMERS_END_POINT } from "utils/constant/API";
import { Customer } from "models";

const useAddCustomer = () => {
  const [addCustomerFields, setAddCustomerFields] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const { addCustomerContext } = useContext(GlobalContext);

  const setShowAddCustomerHandler = useCallback(() => {
    setShowAddCustomer((currentValue) => !currentValue);
  }, [setShowAddCustomer]);

  const setAddCustomerField = (value, name) => {
    setAddCustomerFields({ ...addCustomerFields, [name]: value });
  };

  const addCustomerSubmitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsLoading(true);
        const { name, lastName, email, phone, address } = addCustomerFields;
        const newCustomer = Customer(name, lastName, email, phone, address);
        await createElement(newCustomer, CUSTOMERS_END_POINT);
        addCustomerContext(newCustomer);
      } catch (error) {
        console.error(error);
      }
    },
    [addCustomerFields, addCustomerContext]
  );

  return {
    addCustomerFields,
    isLoading,
    showAddCustomer,
    setShowAddCustomerHandler,
    setAddCustomerField,
    addCustomerSubmitHandler,
  };
};

export default useAddCustomer;
