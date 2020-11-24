import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }
  renderBox(i) {
    return <Box value="something in a string" />;
  }
  render() {
    return (
      <div>
        <div className="Body"></div>
        {this.renderBox()}
      </div>)
  }
}

class Box extends React.Component {

  render() {
    return (
      <div className="Box">
        {this.props.value}
      </div>

    );
  }
}

export default App;









    // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );