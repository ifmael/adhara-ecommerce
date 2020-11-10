import { useState, useCallback, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import GlobalContext from "utils/context/GlobalContext";
import { CREATE_PRODUCT } from "graphql/mutations";
import { Product } from "models";

const useAddProduct = () => {
  const [addProductFields, setAddProductFields] = useState({});
  const [showAddProduct, setShowAddProduct] = useState(false);
  const { addProductContext } = useContext(GlobalContext);
  const [addProduct, { data, called, loading }] = useMutation(CREATE_PRODUCT);

  const setShowAddProductHandler = useCallback(() => {
    setShowAddProduct((currentValue) => !currentValue);
  }, [setShowAddProduct]);

  const setAddProductField = (value, name) => {
    setAddProductFields({ ...addProductFields, [name]: value });
  };

  const addProductSubmitHandler = useCallback(
    async (event) => {
      try {
        event.preventDefault();
        const { name, department } = addProductFields;
        const newProduct = { input: Product(name, department) };
        addProduct({ variables: newProduct });
      } catch (error) {
        console.log(error);
      }
    },
    [addProduct, addProductFields]
  );

  useEffect(() => {
    if (called && !loading && data) {
      const { name, department, id } = data["createProduct"];
      addProductContext({ name, department, id });
    }
  }, [data, called, loading, addProductContext]);

  return {
    addProductFields,
    showAddProduct,
    setShowAddProductHandler,
    setAddProductField,
    addProductSubmitHandler,
  };
};

export default useAddProduct;
