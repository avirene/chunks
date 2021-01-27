import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Entries from "./Entries";
import Entry from "./Entry";
// import EntryForm from "./EntryForm"

class ChunksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    this.getEntries = this.getEntries.bind(this);
    this.checkWord = this.checkWord.bind(this);
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

  checkWord(inputWord) {
    const word = this.state.entry.word
    this.setState({ word });
    if (inputWord == word) {
      return alert("Well done");
    } else {
      return confirm("Are you sure?");
    }
  }
  
  render() {
     if (this.state.entries.length == 0) {
        return (
             <Entries>
             </Entries>
        );
   }

   var random = Math.floor(Math.random() * this.state.entries.length);
    return (
      <Entries>
                 <Entry key={this.state.entries[random].id} entry={this.state.entries[random]} />
     </Entries>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('chunks-app')
  app && ReactDOM.render(<ChunksApp />, app)
})