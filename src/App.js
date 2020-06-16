import React, { Component } from 'react';

class App extends Component {
  render() {
    const headerStyle = {
      textShadow: '1px 2px #282794',
      textAlign: 'center',
    };

    return (
      <div className="container">
        <div className="card card-body">
          <h2 style={headerStyle}>NASA's Picture of the Day</h2>
        </div>
      </div>
    );
  }
}

export default App;
