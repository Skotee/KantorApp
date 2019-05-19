import { applyMiddleware, createStore } from 'redux';
import reduxWebsocket from '@giantmachines/redux-websocket';
import reducer from './reducer';
import apiMiddleware from '../apiMiddleware'

// Create the middleware instance.
const reduxWebsocketMiddleware = reduxWebsocket();

// Create the Redux store.
const store = (initialState) => (
    createStore(reducer, initialState, applyMiddleware(reduxWebsocketMiddleware, apiMiddleware))
)

export default store;