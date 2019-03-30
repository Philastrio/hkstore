import { gql } from "apollo-boost";

export const PRODUCT_QUERY = gql`
  {
    product(where: { id: "cjtoqkvzr6cyu0830acdbgbga" }) {
      name
    }
  }
`;
