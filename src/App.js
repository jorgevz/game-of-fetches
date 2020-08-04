import axios from 'axios';
import './App.css';


componentDidMount(); {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

export default App;



