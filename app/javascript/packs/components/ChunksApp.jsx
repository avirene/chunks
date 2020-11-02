import React from 'react'
import ReactDOM from 'react-dom'

class ChunksApp extends React.Component {
  render() {
    return <p>ChunksApp</p>
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('chunks-app')
  app && ReactDOM.render(<ChunksApp />, app)
})