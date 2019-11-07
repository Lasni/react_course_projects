import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    latitude: null,
    error: ''
  }



  componentDidMount = () => {
    console.log('COMPONENT DID MOUNT')
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState(() => ({ latitude: position.coords.latitude })),
      err => this.setState(() => ({ error: err.message }))
    )
  }

  componentDidUpdate = () => {
    console.log('COMPONENT DID UPDATE')
  }


  render() {
    return (
      <div>
        <div>{this.state.latitude
          ?
          <SeasonDisplay latitude={this.state.latitude} />
          :
          <Spinner message="Please accept location request"/>}
        </div>
        <p>{this.state.error && this.state.error}</p>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));