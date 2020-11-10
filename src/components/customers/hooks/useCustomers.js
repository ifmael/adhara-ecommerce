import { useState, useCallback, useEffect } from "react";
import { getListOfElements } from "utils/request";
import { CUSTOMERS_END_POINT } from "utils/constant/API";

const useCustomers = () => {
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getListOfCustomers = async () => {
      const listOfElements = await getListOfElements(CUSTOMERS_END_POINT);
      setCustomers(listOfElements);
      setIsLoadingCustomers(false);
    };

    getListOfCustomers();
  }, []);

  const addCustomerContext = useCallback((customer) => {
    if (!customer) return;

    setCustomers((currentCustomers) => [...currentCustomers, customer]);
  }, []);

  const deleteCustomerContext = useCallback((idToDelete) => {
    if (!idToDelete) return;
    setCustomers((currentCustomers) =>
      currentCustomers.filter(({ id }) => id !== idToDelete)
    );
  }, []);

  const updateCustomerContext = useCallback((updateCustomer) => {
    if (!updateCustomer) return;

    setCustomers((currentCustomers) =>
      currentCustomers.map((customer) =>
        customer?.id === updateCustomer?.id ? updateCustomer : customer
      )
    );
  }, []);

  return {
    isLoadingCustomers,
    customers,
    addCustomerContext,
    deleteCustomerContext,
    updateCustomerContext,
  };
};

export default useCustomers;
