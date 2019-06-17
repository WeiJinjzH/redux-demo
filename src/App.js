import React from 'react';
import PropsTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">
          {this.props.value}
        </h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.props.onDecreament} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    )
  }
}
App.protoTypes = {
  value: PropsTypes.number.isRequired,
  onIncrement: PropsTypes.func.isRequired,
  onDecreament: PropsTypes.func.isRequired,
}

export default App;
