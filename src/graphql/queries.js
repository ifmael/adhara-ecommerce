import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      department
    }
  }
`;

export { GET_PRODUCTS };
