import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';




class App extends React.Component {
  
  state = { lat: null, errorMessage: '' };
  
  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    if(!this.state.lat && !this.state.errorMessage) {
      return <div>LOADING</div>
    }
    
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'))