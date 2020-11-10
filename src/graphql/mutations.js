import { gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduc($input: ProductInput!) {
    createProduct(input: $input) {
      id
      name
      department
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
      name
      department
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: String!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      department
    }
  }
`;

export { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT };
