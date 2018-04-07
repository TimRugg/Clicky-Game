import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pics to the pics json array
  state = {
    pics: pics,
    selectedPics: [],
    score: 0,
    total: 0
  };

  handleClick = id => {
    // Filter this.state.pics for pics with an id not equal to the id being removed
    // const pics = this.state.pics.filter(pic => pic.id !== id);
    // let selected = [...this.state.pics]
    // selected.map(pic => {
    // if (pic.id === id && pic.selected) {
    if (this.state.selectedPics.includes(id)) {
      // game over
      console.log("Game Over")
      this.setState({
        selectedPics: [],
        score: 0,
        total: (this.state.score > this.state.total) ? this.state.score : this.state.total,
      })
      // } else if (pic.id === id && !pic.selected) {
    } else {
      // pic.selected = true;
      // add to score
      this.setState({
        selectedPics: [...this.state.selectedPics, id],
        score: this.state.score + 1
      }, () => console.log(`Score: ${this.state.score} Total: ${this.state.total}`))
    }
    // })
    // shuffle the pics win or lose
    this.shuffleArray(pics)
  };

  // randomize order of pics
  ZZZshuffleArray = array => {
    let tempNumber = 0;
    let array12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let tempArray = [];
    for (let i = 11; i > 0; i--) {
      tempNumber = Math.floor(Math.random() * (i + 1));
      tempArray.push(array[tempNumber]); //add unique number to array
      array12.splice(tempNumber, 1);
    }
    for (let i = 0; i < 12; i++) {
      [array[i]] = [tempArray[i]]
    }
  }

  // folloiwng snippet from stack overflow
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  // Map over this.pic.pics and render a PictureCard component for each pic object
  render() {
    return (
      <Wrapper>
        {this.state.pics.map(pic => (
          <PictureCard
            handleClick={this.handleClick}
            id={pic.id}
            key={pic.id}
            image={pic.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;