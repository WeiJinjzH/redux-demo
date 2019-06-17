import React from 'react';
import PropTypes from 'prop-types';
// 在App种获取store的第三种方法
import { connect } from 'react-redux';
import { increament, decreament } from './actions/index';

class App extends React.Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">
          {/* {this.context.store.getState()} 在App组件中获取store的第二种方法 */}
          {this.props.counter}
        </h1>
        <p className="text-center">
          <button onClick={() => dispatch(increament('hello redux'))} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => dispatch(decreament())} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    )
  }
}
// 在App组件中获取store的第二种方法
// App.contextType = {
//   store: PropTypes.object,
// }

const mapStateToProps = (state) => { // 把state转成props的形式
  // 这里的state相当于store.getState()
  return {
    counter: state.counter
  };
};

App.propTypes = { // 加验证，必须传入number类型的counter
  counter: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(App);
