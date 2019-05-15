import {
    WEBSOCKET_BROKEN,
    WEBSOCKET_CLOSED,
    WEBSOCKET_CONNECT,
    WEBSOCKET_DISCONNECT,
    WEBSOCKET_MESSAGE,
    WEBSOCKET_OPEN,
    WEBSOCKET_SEND,
} from '@giantmachines/redux-websocket';


export const REDUX_WEBSOCKET_BROKEN = `${WEBSOCKET_BROKEN}`;
export const REDUX_WEBSOCKET_OPEN = `${WEBSOCKET_OPEN}`;
export const REDUX_WEBSOCKET_CLOSED = `${WEBSOCKET_CLOSED}`;
export const REDUX_WEBSOCKET_MESSAGE = `${WEBSOCKET_MESSAGE}`;
export const REDUX_WEBSOCKET_CONNECT = `${WEBSOCKET_CONNECT}`;
export const REDUX_WEBSOCKET_DISCONNECT = `${WEBSOCKET_DISCONNECT}`;
export const REDUX_WEBSOCKET_SEND = `${WEBSOCKET_SEND}`;



/**
 * An example action creator to request a WebSocket connection.
 */


// Use it something like this wherever you wire up your actions
// (react-redux, other middlewares, etc)
store.dispatch(action());