import { Query } from "react-apollo";
import ProductPresenter from "./productPresenter";
import { withRouter } from "next/router";
import { PRODUCT_QUERY } from "./productQueries";

class ProductContaier extends React.Component {
  static async getInitialProps(props) {
    const {
      query: { id }
    } = props;

    return {
      id
    };
  }
  render() {
    const { id } = this.props;
    return (
      <Query query={PRODUCT_QUERY} variables={{ id }}>
        {({ data }) => <ProductPresenter data={data} />}
      </Query>
    );
  }
}

export default withRouter(ProductContaier);
