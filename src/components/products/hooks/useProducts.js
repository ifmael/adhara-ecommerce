import { useState, useEffect, useCallback } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_PRODUCTS } from "graphql/queries";

const useProduct = () => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    const getListOfProducts = async () => {
      try {
        const { data } = await client.query({
          query: GET_PRODUCTS,
        });

        setProducts(
          data.products.map(({ name, department, id }) => ({
            name,
            department,
            id,
          }))
        );
        setIsLoadingProducts(false);
      } catch (error) {
        console.error(error);
      }
    };

    getListOfProducts();
  }, [client]);

  const addProductContext = useCallback((product) => {
    if (!product) return;

    setProducts((currentProducts) => [...currentProducts, product]);
  }, []);

  const deleteProductContext = useCallback((idToDelete) => {
    if (!idToDelete) return;
    setProducts((currentProducts) =>
      currentProducts.filter(({ id }) => id !== idToDelete)
    );
  }, []);

  const updateProductContext = useCallback((updateProducts) => {
    if (!updateProducts) return;

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product?.id === updateProducts?.id ? updateProducts : product
      )
    );
  }, []);

  return {
    products,
    isLoadingProducts,
    addProductContext,
    deleteProductContext,
    updateProductContext,
  };
};

export default useProduct;
