import {
    buy,
    sell,
    login,
} from '../actions/actions';

const initialState = {
 messages: [],
 walletPLN: 1500,
 price: 1,
 howmuch: 1,
 time : new Date().toLocaleString(),
 myCurrenciesAmount: [
    {Code: "USD", Amount: 100},
    {Code: "EUR", Amount: 50},
    {Code: "CHF", Amount: 20},
    {Code: "RUB", Amount: 30},
    {Code: "CZK", Amount: 200},
],
 myCurrenciesValue: [
     {Code: "USD", Value: 1},
     {Code: "EUR", Value: 50},
     {Code: "CHF", Value: 20},
     {Code: "RUB", Value: 30},
     {Code: "CZK", Value: 200},
],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REDUX_WEBSOCKET::MESSAGE':
                return {
                    ...state,
                    messages: [
                        ...state.messages,
                        ...JSON.parse(action.payload.event.data).Items,
                        JSON.parse(action.payload.event.data).PublicationDate,
                    ],
                };
        case 'BUY':
            return {
                ...state,
                price: state.howmuch * state.messages[0].PurchasePrice,
                walletPLN: state.walletPLN - state.price,
                howmuch: action.payload * state.messages[0].Unit,
            };
        case 'SELL':
        return {
            ...state,
            howmuch: action.payload,
            price: state.howmuch * state.messages[0].SellPrice,
            walletPLN: state.walletPLN + state.price,
        };
        case 'LOGIN':
        console.log("Logged");
        return {};

    default:
        return state
    }
}

export default reducer;