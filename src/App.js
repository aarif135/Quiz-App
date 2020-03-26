import React, { Component } from "react";
import logo from "./logo.svg";

import Start from "./Screen/Start";
import Question from "./Screen/Question";
import Result from "./Screen/Result";

class App extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      resCom: false,
      correct:''
    };
  }

  start = () => {
    this.setState({
      start: true
    });
  };
  result = () => {
    this.setState({
      resCom: true
    });
  };
  scoreUpdate=(updatedScore,correct)=>{
    this.setState({
      updatedScore,
      
    })
  }
  correctUpdate=(correct)=>{
    this.setState({
      correct

    })
  }
  resComponent=()=>{
    this.setState({
      resCom:true
    })
  }
  render() {
    const { start, resCom,updatedScore ,correct} = this.state;
    console.log(updatedScore)

    return (
      <div className="App">
        {start ?(
          <div>
           
          
 {resCom?<Result  correctAns={correct} final={updatedScore}/>:<Question res={this.resComponent} correctUpdate={this.correctUpdate} scoreUpdate={this.scoreUpdate} change={this.result} />}
          </div>
        ) : (
          <Start change={this.start} />
        )}

   
      </div>
    );
  }
}

export default App;
