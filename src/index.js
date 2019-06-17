import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'
import { increament, decreament } from './actions'

const store = createStore(rootReducer)
// store.subscribe(() => console.log("State updated", store.getState()))

// ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root')); // 这里不提倡直接在App组件上传入store 当组件很多的时候就不是很方便
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
