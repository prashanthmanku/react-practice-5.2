// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  ondarkLight = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state

    return (
      <div className="bg-container">
        {isDark && (
          <div className="card-container card-dark-bg">
            <h1 className="heading-dark">Click To Change Mode</h1>
            <button className="button" type="button" onClick={this.ondarkLight}>
              Light Mode
            </button>
          </div>
        )}
        {!isDark && (
          <div className="card-container card-light-bg">
            <h1 className="heading-light">Click To Change Mode</h1>
            <button type="button" onClick={this.ondarkLight}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
