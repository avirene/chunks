import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Entries from "./Entries";
import Entry from "./Entry";

class ChunksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    this.getEntries = this.getEntries.bind(this);
  }
  componentDidMount() {
    this.getEntries();
  }
  getEntries() {
    axios
    .get("/api/v1/entries")
    .then(response => {
      const entries = response.data;
      this.setState({ entries });
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <Entries>
        {this.state.entries.map(entry => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </Entries>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('chunks-app')
  app && ReactDOM.render(<ChunksApp />, app)
})