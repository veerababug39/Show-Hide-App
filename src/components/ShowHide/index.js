// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {textFirstName: false, textLastName: false}

  onClickFirstButton = () => {
    this.setState(prevState => ({textFirstName: !prevState.textFirstName}))
  }

  onClickLastButton = () => {
    this.setState(prevState => ({textLastName: !prevState.textLastName}))
  }

  render() {
    const {textFirstName, textLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="headings-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickFirstButton}
            >
              Show/Hide Firstname
            </button>

            {textFirstName && <p className="text-paragraph">Joe</p>}
          </div>

          <div className="headings-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickLastButton}
            >
              Show/Hide Lastname
            </button>
            {textLastName && <p className="text-paragraph">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
