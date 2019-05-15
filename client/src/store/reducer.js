import {
  REDUX_WEBSOCKET_BROKEN,
  REDUX_WEBSOCKET_CLOSED,
  REDUX_WEBSOCKET_CONNECT,
  REDUX_WEBSOCKET_MESSAGE,
  REDUX_WEBSOCKET_OPEN,
} from '../actions/actionTypes';

const initialState = {

}

const APIurl = 'ws://webtask.future-processing.com:8068/ws/currencies?format=json';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REDUX_WEBSOCKET_OPEN:
            return {
                ...state,
                connected: true,
            };

        case REDUX_WEBSOCKET_CONNECT:
        return {
            ...state,
            url: APIurl,
        };

    case REDUX_WEBSOCKET_MESSAGE:
        return {
            ...state,
            messages: [
                ...state.messages,
                {
                    data: JSON.parse(APIurl),
                },
            ],
        };

    case REDUX_WEBSOCKET_BROKEN:
    case REDUX_WEBSOCKET_CLOSED:
        return {
            ...state,
            connected: false,
        };

    default:
        return state
    }
}

export default reducer;