import { useState, useCallback, useContext, useEffect } from "react";
import GlobalContext from "utils/context/GlobalContext";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT } from "graphql/mutations";

const useUpdateProduct = (inputValues) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateProductFields, setUpdateProductFields] = useState(inputValues);
  const { updateProductContext } = useContext(GlobalContext);
  const [canEdit, setCanEdit] = useState(false);
  const [updateProduct, { data, called, loading }] = useMutation(
    UPDATE_PRODUCT
  );

  const setUpdateCustomerField = (value, name) => {
    setUpdateProductFields({ ...updateProductFields, [name]: value });
  };

  const updateProductSubmitHandler = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        setCanEdit(false);
        updateProduct({
          variables: {
            id: updateProductFields.id,
            input: updateProductFields,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
    [updateProduct, updateProductFields]
  );
  const modalHandler = (value) => {
    setIsOpen(value);
  };

  useEffect(() => {
    if (called && !loading && data && !canEdit) {
      updateProductContext(updateProductFields);
      setIsLoading(false);
      setIsOpen(false);
      setCanEdit(true);
    }
  }, [
    called,
    loading,
    data,
    updateProductContext,
    setIsLoading,
    setIsOpen,
    updateProductFields,
    canEdit,
  ]);

  return {
    isLoading,
    updateProductSubmitHandler,
    modalIsOpen,
    modalHandler,
    updateProductFields,
    setUpdateCustomerField,
  };
};

export default useUpdateProduct;
