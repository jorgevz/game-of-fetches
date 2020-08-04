import React from 'react';
import axios from 'axios';

export default class Date extends React.Component {

  state = {
  dates: []
    }
componentDidMount(){
 axios.get(`http://anapioficeandfire.com/api/characters/16`)
  }

}