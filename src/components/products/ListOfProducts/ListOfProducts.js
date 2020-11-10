import React, { useContext } from "react";
import GlobalContext from "utils/context/GlobalContext";
import Table from "components/commons/Table";
import { DeleteProduct, UpdateProduct } from "components/products";

const columns = ["Name", "Department", "Actions"];

const ListOfProducts = () => {
  const { products, isLoadingProducts } = useContext(GlobalContext);

  const productsWithActions = products?.map((product) => {
    const deleteComponent = (
      <DeleteProduct key={`del-${product.id}`} id={product.id} />
    );
    const updateComponent = (
      <UpdateProduct key={`upd-${product.id}`} {...product} />
    );
    return {
      ...product,
      actions: (
        <div className="actions-cell">
          {deleteComponent}
          {updateComponent}
        </div>
      ),
    };
  });
  return (
    <div>
      {isLoadingProducts ? (
        <p>Loading</p>
      ) : (
        <Table columns={columns} data={productsWithActions} />
      )}
    </div>
  );
};

export default ListOfProducts;
