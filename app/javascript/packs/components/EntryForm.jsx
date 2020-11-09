import React from "react"
import PropTypes from "prop-types"

import axios from "axios"

class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.wordRef = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post("/api/v1/entries", {
        entry: {
          title: this.wordRef.current.value,
        },
      })
      .then(response => {
        const entry = response.data
        this.props.createEntry(entry)
      })
      .catch(error => {
        console.log(error)
      })
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="my-3">
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              name="word"
              ref={this.wordRef}
              required
              className="form-control"
              id="word"
              placeholder="Add your entry here."
            />
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-outline-success btn-block">
              Add Entry
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default EntryForm

EntryForm.propTypes = {
  createEntry: PropTypes.func.isRequired,
}
