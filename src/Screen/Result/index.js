import React, { Component } from "react";
class Result extends Component {
  render() {
    console.log(this.props.correctAns);
    const { correctAns, final } = this.props;
    const divStyle={backgroundColor:"black", color:"white",}
    let percentage=final*100/100
    return (
      <div style={divStyle}>
        <h1 style={{textAlign:'center'}}>Result</h1>
        <p style={{textAlign:"center"}}>
          your score:
          {final}
        </p>

        <p style={{textAlign:'center'}}> correctAns:{correctAns}</p>
   
    <p   style={{textAlign:'center'}}>percentage:{percentage}%</p>
        
      </div>
    );
  }
}
export default Result;
