import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import {useLocation} from './useLocation';

const App = () => {

  const [lat, errorMessage] = useLocation()
  
  let content
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay latitude={lat}/>
    console.log('lat', lat)
  } else {
    content = <Spinner message={"Please accept location request"}/>
  }
  return (
    <div className="border red">{content}</div>
  )
}




// class App extends React.Component {
//   state = {
//     latitude: null,
//     error: ''
//   }

//   componentDidMount = () => {
//     console.log('COMPONENT DID MOUNT')
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState(() => ({ latitude: position.coords.latitude })),
//       err => this.setState(() => ({ error: err.message }))
//     )
//   }

//   componentDidUpdate = () => {
//     console.log('COMPONENT DID UPDATE')
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.latitude
//           ?
//           <SeasonDisplay latitude={this.state.latitude} />
//           :
//           <Spinner message="Please accept location request"/>}
//         </div>
//         <p>{this.state.error && this.state.error}</p>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.querySelector('#root'));