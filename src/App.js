import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        count: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    
  }

  isWinner = (s) => {
    for (let i = 0; i < this.winnerLine.length; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s 
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
          alert(s + ' win');
          setTimeout(() => {
            this.setState({squares: Array(9).fill(null)});
            this.setState({count: 0});
          }, 3000)
        }
    }
  }


  clickHandler = (e) => {
    let data = e.target.getAttribute('data');
    let { squares, count } = this.state;
    if (squares[data] === null) {
      squares[data] = (count % 2 === 0) ? 'X' : '0';

      this.setState({
        squares: squares,
        count: count + 1
      });}
    else {
      alert('Так нельзя')
    }

    this.isWinner(squares[data]);
  }

    render() {
        return (
            <div className="App">
                <div 
                  onClick={this.clickHandler}
                  data='0'
                  className='exel'
                >{this.state.squares[0]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='1'
                  className='exel'
                >{this.state.squares[1]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='2'
                  className='exel'
                >{this.state.squares[2]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='3'
                  className='exel'
                >{this.state.squares[3]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='4'
                  className='exel'
                >{this.state.squares[4]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='5'
                  className='exel'
                >{this.state.squares[5]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='6'
                  className='exel'
                >{this.state.squares[6]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='7'
                  className='exel'
                >{this.state.squares[7]}</div>
                <div 
                  onClick={this.clickHandler}
                  data='8'
                  className='exel'
                >{this.state.squares[8]}</div>
                  
            </div>
        );
    }
}

export default App;
