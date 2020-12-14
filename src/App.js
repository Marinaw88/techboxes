import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './logo.svg';

class Box extends React.Component {
  constructor(props) {
    super(props);

    this.changeColor = this.changeColor.bind(this);

    //Initialize color
    this.state={ 
      color: "",
      boxClass: "grayBox"
    }
  }

  changeColor() {
    let newColor = '#'+ Math.floor(Math.random()*16777215).toString(16); 
    this.setState({color: newColor, boxClass: "grayBox"
    }); // console.log("); 
   }


   render(){
    return (
      <div
        onMouseOver={this.changeColor} 

        className={this.state.boxClass} 
        style={{backgroundColor: this.state.color}} // Changes the background to the current state of color
      ></div> 
      )
    }
  }

class App extends React.Component {
  render(){
    let addBoxes = [];
      for(let i = 0; i < 100; i++){
      addBoxes.push(<Box/>) 
    }

    return (
      <div className="container">{addBoxes}</div>
    );
  }
}
export default App;

//   renderBox(i) {
//     return <Box />;
//   }

//   render() {
//     return (
//         <div className="body">
//           {this.renderBox()}
//         </div>
//     )
//   }
// }

// class Box extends React.Component {

//   render() {
//     return (
//       <div className="box">
//         {this.props.value}
//       </div>

//     );
//   }
// }

// export default App;



