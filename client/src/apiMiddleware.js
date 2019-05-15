import {
    REDUX_WEBSOCKET_BROKEN,
    REDUX_WEBSOCKET_CLOSED,
    REDUX_WEBSOCKET_CONNECT,
    REDUX_WEBSOCKET_MESSAGE,
    REDUX_WEBSOCKET_OPEN,
} from '../actions/actionTypes';


const apiMiddleware = store => next => action => {
    const dispatch = store.dispatch;
    switch (action.type) {
        // User request to connect
        case REDUX_WEBSOCKET_CONNECT:
            // Configure the object
            const websocket = new WebSocket('ws://webtask.future-processing.com:8068/ws/currencies?format=json');

            // Attach the callbacks
            websocket.onopen = () => dispatch({
                type: REDUX_WEBSOCKET_OPEN
            });
            websocket.onclose = (event) => dispatch({
                type: REDUX_WEBSOCKET_BROKEN,
                payload: event
            });
            websocket.onmessage = (event) => dispatch({
                type: REDUX_WEBSOCKET_MESSAGE,
                payload: event
            });
            break;

        case REDUX_WEBSOCKET_CLOSED:
            websocket.close();
            break;

        default:
            break;
    };

    return next(action);
};

export default apiMiddleware;