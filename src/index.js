import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/counter'
import { increament, decreament } from './actions'

const store = createStore(reducer)
// store.subscribe(() => console.log("State updated", store.getState()))

const render = () => {
    ReactDOM.render(<App
        value={ store.getState() }
        onIncrement={ () => store.dispatch(increament()) }
        onDecreament={ () => store.dispatch(decreament()) }
    />, document.getElementById('root'));
}

render()
store.subscribe(render)

serviceWorker.unregister();
