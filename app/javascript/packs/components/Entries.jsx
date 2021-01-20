import React from 'react'

class Entries extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Word</th>
                <th scope="col">Definition</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </>
    )
  }
}
export default Entries