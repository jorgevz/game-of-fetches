import React from 'react';
import axios from 'axios'

export default class House extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          data: []
        }
      }
      componentDidMount() {
        Axios.get("http://www.anapioficeandfire.com/api/houses/378")
        .then(res => {
          const houseRegion=res.data.region;
          console.log(houseRegion)
          this.setState({data:houseRegion})
        })
        .catch(error => {
          console.log('there is an error', error)
        })
      }
      render() {
        return (
          <div>
            <h2> What region is House Targaryen in?</h2>
            <h4>{this.state.data}.</h4>
          </div>
        )
      }

}