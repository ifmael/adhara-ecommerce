import { useState, useCallback, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import GlobalContext from "utils/context/GlobalContext";
import { DELETE_PRODUCT } from "graphql/mutations";

const useDeleteProduct = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { deleteProductContext } = useContext(GlobalContext);
  const [deleteProduct, { data, called, loading }] = useMutation(
    DELETE_PRODUCT
  );

  const deleteProductHandler = useCallback(async () => {
    try {
      deleteProduct({ variables: { id } });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }, [id, deleteProduct]);

  useEffect(() => {
    if (called && !loading && data) {
      setIsOpen(false);
      deleteProductContext(id);
    }
  }, [data, called, loading, deleteProductContext, id]);

  const modalHandler = (value) => {
    setIsOpen(value);
  };

  return { isLoading, deleteProductHandler, modalIsOpen, modalHandler };
};

export default useDeleteProduct;
