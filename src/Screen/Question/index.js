import React, { Component } from "react";
import Swal, { swal } from "sweetalert2/dist/sweetalert2.js";
class Question extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      questionData: "",
      tick: [],
      score: "",
      anwserCorrect:''
    };
  }

  componentDidMount() {
    this.getAllData();
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
  update = e => {
    const { tick } = this.state;

    tick.push(e.target.value);
    this.setState({
      tick
    });
  };
  checkAns = () => {
    const { data, tick } = this.state;
    const ans = [];
    data.map(item => {
      return ans.push(item.correct_answer);
    });
    let score = 0;
    let correct =0


    for(let i=0;i<tick.length;i++){
      if (tick[i]===ans[i]) {
        score=score+10
        correct=correct+1
        
      }
    }
    let finalScore = score;
    this.setState({
      score: finalScore.toString(),
      anwserCorrect:correct

    });
    console.log(correct)
 
    console.log(this.props.scoreUpdate(score)) 
    console.log(this.props.correctUpdate(correct))
    console.log(this.props.res())
  
     

  };
  render() {
    const { data, score } = this.state;
    console.log(score);


    const BtnStyle = {
      backgroundColor: "brown",
      border: "none",
      height: "4rem",
      width: "contain",
      marginLeft: "50%",

      color: "white"
    };

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Quiz OF General Knowledge</h1>
        {data.map((item, index) => {
          return (
            <div
              style={{
                backgroundColor: "lightgreen",
                color: "black",
                textAlign: "center"
              }}
            >
              <ul style={{listStyle:"none"}} >
                <li>
                  <h3>{item.question}</h3>
                </li>
                <li>
                  {" "}
                  <input
                    type="radio"
                    value={item.incorrect_answers[0]}
                    onChange={this.update}
                    name={index}
                  />
                  {item.incorrect_answers[0]}
                </li>
                <li>
                  {" "}
                  <input
                    type="radio"
                    value={item.incorrect_answers[1]}
                    onChange={this.update}
                    name={index}
                  />{" "}
                  {item.incorrect_answers[1]}
                </li>

                <li>
                  <input
                    type="radio"
                    value={item.incorrect_answers[1]}
                    onChange={this.update}
                    name={index}
                  />{" "}
                  {item.incorrect_answers[2]}
                </li>
                <li>
                  <input
                    type="radio"
                    value={item.correct_answer}
                    onChange={this.update}
                    name={index}
                  />{" "}
                  {item.correct_answer}
                </li>
              </ul>
            </div>
          );
        })}
        <button  onClick={this.checkAns} style={BtnStyle}>
          Submit answer
        </button>
      </div>
    );
  }
}
export default Question;
