import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        count: 0,
        symbol: 0,
        x: 0,
        o: 0,
        victory: 0
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
    const { x, o } = this.state;
    for (let i = 0; i < this.winnerLine.length; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s 
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
          console.log('[s]', s);
          (s === 'X') 
          ? this.setState({x: x + 1}) 
          : this.setState({o: o + 1});
          alert(s + ' win');
          this.setState({victory: 1});
        }
      else if (
        this.state.victory === 0 &&
        this.state.count === 8) {
          alert('Ничья');
          return}
    }
    
    
  }


  clickHandler = (e) => {
    
    let data = e.target.getAttribute('data');
    let { squares, count, symbol, victory } = this.state;
    

    if (squares[data] === null && victory === 0) {
      squares[data] = ( symbol % 2 === 0) ? 'X' : '0';

      this.setState({
        squares: squares,
        count: count + 1,
        symbol: symbol + 1
      });
      console.log('[count]', count);
    }
    else {
      alert('Так нельзя')
    }
    // if (this.isWinner(squares[data]) !== false) {
    this.isWinner(squares[data]);
    // return
  }

  newGame = () => {   
    this.setState({squares: Array(9).fill(null)});
    this.setState({count: 0,
                    victory: 0});
    // this.setState({symbol: 0});
  }

  selectPlayer = (e) => {
    let answer = e.target.textContent.toLowerCase();
    let selectPlayer = document.querySelector('.selectPlayer');
    selectPlayer.textContent = answer;

    if (answer === 'o') {this.setState({symbol: 1});}
    else if (answer === 'x') {this.setState({symbol: 0});}
  }


    render() {
        return (
          <div>
            <div>
              <h1>X win={this.state.x}</h1>
              <h1>O win={this.state.o}</h1>

            </div>
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
            <div>
              <p>Для выбора кто ходит первый "Х" или "О"  Нажмите на кнопку</p>
              <p>Первый ходит : <b className='selectPlayer'></b></p>
              <div
                onClick={this.selectPlayer}
                className='exel'
              >X</div>

              <div
                onClick={this.selectPlayer}
                className='exel'
              >O</div>

            </div>
            <p>Для  начала Новой Игры</p>
            <button
              onClick={this.newGame}
            >New Game
            </button>
          </div>
        );
    }
}

export default App;
