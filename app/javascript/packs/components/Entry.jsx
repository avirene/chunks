import React from "react";
import PropTypes from "prop-types";

import axios from "axios";
import setAxiosHeaders from "./AxioHeaders";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.word;
    this.definition;
    this.handleDestroy = this.handleDestroy.bind(this);
    this.path = `/api/v1/entries/${this.props.entry.id}`;
  }
  handleDestroy() {
    setAxiosHeaders();
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      axios
      .delete(this.path)
      .then(response => {
        this.props.getEntries();
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
  render() {
    const { entry } = this.props
    return (
      <tr className={`${this.word}`} className={`${this.definition}`}>
        <td>
          <input
            type="text"
            className="form-control"
            id={`entry__word-${entry.id}`}
        />
        </td>
        <td>
          <textarea
            type="text"
            defaultValue={entry.definition}
            className="form-control"
            id={`entry__definition-${entry.id}`}
          />
        </td>
        <button onClick={this.handleDestroy}
        className="btn btn-outline-danger"
        >
          Delete
        </button>
      </tr>
    )
  }
}

export default Entry

Entry.propTypes = {
  Entry: PropTypes.object.isRequired,
  getEntries: PropTypes.func.isRequired
};
