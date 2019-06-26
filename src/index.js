import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'

const logger = store => next => action => { // 它其实是三个嵌套函数
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
} 
const logger1 = function(store) {
    return function(next) {
        return function(action) {
            console.log('dispatching', action)
            let result = next(action)
            console.log('next state', store.getState())
            return result
        }
    }
}
const error = store => next => action => {
    try {
        next(action)
    } catch(e) {
        console.log(`error ${e}`)
    }
}
const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
// store.subscribe(() => console.log("State updated", store.getState()))

// ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root')); // 这里不提倡直接在App组件上传入store 当组件很多的时候就不是很方便
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
