const apiMiddleware = store => next => action => {
    const dispatch = store.dispatch;
    console.log(action.type);
    switch (action.type) {
        // User request to connect
        default:
            break;
    };
    return next(action);
};
export default apiMiddleware;