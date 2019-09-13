import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

class SearchableList extends Component {
  state = {
    query: ""
  };

  byQuery = query => itemList =>
    !query || itemList.name.toLowerCase().includes(query.toLowerCase());

  handleOnChange = event => this.setState({ query: event.target.value });

  render() {
    const { list } = this.props;
    const { query } = this.state;
    const filteredList = list.filter(this.byQuery(query));

    return (
      <div>
        <form>
          <Search query={query} handleOnChange={this.handleOnChange}>
            Search List
          </Search>
          <List list={filteredList} />
        </form>
      </div>
    );
  }
}

export default SearchableList;
