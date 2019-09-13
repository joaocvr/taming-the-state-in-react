import React, { Component } from "react";

class ArchiveableList extends Component {
  state = {
    archivedItems: []
  };

  onArchive = id => {
    const { archivedItems } = this.state;
    this.setState({
      archivedItems: [...archivedItems, id]
    });
  };

  byArchived = archivedItems => item => !archivedItems.includes(item.id);

  render() {
    const { list } = this.props;
    const { archivedItems } = this.state;
    const filteredList = list.filter(() => this.byArchived(archivedItems));
    return (
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
        Archived Items: {archivedItems.map(i => i + " ")}
      </ul>
    );
  }
}

export default ArchiveableList;
