import React from "react";

// So far it's possible to search only thgough city name
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // This search method actually runs a search method from
  // the APP component. That's why: this.PROPS....
  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="flex items-center justify-between p-3 rounded-lg border border-searchBgColor mx-auto w-[50%]">
          <input
            type="text"
            className="w-[60%]"
            placeholder="City..."
            aria-label="City..."
            aria-describedby="button-addon2"
            onChange={this.handleTermChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={this.search}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
