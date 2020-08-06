import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class Margarytyrell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: []
    }
  }
  componentDidMount() {
    Axios.get("https://anapioficeandfire.com/api/characters/16").then(res => {
      const MargaeryBorn=res.data.born;
      console.log(MargaeryBorn)
      this.setState({data:MargaeryBorn})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  }
  render() {
    return (
      <div>
        <h2> Where was Margaery Tyrell born?</h2>
        <h4>{this.state.data}.</h4>
      </div>
    )
  }
}