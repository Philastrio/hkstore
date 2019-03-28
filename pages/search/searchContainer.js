import SearchPresenter from "./searchPresenter";

export default class extends React.Component {
  state = {
    searchTerm: ""
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <SearchPresenter
        searchTerm={searchTerm}
        updateSearchTerm={this._updateSearchTerm}
      />
    );
  }
  _updateSearchTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };
}
