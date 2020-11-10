import { useState, useCallback, useContext } from "react";
import GlobalContext from "utils/context/GlobalContext";
import { removeElement } from "utils/request";
import { CUSTOMERS_END_POINT } from "utils/constant/API";

const useDeleteCustomer = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { deleteCustomerContext } = useContext(GlobalContext);

  const deleteCustomerHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      await removeElement(id, CUSTOMERS_END_POINT);
      deleteCustomerContext(id);
      setIsLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [id, deleteCustomerContext]);

  const modalHandler = (value) => {
    setIsOpen(value);
  };

  return { isLoading, deleteCustomerHandler, modalIsOpen, modalHandler };
};

export default useDeleteCustomer;
