import { gql } from 'apollo-boost';

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { sale: true }) {
      id
      name
      subtitle
      description
      price
      photo {
        url
      }
    }
    Allproducts: products(where: { sale: false }) {
      id
      name
      subtitle
      description
      price
      photo {
        id
        url
      }
    }
  }
`;
