import React from "react";
import PropTypes from "prop-types";

import axios from "axios";
import setAxiosHeaders from "./AxioHeaders";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.word;
    this.definition;
    this.wordRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this);
    this.path = `/api/v1/entries/${this.props.entry.id}`;
  }
  handleSubmit(e) {
    e.preventDefault()
      axios
      .fetch(this.path, {
        entry: {
        word: this.wordRef.current.value,
        },
      })
      .then(response => {
        const inputWord = response.data
        this.props.checkWord(inputWord);
      })
      .catch(error => {
        console.log(error);
      });
    e.target.reset()
  }
  render() {
    const { entry } = this.props
    return (
      <tr className={`${this.word}`} className={`${this.definition}`}>
        <td>
          <input
            type="text"
            name="word"
            ref={this.wordRef}
            required
            className="form-control"
            id="word"
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
        <button onSubmit={this.handleSubmit}
        className="btn btn-primary"
        >
          Submit
        </button>
      </tr>
    )
  }
}

export default Entry

Entry.propTypes = {
  Entry: PropTypes.object.isRequired,
  getEntries: PropTypes.func.isRequired,
  checkWord: PropTypes.func.isRequired,
};
