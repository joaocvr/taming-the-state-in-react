import React, { Component } from "react";

class List extends Component {
  state = {
    archivedItems: []
  };

  byArchived = archivedItems => item => !archivedItems.includes(item.id);

  onArchive = id => {
    const { archivedItems } = this.state;
    this.setState({ archivedItems: [...archivedItems, id] });
  };

  render() {
    const { list } = this.props;
    const { archivedItems } = this.state;

    const filteredList = list.filter(this.byArchived(archivedItems));

    return (
      <div>
        <ul>
          {filteredList.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>
                <button type="button" onClick={() => this.onArchive(item.id)}>
                  Archive
                </button>
              </span>
            </li>
          ))}
        </ul>
        Archived Items: {archivedItems.map(i => i + " ")}
      </div>
    );
  }
}

export default List;
