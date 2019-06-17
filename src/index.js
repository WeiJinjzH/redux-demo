import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/counter'

const store = createStore(reducer)
// store.subscribe(() => console.log("State updated", store.getState()))

const render = () => {
    ReactDOM.render(<App
        onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
        value={ store.getState() }
        onDecreament={ () => store.dispatch({ type: 'DECREAMENT' }) }
    />, document.getElementById('root'));
}

render()
store.subscribe(render)

serviceWorker.unregister();
