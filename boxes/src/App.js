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

  // addBoxes() {
  //   for(i=0;i<16;i++)
  //   {

  // }  

  

  renderBox(i) {
    return <Box />;
  }

  render() {
    return (
        <div className="body">
          {this.renderBox()}
        </div>
    )
  }
}

class Box extends React.Component {

  render() {
    return (
      <div className="box">
        {this.props.value}
      </div>

    );
  }
}

export default App;


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );






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