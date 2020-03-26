import React, { Component } from "react";
import Question from "../Question";
class Start extends Component {
  constructor(){
    super()
    this.state={
      index:0,
      data:[],
    }
  }
  componentDidMount() {
    this.getAllData();
 
    this.question()
  }
  getAllData = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then(res => res.json())
      .then(res => {
      
        return this.setState({
          
          data: res.results
        });
      });
  };
  question=()=>{
    const{data}=this.state
 
  }




  render() {
    
    const BtnStyle = {
      backgroundColor: "brown",
      border: "none",
      height: "4rem",
      width: "5rem",
      color:"white",


      marginLeft:"50%"
    };
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Welcome to the Quiz</h1>
        <button onClick={this.props.change} style={BtnStyle}>
          Start
        </button>
  
      </div>
    );
  }
}
export default Start;
