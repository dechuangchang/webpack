import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(logger, thunk, promise())
    );

    return store;
};

export default configureStore;