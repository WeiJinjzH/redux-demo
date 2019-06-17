import React from 'react';
import PropTypes from 'prop-types';
// 在App种获取store的第三种方法
import { connect } from 'react-redux';

// 把action传到component中去的第三种方法
import { bindActionCreators } from 'redux';
import { increament, decreament } from './actions/index';

class App extends React.Component {
  render() {
    /* 第一种方法 */
    // const { dispatch } = this.props
    console.log(this.props)

    /* 第二种方法 */
    const { increament, decreament } = this.props
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">
          {/* {this.context.store.getState()} 在App组件中获取store的第二种方法 */}
          {this.props.counter}
        </h1>
        <p className="text-center">
          {/* 把action传到component中去的第一种方法 */}
          {/* <button onClick={() => dispatch(increament('hello redux'))} className="btn btn-primary mr-2">Increase</button> */}
          {/* <button onClick={() => dispatch(decreament())} className="btn btn-danger my-2">Decrease</button> */}


          {/* 把action传到component中去的第二种方法 */}
          <button onClick={() => increament('hello redux')} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decreament()} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    )
  }
}
// 在App组件中获取store的第二种方法
// App.contextType = {
//   store: PropTypes.object,
// }


/* 把action传到component中去的第一种方法，connect可以传两个参数，第一个是state，第二个是action(可不传) 不传的时候直接在上面用dispatch就好了  */
const mapStateToProps = (state) => { // 把state转成props的形式
  // 这里的state相当于store.getState()
  return {
    counter: state.counter
  };
};


/* 把action传到component中去的第二种方法 在connect中传入第二个参数 此时this.props里面就没有dispatch了，而是有这个函数返回的方法 */
const mapDispatchToProps = (dispatch) => {
  return {
    // increament: (name) => { dispatch(increament(name)) }, // 把action传到component中去的第二种方法
    // decreament: () => { dispatch(decreament()) } // 把action传到component中去的第二种方法
  


    /* 把action传到component中去的第三种方法 */
    increament: bindActionCreators(increament, dispatch), // increament是导入进来的
    decreament: bindActionCreators(decreament, dispatch)
  }
}

App.propTypes = { // 加验证，必须传入number类型的counter
  counter: PropTypes.number.isRequired,
  increament: PropTypes.func.isRequired,
  decreament: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
