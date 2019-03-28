import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { sale: true }) {
      ...ProductItems
    }
    Allproducts: products(where: { sale: false }) {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
