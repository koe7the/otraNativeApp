import {persistStore} from 'redux-persist';
import {createStore} from 'redux';
import subjectsReducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(subjectsReducer, composeEnhancers());
export const persistor = persistStore(store);
