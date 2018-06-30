import React, { Component } from 'react'

class MainHeader extends Component {
  render() {
    return (
      <div className="App-header-container">
        <header className="App-header">
          <div className="App-title">
            <h1>Giffy Jane</h1>
          </div>
          <nav className="header-nav">
            {/* <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul> */}
          </nav>
        </header>
      </div>
    )
  }
}

export default MainHeader