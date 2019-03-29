import ProductPresenter from "./productPresenter";
import { withRouter } from "next/router";

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
    console.log(this.props.id);
    return <ProductPresenter />;
  }
}

export default withRouter(ProductContaier);
